import { robots } from "@/app/lib/robots";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CATEGORY_TO_SLUGS = {
  companionship: ["ari-9", "echo", "nova"],
  events: ["mezo", "siva"],
  assistance: ["echo", "mezo"],
};

export async function GET(_req, { params }) {
  const category = String(params.category || "").toLowerCase();
  if (!CATEGORY_TO_SLUGS[category]) {
    return Response.json(
      { error: "Unknown category", categories: Object.keys(CATEGORY_TO_SLUGS) },
      { status: 404 }
    );
  }

  const allowed = new Set(CATEGORY_TO_SLUGS[category]);
  const list = robots.filter((r) => allowed.has(r.slug));
  return Response.json({ category, robots: list });
}


