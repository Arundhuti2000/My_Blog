"use client"

import { getAllPosts } from "@/lib/posts"
import PostCard from "@/components/post-card"
import Header from "@/components/header"
import AuthGuard from "@/components/auth-guard"

export default function Home() {
  const posts = getAllPosts()

  return (
    <AuthGuard>
      {(user, signIn, signOut) => (
        <div className="min-h-screen bg-gray-50">
          <Header user={user} onSignOut={signOut} />

          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to My Blog</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A place where I share my thoughts, experiences, and insights about life, technology, and everything in
                between.
              </p>
            </div>

            <div className="grid gap-8 md:gap-12">
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

          <footer className="bg-white border-t mt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center text-gray-600">
                <p>&copy; 2024 My Personal Blog. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </AuthGuard>
  )
}
