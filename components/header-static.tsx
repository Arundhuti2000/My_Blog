import Link from "next/link"
import { Search } from "lucide-react"

export default function HeaderStatic() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-pink-500 hover:text-pink-600">
            Honey's Life
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-pink-500 font-medium">
              Home
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-pink-500 font-medium">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-pink-500 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-pink-500 font-medium">
              Contact
            </Link>
            <Link href="/admin" className="text-gray-700 hover:text-pink-500 font-medium">
              Admin
            </Link>

            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-pink-500">
                <Search size={20} />
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700">
            <Search size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}
