import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 border-4 border-white shadow-lg overflow-hidden">
            <img src="/placeholder.svg?height=128&width=128" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Hero Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Welcome to My World</h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          A space where I share my thoughts on life, wellness, travel, and everything that inspires me. Join me on this
          journey of discovery and growth.
        </p>

        <Link
          href="/about"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Get to Know Me
          <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
    </section>
  )
}
