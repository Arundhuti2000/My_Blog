"use client"

import Header from "@/components/header"
import AuthGuard from "@/components/auth-guard"
import Link from "next/link"

export default function AboutPage() {
  return (
    <AuthGuard>
      {(user, signIn, signOut) => (
        <div className="min-h-screen bg-white">
          <Header user={user} onSignOut={signOut} />

          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-pink-100 to-pink-200 mb-8 overflow-hidden">
                <img
                  src="/placeholder.svg?height=160&width=160"
                  alt="About me"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Hey, I'm Honey!</h1>
              <p className="text-xl text-gray-600">Welcome to my little corner of the internet</p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">My Story</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to my personal blog! I'm passionate about sharing my journey through life, wellness
                  discoveries, travel adventures, and everything that inspires personal growth.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This blog serves as my digital diary where I document experiences, share insights, and connect with
                  like-minded souls who believe in living life to the fullest.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether it's about finding balance in our busy lives, exploring sustainable living, discovering new
                  places, or simply reflecting on the beautiful moments that make life meaningful, you'll find authentic
                  stories and genuine perspectives here.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm border">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What I Write About</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Lifestyle & Personal Growth</li>
                    <li>• Wellness & Mental Health</li>
                    <li>• Travel & Adventures</li>
                    <li>• Environmental Consciousness</li>
                    <li>• Life Reflections</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Let's Connect</h3>
                  <p className="text-gray-700 mb-4">
                    I love connecting with readers and fellow life enthusiasts. Feel free to reach out if you'd like to
                    chat!
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </AuthGuard>
  )
}
