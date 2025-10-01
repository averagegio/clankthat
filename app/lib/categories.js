import { robots } from "@/app/lib/robots";

export const categoryToSlugs = {
  companionship: ["ari-9", "echo", "nova"],
  events: ["mezo", "siva"],
  assistance: ["echo", "mezo"],
};

export function getCategoryNames() {
  return Object.keys(categoryToSlugs);
}

export function getRobotsForCategory(category) {
  const key = String(category || "").toLowerCase();
  if (!categoryToSlugs[key]) return null;
  const allowed = new Set(categoryToSlugs[key]);
  return robots.filter((r) => allowed.has(r.slug));
}


