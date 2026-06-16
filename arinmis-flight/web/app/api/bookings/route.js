import { bookFlight, allBookings } from "../../../lib/store";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({ bookings: allBookings() });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const booking = bookFlight(body.offerId, body.passenger, body.seat);
    return Response.json({ booking }, { status: 201 });
  } catch (e) {
    return Response.json({ error: String(e.message || e) }, { status: 400 });
  }
}
