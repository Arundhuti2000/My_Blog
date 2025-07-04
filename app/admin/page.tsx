"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { getAllPosts, addPost, deletePost } from "@/lib/posts"
import Header from "@/components/header"
import { Plus, Trash2, User, Edit3, Calendar, Tag } from "lucide-react"

export default function AdminPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState(getAllPosts())
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    excerpt: "",
    tags: "",
    category: "lifestyle",
  })

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
    setFormData({ title: "", content: "", excerpt: "", tags: "", category: "lifestyle" })
    setShowForm(false)
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      deletePost(id)
      setPosts(getAllPosts())
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-pink-600 font-medium">Loading admin panel...</p>
        </div>
      </div>
    )
  }

  // Check if user is admin (replace with your email)
  const isAdmin = user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full mx-4">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <User size={32} className="text-pink-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome Back!</h2>
          <p className="text-gray-600 mb-8">Sign in to access your admin dashboard and manage your blog posts.</p>
          <button
            onClick={signIn}
            className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
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
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User size={24} className="text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
            <p className="text-gray-600">You don't have permission to access this page.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Header user={user} onSignOut={signOut} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
              <p className="text-gray-600">Manage your blog posts and create new content</p>
              <div className="flex items-center mt-4 text-sm text-gray-500">
                <div className="flex items-center mr-6">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>{posts.length} Published Posts</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>Last updated today</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
            >
              <Plus size={20} className="mr-2" />
              Create New Post
            </button>
          </div>
        </div>

        {/* Create Post Form */}
        {showForm && (
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center mr-4">
                <Edit3 size={20} className="text-pink-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Create New Post</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Post Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                    placeholder="Enter your post title..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                  >
                    <option value="lifestyle">🌸 Lifestyle</option>
                    <option value="wellness">💚 Wellness</option>
                    <option value="travel">✈️ Travel</option>
                    <option value="environment">🌱 Environment</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Post Excerpt</label>
                <input
                  type="text"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                  placeholder="Brief description that appears on the blog homepage..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Content</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={12}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                  placeholder="Write your blog post content here..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Tags</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                  placeholder="lifestyle, wellness, personal (comma-separated)"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Publish Post
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-100 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-200 transition-colors font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Posts List */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">Your Blog Posts</h2>
            <p className="text-gray-600 mt-1">Manage and organize your published content</p>
          </div>

          <div className="divide-y divide-gray-100">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="font-bold text-gray-900 text-lg mr-3">{post.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            post.category === "lifestyle"
                              ? "bg-pink-100 text-pink-700"
                              : post.category === "wellness"
                                ? "bg-green-100 text-green-700"
                                : post.category === "travel"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-purple-100 text-purple-700"
                          }`}
                        >
                          {post.category}
                        </span>
                      </div>

                      <p className="text-gray-600 mb-3 leading-relaxed">{post.excerpt}</p>

                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex items-center">
                            <Tag size={14} className="mr-1" />
                            <span>{post.tags.slice(0, 2).join(", ")}</span>
                            {post.tags.length > 2 && <span className="ml-1">+{post.tags.length - 2}</span>}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-6">
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        title="Delete post"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Edit3 size={24} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts yet</h3>
                <p className="text-gray-600 mb-6">Create your first blog post to get started!</p>
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-200 font-semibold"
                >
                  Create Your First Post
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
