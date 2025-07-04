"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent"
          >
            Honey's Life
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-rose-600 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-rose-600 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-rose-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-rose-600 transition-colors">
              Contact
            </Link>
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-rose-600 transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-rose-600 transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-rose-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-rose-600 transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
