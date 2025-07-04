import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Camera, Plane, Book, Coffee, Music } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-8 border-4 border-white shadow-xl"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hi, I'm Honey!</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to my little corner of the internet where I share my journey, thoughts, and the beautiful moments
            that make life meaningful.
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                I started this blog as a way to document my journey of self-discovery and growth. What began as personal
                reflections has evolved into a space where I share insights on living intentionally, finding balance,
                and embracing the beauty in everyday moments.
              </p>
              <p>
                When I'm not writing, you'll find me exploring new places, trying out creative projects, or simply
                enjoying a quiet morning with a good book and coffee. I believe that life's most profound lessons often
                come from the simplest experiences.
              </p>
              <p>
                Through this blog, I hope to inspire others to slow down, reflect, and find joy in their own unique
                journey. We're all figuring it out as we go, and I'm grateful to have you along for the ride.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What I Love</h2>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                <Camera className="h-8 w-8 mx-auto mb-2 text-rose-500" />
                <h3 className="font-semibold">Photography</h3>
                <p className="text-sm text-gray-600">Capturing moments</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                <Plane className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                <h3 className="font-semibold">Travel</h3>
                <p className="text-sm text-gray-600">Exploring new places</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                <Book className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <h3 className="font-semibold">Reading</h3>
                <p className="text-sm text-gray-600">Learning & growing</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                <Coffee className="h-8 w-8 mx-auto mb-2 text-amber-500" />
                <h3 className="font-semibold">Coffee</h3>
                <p className="text-sm text-gray-600">Morning rituals</p>
              </Card>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <Card className="p-8 mb-16 bg-white/70 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What I Believe In</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="font-semibold mb-2">Authentic Living</h3>
              <p className="text-sm text-gray-600">Being true to yourself and living with intention</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Finding Joy</h3>
              <p className="text-sm text-gray-600">Celebrating the small moments that make life beautiful</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Continuous Growth</h3>
              <p className="text-sm text-gray-600">Always learning, evolving, and becoming</p>
            </div>
          </div>
        </Card>

        {/* Fun Facts */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Fun Facts About Me</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              🌅 Early bird
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              📚 Always reading 3 books at once
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              🎨 Weekend artist
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              🌱 Plant parent to 15+ plants
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              ☕ Coffee enthusiast
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              🧘‍♀️ Daily meditation practitioner
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
