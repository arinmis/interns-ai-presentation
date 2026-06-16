import { searchFlights } from "../../../lib/store";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const date = searchParams.get("date");
    const flights = searchFlights(from, to, date);
    return Response.json({ count: flights.length, flights });
  } catch (e) {
    return Response.json({ error: String(e.message || e) }, { status: 400 });
  }
}
