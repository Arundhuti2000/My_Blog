import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Heart, Share2, Bookmark } from "lucide-react"

// This would typically come from a CMS or database
const post = {
  title: "Finding Balance in a Busy World",
  excerpt:
    "Exploring mindfulness and self-care practices that have transformed my daily routine and helped me find peace in chaos.",
  content: `
    <p>In our fast-paced world, finding balance can feel like an impossible task. Between work deadlines, social commitments, and the constant buzz of notifications, it's easy to feel overwhelmed and disconnected from what truly matters.</p>
    
    <p>Over the past year, I've been on a journey to create more balance in my life, and I want to share some of the practices that have made the biggest difference for me.</p>
    
    <h2>The Power of Morning Rituals</h2>
    
    <p>One of the most transformative changes I made was establishing a consistent morning routine. Instead of immediately reaching for my phone, I now start each day with:</p>
    
    <ul>
      <li>5 minutes of deep breathing or meditation</li>
      <li>Writing three things I'm grateful for</li>
      <li>Setting one intention for the day</li>
      <li>Enjoying my coffee mindfully, without distractions</li>
    </ul>
    
    <p>This simple 15-20 minute routine has completely changed how I approach my days. I feel more centered, focused, and ready to handle whatever comes my way.</p>
    
    <h2>Learning to Say No</h2>
    
    <p>Perhaps the most difficult but important lesson has been learning to say no. We often feel obligated to say yes to every invitation, request, or opportunity that comes our way. But saying yes to everything means saying no to our own well-being.</p>
    
    <p>I've learned to pause before committing to anything and ask myself: "Does this align with my values and priorities? Will this add value to my life or drain my energy?"</p>
    
    <h2>Creating Boundaries with Technology</h2>
    
    <p>Technology can be a wonderful tool, but it can also be a source of constant stress and distraction. I've implemented several boundaries that have helped me reclaim my time and attention:</p>
    
    <ul>
      <li>No phones during meals</li>
      <li>A digital sunset - no screens 1 hour before bed</li>
      <li>Designated phone-free zones in my home</li>
      <li>Regular social media detoxes</li>
    </ul>
    
    <h2>The Journey Continues</h2>
    
    <p>Finding balance isn't a destination - it's an ongoing journey. Some days are better than others, and that's okay. The key is to be gentle with yourself and remember that small, consistent changes can lead to profound transformations.</p>
    
    <p>What practices have helped you find more balance in your life? I'd love to hear about your journey in the comments below.</p>
  `,
  image: "/placeholder.svg?height=400&width=800",
  category: "Lifestyle",
  date: "2024-01-15",
  readTime: "5 min read",
  author: {
    name: "Honey",
    image: "/placeholder.svg?height=60&width=60",
  },
}

const relatedPosts = [
  {
    title: "The Art of Slow Mornings",
    slug: "art-slow-mornings",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Building Meaningful Connections",
    slug: "building-meaningful-connections",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Creative Inspiration in Everyday Moments",
    slug: "creative-inspiration-everyday",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-200">{post.category}</Badge>
            <span className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString()}</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">{post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>

          {/* Author & Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={post.author.image || "/placeholder.svg"}
                alt={post.author.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-500">Author</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Like
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={800}
            height={400}
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-16" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Related Posts */}
        <section className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.slug} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                      <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}
