import { getTicket } from "../../../../lib/store";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  const ticket = getTicket(params.id);
  if (!ticket) return Response.json({ error: "Ticket not found" }, { status: 404 });
  return Response.json({ ticket });
}
