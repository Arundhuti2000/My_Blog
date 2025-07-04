"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import { Mail, MessageCircle, Heart } from "lucide-react"

export default function ContactPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initAuth = async () => {
      try {
        const { onAuthStateChanged } = await import("firebase/auth")
        const { auth } = await import("@/lib/firebase")

        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user)
          setLoading(false)
        })

        return () => unsubscribe()
      } catch (error) {
        console.error("Error initializing auth:", error)
        setLoading(false)
      }
    }

    initAuth()
  }, [])

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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onSignOut={signOut} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h1>
          <p className="text-xl text-gray-600">
            I'd love to hear from you! Drop me a message and let's start a conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Tell me what's on your mind..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white font-semibold py-3 rounded-lg hover:bg-pink-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <Mail className="text-pink-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Email Me</h3>
              </div>
              <p className="text-gray-600">
                For collaborations, questions, or just to say hello, feel free to reach out via email.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <MessageCircle className="text-pink-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Let's Chat</h3>
              </div>
              <p className="text-gray-600">
                I love connecting with readers and fellow bloggers. Don't hesitate to start a conversation!
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Heart className="text-pink-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Thank You</h3>
              </div>
              <p className="text-gray-700">
                Thank you for being part of this journey. Your support and engagement mean the world to me!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
