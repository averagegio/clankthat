import Link from "next/link";
import BackHome from "@/app/components/BackHome";
import RobotCard from "@/app/components/RobotCard";
import { getCategoryNames, getRobotsForCategory } from "@/app/lib/categories";

export default function ServiceCategoryPage({ params }) {
  const category = String(params.category || "");
  const robots = getRobotsForCategory(category);

  if (!robots) {
    return (
      <div className="mx-auto max-w-screen-lg px-4 pt-8">
        <BackHome />
        <h1 className="text-2xl font-semibold neon-heading">Category not found</h1>
        <p className="mt-2 text-white/75">Try one of: {getCategoryNames().join(", ")}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-lg px-4 pt-8">
      <BackHome />
      <div className="flex items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold neon-heading capitalize">{category}</h1>
          <p className="mt-1 text-white/75">Browse robots available for {category}.</p>
        </div>
        <Link href="/" className="rounded-full px-4 py-2 btn-neon-outline border">Home</Link>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {robots.map((r) => (
          <RobotCard
            key={r.slug}
            name={r.name}
            model={r.model}
            tagline={r.bio}
            price={r.price}
            image={r.image}
            slug={r.slug}
          />
        ))}
      </div>
    </div>
  );
}


