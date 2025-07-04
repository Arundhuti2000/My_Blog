"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"
import { getPostBySlug } from "@/lib/posts"
import Header from "@/components/header"
import { Calendar, ArrowLeft } from "lucide-react"
import { format } from "date-fns"

export default function PostPageClient() {
  const params = useParams()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)

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
    const loadPost = async () => {
      if (params?.slug) {
        try {
          const postData = await getPostBySlug(params.slug as string)
          setPost(postData)
        } catch (error) {
          console.error("Error loading post:", error)
          setPost(null)
        } finally {
          setLoading(false)
        }
      }
    }

    loadPost()
  }, [params?.slug])

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

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header user={user} onSignOut={signOut} />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
            <Link href="/" className="text-pink-600 hover:text-pink-700">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onSignOut={signOut} />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to all posts
        </Link>

        <article className="bg-white rounded-lg shadow-sm border p-8">
          <header className="mb-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar size={16} className="mr-2" />
              <time dateTime={post.date}>{format(new Date(post.date), "MMMM d, yyyy")}</time>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-pink-100 text-pink-800 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">{post.content}</div>
          </div>
        </article>
      </main>
    </div>
  )
}
