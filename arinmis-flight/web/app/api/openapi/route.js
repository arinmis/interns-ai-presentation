import { openapi } from "../../../lib/openapi";

export async function GET() {
  return Response.json(openapi);
}
