import { createOffer } from "../../../lib/store";

export async function POST(request) {
  try {
    const body = await request.json();
    const offer = createOffer(body.flightId);
    return Response.json({ offer });
  } catch (e) {
    return Response.json({ error: String(e.message || e) }, { status: 400 });
  }
}
