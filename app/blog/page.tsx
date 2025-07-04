import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Search } from "lucide-react"

const allPosts = [
  {
    id: 1,
    title: "Finding Balance in a Busy World",
    excerpt:
      "Exploring mindfulness and self-care practices that have transformed my daily routine and helped me find peace in chaos.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Lifestyle",
    date: "2024-01-15",
    readTime: "5 min read",
    slug: "finding-balance-busy-world",
  },
  {
    id: 2,
    title: "My Journey to Sustainable Living",
    excerpt:
      "Small changes that made a big impact on my environmental footprint and how you can start your own sustainable journey.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Environment",
    date: "2024-01-10",
    readTime: "7 min read",
    slug: "sustainable-living-journey",
  },
  {
    id: 3,
    title: "Lessons from Solo Travel",
    excerpt: "What I learned about myself and the world during my solo adventures across three continents.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Travel",
    date: "2024-01-05",
    readTime: "6 min read",
    slug: "lessons-solo-travel",
  },
  {
    id: 4,
    title: "The Art of Slow Mornings",
    excerpt: "How I transformed my morning routine to create more intentional, peaceful starts to my day.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Wellness",
    date: "2024-01-20",
    readTime: "4 min read",
    slug: "art-slow-mornings",
  },
  {
    id: 5,
    title: "Building Meaningful Connections",
    excerpt: "Reflections on friendship, community, and the importance of authentic relationships in our digital age.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Relationships",
    date: "2024-01-18",
    readTime: "5 min read",
    slug: "building-meaningful-connections",
  },
  {
    id: 6,
    title: "Creative Inspiration in Everyday Moments",
    excerpt: "Finding beauty and creativity in the ordinary moments that make up our daily lives.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Creativity",
    date: "2024-01-12",
    readTime: "3 min read",
    slug: "creative-inspiration-everyday",
  },
]

const categories = ["All", "Lifestyle", "Wellness", "Travel", "Environment", "Relationships", "Creativity"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Posts</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts, stories, and insights from my journey through life
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search posts..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={category === "All" ? "bg-gradient-to-r from-rose-500 to-purple-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 hover:bg-white">
                  {post.category}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  )
}
