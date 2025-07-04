"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { getPostBySlug } from "@/lib/posts"
import Header from "@/components/header"
import AuthGuard from "@/components/auth-guard"
import { Calendar, ArrowLeft } from "lucide-react"
import { format } from "date-fns"

export default function PostPageClient() {
  const params = useParams()
  const post = getPostBySlug(params.slug as string)

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            ← Back to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <AuthGuard>
      {(user, signIn, signOut) => (
        <div className="min-h-screen bg-gray-50">
          <Header user={user} onSignOut={signOut} />

          <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
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

                {post.tags && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
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
      )}
    </AuthGuard>
  )
}
