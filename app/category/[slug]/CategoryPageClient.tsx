"use client"

import { useParams } from "next/navigation"
import { getAllPosts } from "@/lib/posts"
import PostCard from "@/components/post-card"
import Header from "@/components/header"
import AuthGuard from "@/components/auth-guard"

export default function CategoryPageClient() {
  const params = useParams()
  const category = params.slug as string
  const allPosts = getAllPosts()
  const posts = allPosts.filter((post) => post.category === category)

  const categoryNames: { [key: string]: string } = {
    lifestyle: "Lifestyle",
    environment: "Environment",
    travel: "Travel",
    wellness: "Wellness",
  }

  return (
    <AuthGuard>
      {(user, signIn, signOut) => (
        <div className="min-h-screen bg-gray-50">
          <Header user={user} onSignOut={signOut} />

          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{categoryNames[category] || "Category"}</h1>
              <p className="text-xl text-gray-600">
                Discover posts about {categoryNames[category]?.toLowerCase() || category}
              </p>
            </div>

            {posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No posts in this category yet.</p>
              </div>
            )}
          </main>
        </div>
      )}
    </AuthGuard>
  )
}
