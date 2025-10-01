import { getCategoryNames, getRobotsForCategory } from "@/app/lib/categories";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(_req, { params }) {
  const category = String(params.category || "").toLowerCase();
  const list = getRobotsForCategory(category);
  if (!list) {
    return Response.json(
      { error: "Unknown category", categories: getCategoryNames() },
      { status: 404 }
    );
  }
  return Response.json({ category, robots: list });
}


