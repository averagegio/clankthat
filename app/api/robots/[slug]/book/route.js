import { getRobotBySlug } from "@/app/lib/robots";

export async function POST(req, { params }) {
  const robot = getRobotBySlug(params.slug);
  if (!robot) return new Response("Not found", { status: 404 });

  const body = await req.json().catch(() => ({}));
  const { when = new Date().toISOString(), hours = 1 } = body;

  const confirmation = {
    id: Math.random().toString(36).slice(2),
    slug: robot.slug,
    when,
    hours,
    total: robot.price * hours,
    message: `Booked ${robot.name} for ${hours}h on ${new Date(when).toLocaleString()}`,
  };

  return Response.json({ ok: true, confirmation });
}


