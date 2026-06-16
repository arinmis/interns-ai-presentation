import { getSeatMap } from "../../../lib/store";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const flightId = searchParams.get("flightId");
    const map = getSeatMap(flightId);
    return Response.json(map);
  } catch (e) {
    return Response.json({ error: String(e.message || e) }, { status: 400 });
  }
}
