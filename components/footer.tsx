import Link from "next/link"
import { Heart, Mail, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
              Honey's Life
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              A personal space where I share my journey, thoughts, and discoveries. Thank you for being part of this
              community.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors">
                All Posts
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Me
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <div className="space-y-2">
              <Link href="/blog?category=lifestyle" className="block text-gray-400 hover:text-white transition-colors">
                Lifestyle
              </Link>
              <Link href="/blog?category=wellness" className="block text-gray-400 hover:text-white transition-colors">
                Wellness
              </Link>
              <Link href="/blog?category=travel" className="block text-gray-400 hover:text-white transition-colors">
                Travel
              </Link>
              <Link href="/blog?category=creativity" className="block text-gray-400 hover:text-white transition-colors">
                Creativity
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-rose-400" /> by Honey
          </p>
        </div>
      </div>
    </footer>
  )
}
