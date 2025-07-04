"use client"

import { useEffect, useState } from "react"
import { getAllPosts } from "@/lib/posts"

export default function TestDB() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const testConnection = async () => {
      try {
        console.log("Testing database connection...")
        const allPosts = await getAllPosts()
        console.log("Posts loaded:", allPosts)
        setPosts(allPosts)
      } catch (err) {
        console.error("Database error:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    testConnection()
  }, [])

  if (loading) return <div className="p-8">Loading...</div>
  if (error) return <div className="p-8 text-red-600">Error: {error}</div>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Database Test</h1>
      <p className="mb-4">Found {posts.length} posts</p>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(posts, null, 2)}</pre>
    </div>
  )
}
