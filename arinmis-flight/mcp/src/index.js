import express from "express";
import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";

const API_BASE = process.env.API_BASE || "http://localhost:3000";
const PORT = process.env.PORT || 8765;

async function api(path, options) {
  const res = await fetch(`${API_BASE}${path}`, options);
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = text; }
  if (!res.ok) {
    const msg = typeof data === "string" ? data : data && data.error ? data.error : JSON.stringify(data);
    throw new Error(msg);
  }
  return data;
}

function ok(data) {
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
}
function fail(e) {
  return { isError: true, content: [{ type: "text", text: `Error: ${e.message || e}` }] };
}

function buildServer() {
  const server = new McpServer({ name: "flight-mcp", version: "1.0.0" });

  server.tool(
    "search_flights",
    "Search available flights between two cities on a date. Returns flight options with a flightId, times and price.",
    {
      from: z.string().describe("Origin city or airport code, e.g. IST"),
      to: z.string().describe("Destination city or airport code, e.g. ADB"),
      date: z.string().describe("Departure date in YYYY-MM-DD"),
    },
    async ({ from, to, date }) => {
      try {
        const q = new URLSearchParams({ from, to, date }).toString();
        return ok(await api(`/api/flights?${q}`));
      } catch (e) { return fail(e); }
    }
  );

  server.tool(
    "get_offer",
    "Get a firm price offer for a specific flight (by flightId from search_flights). Returns an offerId required to book.",
    { flightId: z.string().describe("flightId returned by search_flights, e.g. TK1453") },
    async ({ flightId }) => {
      try {
        return ok(await api(`/api/offers`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ flightId }),
        }));
      } catch (e) { return fail(e); }
    }
  );

  server.tool(
    "get_seat_map",
    "Get the seat map for a flight (by flightId). Each seat has a type: window, middle or aisle, and whether it is occupied. Use this to pick a window seat before booking.",
    { flightId: z.string().describe("flightId from search_flights, e.g. PC557") },
    async ({ flightId }) => {
      try {
        return ok(await api(`/api/seatmap?flightId=${encodeURIComponent(flightId)}`));
      } catch (e) { return fail(e); }
    }
  );

  server.tool(
    "book_flight",
    "Book a flight using an offerId and passenger details. Required: offerId, firstName, lastName, email. Optionally pass a specific seat (e.g. 12A); use get_seat_map first to choose an available window seat. Returns the ticket with a PNR.",
    {
      offerId: z.string().describe("offerId from get_offer"),
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().describe("Passenger email"),
      phone: z.string().optional(),
      seat: z.string().optional().describe("Specific seat id like 12A. Must be available (see get_seat_map)."),
    },
    async ({ offerId, firstName, lastName, email, phone, seat }) => {
      try {
        return ok(await api(`/api/bookings`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ offerId, passenger: { firstName, lastName, email, phone }, seat }),
        }));
      } catch (e) { return fail(e); }
    }
  );

  server.tool(
    "get_ticket",
    "Retrieve a ticket/booking by its bookingId or 6-character PNR.",
    { id: z.string().describe("bookingId (e.g. BK-0001) or PNR (e.g. 7QK2RP)") },
    async ({ id }) => {
      try {
        return ok(await api(`/api/bookings/${encodeURIComponent(id)}`));
      } catch (e) { return fail(e); }
    }
  );

  return server;
}

const app = express();
app.use(express.json());

// Stateless Streamable HTTP: a fresh server + transport per request.
app.post("/mcp", async (req, res) => {
  try {
    const server = buildServer();
    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
    res.on("close", () => {
      try { transport.close(); } catch {}
      try { server.close(); } catch {}
    });
    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
  } catch (e) {
    if (!res.headersSent) {
      res.status(500).json({
        jsonrpc: "2.0",
        error: { code: -32603, message: String(e.message || e) },
        id: null,
      });
    }
  }
});

app.get("/mcp", (_req, res) => res.status(405).json({ error: "Method not allowed. Use POST." }));
app.delete("/mcp", (_req, res) => res.status(405).json({ error: "Method not allowed." }));
app.get("/health", (_req, res) => res.json({ ok: true, service: "flight-mcp", apiBase: API_BASE }));

app.listen(PORT, () => {
  console.log(`Flight MCP server listening on :${PORT} (POST /mcp) -> API ${API_BASE}`);
});
