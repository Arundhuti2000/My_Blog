"use client"

import Link from "next/link"
import { LogOut, Edit } from "lucide-react"

interface HeaderProps {
  user?: any
  onSignOut?: () => void
}

export default function Header({ user, onSignOut }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div>
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700">
              My Personal Blog
            </Link>
            <p className="text-sm text-gray-600 mt-1">Thoughts, stories and ideas</p>
          </div>

          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>

            {user && (
              <>
                <Link href="/admin" className="flex items-center space-x-1 text-blue-600 hover:text-blue-700">
                  <Edit size={16} />
                  <span>Admin</span>
                </Link>
                <button onClick={onSignOut} className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
