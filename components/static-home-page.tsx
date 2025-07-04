"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturedStories from "@/components/featured-stories"

export default function StaticHomePage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Only import Firebase on the client side
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

  const signIn = async () => {
    try {
      const { signInWithPopup } = await import("firebase/auth")
      const { auth, googleProvider } = await import("@/lib/firebase")
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.error("Error signing in:", error)
    }
  }

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
    <div className="min-h-screen bg-white">
      <Header user={user} onSignOut={signOut} />
      <HeroSection />
      <FeaturedStories />

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest stories and updates delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
            <button className="px-8 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Honey's Life</h3>
              <p className="text-gray-300 mb-4">
                Sharing thoughts on life, wellness, travel, and everything that inspires growth and discovery.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/" className="block text-gray-300 hover:text-pink-400">
                  Home
                </a>
                <a href="/blog" className="block text-gray-300 hover:text-pink-400">
                  Blog
                </a>
                <a href="/about" className="block text-gray-300 hover:text-pink-400">
                  About
                </a>
                <a href="/contact" className="block text-gray-300 hover:text-pink-400">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <div className="space-y-2">
                <a href="/category/lifestyle" className="block text-gray-300 hover:text-pink-400">
                  Lifestyle
                </a>
                <a href="/category/wellness" className="block text-gray-300 hover:text-pink-400">
                  Wellness
                </a>
                <a href="/category/travel" className="block text-gray-300 hover:text-pink-400">
                  Travel
                </a>
                <a href="/category/environment" className="block text-gray-300 hover:text-pink-400">
                  Environment
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Honey's Life. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
