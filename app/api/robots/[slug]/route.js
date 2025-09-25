import { getRobotBySlug } from "@/app/lib/robots";

export async function GET(_req, { params }) {
  const robot = getRobotBySlug(params.slug);
  if (!robot) return new Response("Not found", { status: 404 });
  return Response.json({ robot });
}


