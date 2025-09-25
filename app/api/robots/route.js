import { robots } from "@/app/lib/robots";

export async function GET() {
  return Response.json({ robots });
}


