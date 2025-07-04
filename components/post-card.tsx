import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { format } from "date-fns"

interface PostCardProps {
  post: {
    id: string
    title?: string
    excerpt?: string
    date: string
    slug: string
    tags?: string[]
    category?: string
  }
}

export default function PostCard({ post }: PostCardProps) {
  if (!post) return null

  const title = post.title || "Untitled"
  const excerpt = post.excerpt || "No excerpt available"
  const tags = post.tags || []

  return (
    <article className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden border border-gray-100">
      {/* Featured Image */}
      <div className="aspect-video bg-gradient-to-br from-pink-100 to-pink-200 overflow-hidden">
        <img
          src="/placeholder.svg?height=240&width=400"
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>

      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar size={14} className="mr-2" />
          <time dateTime={post.date}>{format(new Date(post.date), "MMM d, yyyy")}</time>
          <Clock size={14} className="ml-4 mr-2" />
          <span>5 min read</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-500 transition-colors">
          <Link href={`/posts/${post.slug}`}>{title}</Link>
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{excerpt}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full font-medium">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Read More */}
        <Link
          href={`/posts/${post.slug}`}
          className="inline-flex items-center text-pink-500 hover:text-pink-600 font-semibold"
        >
          Read More →
        </Link>
      </div>
    </article>
  )
}
