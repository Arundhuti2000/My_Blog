import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { format } from "date-fns"

interface PostCardProps {
  post: {
    id: string
    title: string
    excerpt: string
    date: string
    slug: string
    tags?: string[]
  }
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar size={16} className="mr-2" />
          <time dateTime={post.date}>{format(new Date(post.date), "MMMM d, yyyy")}</time>
          <Clock size={16} className="ml-4 mr-2" />
          <span>5 min read</span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600">
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h2>

        <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

        {post.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:text-blue-700 font-medium">
          Read more →
        </Link>
      </div>
    </article>
  )
}
