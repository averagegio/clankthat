import { getSessionUserId } from "@/app/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const id = await getSessionUserId();
  return Response.json({ id });
}


