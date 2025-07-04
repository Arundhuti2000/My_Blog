import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

const categories = [
  {
    name: "Lifestyle",
    slug: "lifestyle",
    color: "bg-gradient-to-br from-pink-100 to-pink-200",
    textColor: "text-pink-800",
  },
  {
    name: "Environment",
    slug: "environment",
    color: "bg-gradient-to-br from-green-100 to-green-200",
    textColor: "text-green-800",
  },
  {
    name: "Travel",
    slug: "travel",
    color: "bg-gradient-to-br from-blue-100 to-blue-200",
    textColor: "text-blue-800",
  },
  {
    name: "Wellness",
    slug: "wellness",
    color: "bg-gradient-to-br from-purple-100 to-purple-200",
    textColor: "text-purple-800",
  },
]

export default function FeaturedStories() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Stories</h2>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className={`${category.color} ${category.textColor} p-6 rounded-2xl text-center font-semibold hover:scale-105 transition-transform duration-200 shadow-sm hover:shadow-md`}
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* Latest Posts */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/posts/${post.slug}`}>
                <div className="bg-gray-100 rounded-2xl h-48 mb-4 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-500">{post.title}</h3>
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
