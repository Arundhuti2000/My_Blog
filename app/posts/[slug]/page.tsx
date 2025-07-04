import PostPageClient from "./PostPageClient"

// For static export, we need to provide static params
export function generateStaticParams() {
  // Return the default post slugs that we know exist
  return [{ slug: "welcome-to-my-blog" }, { slug: "my-journey-in-tech" }, { slug: "finding-balance-in-busy-world" }]
}

export default function PostPage() {
  return <PostPageClient />
}
