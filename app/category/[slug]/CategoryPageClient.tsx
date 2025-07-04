"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import { getPostsByCategory } from "@/lib/posts"
import PostCard from "@/components/post-card"
import Header from "@/components/header"

export default function CategoryPageClient() {
  const params = useParams()
  const [user, setUser] = useState<any>(null)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const category = params.slug as string

  const categoryNames: { [key: string]: string } = {
    lifestyle: "Lifestyle",
    environment: "Environment",
    travel: "Travel",
    wellness: "Wellness",
  }

  useEffect(() => {
    const initAuth = async () => {
      try {
        const { onAuthStateChanged } = await import("firebase/auth")
        const { auth } = await import("@/lib/firebase")

        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user)
        })

        return () => unsubscribe()
      } catch (error) {
        console.error("Error initializing auth:", error)
      }
    }

    initAuth()
  }, [])

  useEffect(() => {
    const loadPosts = async () => {
      if (category) {
        try {
          const categoryPosts = await getPostsByCategory(category)
          setPosts(categoryPosts)
        } catch (error) {
          console.error("Error loading posts:", error)
          setPosts([])
        } finally {
          setLoading(false)
        }
      }
    }

    loadPosts()
  }, [category])

  const signOut = async () => {
    try {
      const { signOut } = await import("firebase/auth")
      const { auth } = await import("@/lib/firebase")
      await signOut(auth)
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header user={user} onSignOut={signOut} />
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-500 border-t-transparent"></div>
        </div>
      </div>
    )
  }

  return (
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
  )
}
