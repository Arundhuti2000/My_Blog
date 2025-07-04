"use client"

import type React from "react"

import { useState } from "react"
import { getAllPosts, addPost, deletePost } from "@/lib/posts"
import Header from "@/components/header"
import AuthGuard from "@/components/auth-guard"
import { Plus, Trash2, User } from "lucide-react"

export default function AdminPage() {
  const [posts, setPosts] = useState(getAllPosts())
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    excerpt: "",
    tags: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newPost = addPost({
      ...formData,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    })
    setPosts(getAllPosts())
    setFormData({ title: "", content: "", excerpt: "", tags: "" })
    setShowForm(false)
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      deletePost(id)
      setPosts(getAllPosts())
    }
  }

  return (
    <AuthGuard>
      {(user, signIn, signOut) => {
        // Check if user is admin (replace with your email)
        const isAdmin = user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL

        if (!user) {
          return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <User size={48} className="mx-auto text-gray-400 mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Admin Access Required</h2>
                <p className="text-gray-600 mb-6">Please sign in to access the admin panel.</p>
                <button onClick={signIn} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  Sign in with Google
                </button>
              </div>
            </div>
          )
        }

        if (!isAdmin) {
          return (
            <div className="min-h-screen bg-gray-50">
              <Header user={user} onSignOut={signOut} />
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
                  <p className="text-gray-600">You don't have permission to access this page.</p>
                </div>
              </div>
            </div>
          )
        }

        return (
          <div className="min-h-screen bg-gray-50">
            <Header user={user} onSignOut={signOut} />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
                >
                  <Plus size={16} className="mr-2" />
                  New Post
                </button>
              </div>

              {showForm && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                      <input
                        type="text"
                        value={formData.excerpt}
                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Brief description of the post"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                      <textarea
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        rows={10}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma-separated)</label>
                      <input
                        type="text"
                        value={formData.tags}
                        onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="tech, personal, thoughts"
                      />
                    </div>

                    <div className="flex space-x-4">
                      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                        Publish Post
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold">All Posts</h2>
                </div>
                <div className="divide-y">
                  {posts.map((post) => (
                    <div key={post.id} className="p-6 flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
                        <p className="text-gray-500 text-xs">{post.date}</p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:text-red-700 p-2">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        )
      }}
    </AuthGuard>
  )
}
