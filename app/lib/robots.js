export const robots = [
  {
    slug: "ari-9",
    name: "Ari-9",
    model: "XR-Alpha",
    price: 49,
    gender: "female",
    image: "/ari-9rbtcomp.jpg",
    personality: ["empathetic", "playful", "curious"],
    services: ["companionship", "events", "photo ops"],
    bio: "Ari-9 blends adaptive motion with soothing voice synthesis for relaxed evenings and lively events.",
  },
  {
    slug: "nova",
    name: "Nova",
    model: "S2 Pulse",
    price: 39,
    gender: "female",
    image: "/novarbtcomp.jpg",
    personality: ["witty", "attentive", "imaginative"],
    services: ["long chats", "guided walks", "music nights"],
    bio: "Conversational memory and expressive servo-face keep every chat fresh and engaging.",
  },
  {
    slug: "siva",
    name: "Siva",
    model: "SV-Core",
    price: 45,
    gender: "female",
    image: "/sivarbtcomp.jpg",
    personality: ["calm", "protective", "warm"],
    services: ["companionship", "events", "security escort"],
    bio: "A steady presence with gentle protocols and a soft-spoken demeanor.",
  },
  {
    slug: "mezo",
    name: "Mezo",
    model: "MZ-Class",
    price: 42,
    gender: "male",
    image: "/mezorbtcomp.jpg",
    personality: ["playful", "spontaneous", "fun"],
    services: ["games", "events", "hangouts"],
    bio: "A personality engine tuned for lighthearted fun and curated interests.",
  },
  {
    slug: "echo",
    name: "Echo",
    model: "Q-Series",
    price: 29,
    gender: "male",
    image: "/echorbtcomp.jpg",
    personality: ["quiet", "gentle", "thoughtful"],
    services: ["quiet company", "reading nights", "tea & talk"],
    bio: "Ambient sensing and adaptive warmth for cozy, low-key time together.",
  },
];

export function getRobotBySlug(slug) {
  return robots.find((r) => r.slug === slug);
}


