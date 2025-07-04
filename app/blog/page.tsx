"use client"

import { getAllPosts } from "@/lib/posts"
import PostCard from "@/components/post-card"
import Header from "@/components/header"
import AuthGuard from "@/components/auth-guard"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <AuthGuard>
      {(user, signIn, signOut) => (
        <div className="min-h-screen bg-gray-50">
          <Header user={user} onSignOut={signOut} />

          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">All Stories</h1>
              <p className="text-xl text-gray-600">Discover all my thoughts, experiences, and insights</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {posts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No posts yet. Check back soon!</p>
              </div>
            )}
          </main>
        </div>
      )}
    </AuthGuard>
  )
}
