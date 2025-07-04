"use client"

import Header from "@/components/header"
import AuthGuard from "@/components/auth-guard"

export default function AboutPage() {
  return (
    <AuthGuard>
      {(user, signIn, signOut) => (
        <div className="min-h-screen bg-gray-50">
          <Header user={user} onSignOut={signOut} />

          <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <article className="bg-white rounded-lg shadow-sm border p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">About Me</h1>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Welcome to my personal blog! I'm passionate about sharing my thoughts, experiences, and insights on
                  various topics that interest me.
                </p>

                <p>
                  This blog serves as my digital space where I can express my ideas, document my journey, and connect
                  with like-minded individuals who share similar interests.
                </p>

                <p>
                  Whether it's about technology, personal growth, travel, or just random thoughts that cross my mind,
                  you'll find a diverse range of content here.
                </p>

                <p>
                  Feel free to reach out if you'd like to connect or discuss any of the topics I write about. I'm always
                  open to meaningful conversations and new perspectives.
                </p>
              </div>
            </article>
          </main>
        </div>
      )}
    </AuthGuard>
  )
}
