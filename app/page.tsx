import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const featuredPosts = [
  {
    id: 1,
    title: "Finding Balance in a Busy World",
    excerpt:
      "Exploring mindfulness and self-care practices that have transformed my daily routine and helped me find peace in chaos.",
    image: "/placeholder.svg?height=400&width=600",
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
    image: "/placeholder.svg?height=400&width=600",
    category: "Environment",
    date: "2024-01-10",
    readTime: "7 min read",
    slug: "sustainable-living-journey",
  },
  {
    id: 3,
    title: "Lessons from Solo Travel",
    excerpt: "What I learned about myself and the world during my solo adventures across three continents.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Travel",
    date: "2024-01-05",
    readTime: "6 min read",
    slug: "lessons-solo-travel",
  },
]

const recentPosts = [
  {
    id: 4,
    title: "The Art of Slow Mornings",
    excerpt: "How I transformed my morning routine to create more intentional, peaceful starts to my day.",
    category: "Wellness",
    date: "2024-01-20",
    readTime: "4 min read",
    slug: "art-slow-mornings",
  },
  {
    id: 5,
    title: "Building Meaningful Connections",
    excerpt: "Reflections on friendship, community, and the importance of authentic relationships in our digital age.",
    category: "Relationships",
    date: "2024-01-18",
    readTime: "5 min read",
    slug: "building-meaningful-connections",
  },
  {
    id: 6,
    title: "Creative Inspiration in Everyday Moments",
    excerpt: "Finding beauty and creativity in the ordinary moments that make up our daily lives.",
    category: "Creativity",
    date: "2024-01-12",
    readTime: "3 min read",
    slug: "creative-inspiration-everyday",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to My World</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A space where I share my thoughts on life, wellness, travel, and everything that inspires me. Join me on
              this journey of discovery and growth.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700"
          >
            <Link href="/about">
              Get to Know Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
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
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Recent Thoughts</h2>
          <div className="space-y-8">
            {recentPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-200">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                View All Posts <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
          <p className="text-gray-600 mb-8">
            Get notified when I publish new stories and insights. No spam, just meaningful content.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
            <Button className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
