import { getAllPosts } from "@/lib/posts"
import PostPageClient from "./PostPageClient"

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function PostPage() {
  return <PostPageClient />
}
