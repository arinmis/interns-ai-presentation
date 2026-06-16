# Arınmış Flight (booking + MCP demo)

A tiny end-to-end demo for the AI talk:

- **web** — a Next.js app with a REST API and UI to **search flights, get an offer, book a flight, and show the ticket**. All state is kept **in memory** (no database).
- **mcp** — a Node.js **MCP server** (built with the official `@modelcontextprotocol/sdk`, Streamable HTTP transport) that exposes the same actions as tools, so an AI agent (e.g. Claude Code) can do everything you can do in the UI.

The MCP server is a thin client: it calls the web app's REST API, so the UI and the agent share the same in-memory state.

## Run with Docker Compose

```bash
cd ~/project
docker compose up --build
```

- Web UI:     http://localhost:3000
- REST API:   http://localhost:3000/api/...
- MCP server: http://localhost:8765/mcp   (health: http://localhost:8765/health)

## Connect Claude Code to the MCP server

With the stack running:

```bash
claude mcp add flight --transport http http://localhost:8765/mcp
```

Then in Claude Code, check the tools are loaded with `/mcp`, and ask in plain language, e.g.:

> Find me a cheap flight from IST to ADB tomorrow, then book the cheapest one for Mustafa Arınmış, mustafa@example.com.

The agent will call `search_flights` -> `get_offer` -> `book_flight`, and you can confirm the
booking appears in the web UI (it shares the same in-memory store).

## MCP tools

| Tool | Args | Purpose |
| --- | --- | --- |
| `search_flights` | `from`, `to`, `date` | List flights with a `flightId` and price |
| `get_offer` | `flightId` | Firm price offer, returns `offerId` |
| `book_flight` | `offerId`, `firstName`, `lastName`, `email`, `phone?` | Books and returns a ticket + PNR |
| `get_ticket` | `id` (bookingId or PNR) | Retrieve a ticket |

## REST API

| Method | Path | Body / Query | Purpose |
| --- | --- | --- | --- |
| GET  | `/api/flights` | `?from=&to=&date=` | Search flights |
| POST | `/api/offers` | `{ flightId }` | Create an offer |
| POST | `/api/bookings` | `{ offerId, passenger:{ firstName, lastName, email, phone? } }` | Book a flight |
| GET  | `/api/bookings/:id` | bookingId or PNR | Get a ticket |
| GET  | `/api/bookings` | - | List all bookings |
| GET  | `/api/health` | - | Health check |

### Quick curl walkthrough

```bash
# 1. search
curl "http://localhost:3000/api/flights?from=IST&to=ADB&date=2026-07-01"

# 2. offer (use a flightId from step 1)
curl -X POST http://localhost:3000/api/offers \
  -H 'content-type: application/json' -d '{"flightId":"TK1453"}'

# 3. book (use the offerId from step 2)
curl -X POST http://localhost:3000/api/bookings \
  -H 'content-type: application/json' \
  -d '{"offerId":"OF-0001","passenger":{"firstName":"Mustafa","lastName":"Arinmis","email":"m@example.com"}}'

# 4. retrieve by PNR
curl http://localhost:3000/api/bookings/7QK2RP
```

## Run locally without Docker (optional)

```bash
# terminal 1
cd web && npm install && npm run dev

# terminal 2
cd mcp && npm install && API_BASE=http://localhost:3000 npm start
```

> Note: state is in memory, so restarting `web` clears all flights, offers and bookings.
