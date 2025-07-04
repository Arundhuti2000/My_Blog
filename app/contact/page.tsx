import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageCircle, Heart, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hello,
            don't hesitate to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-rose-500" />
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell me what's on your mind..." rows={6} />
                </div>
                <Button className="w-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-purple-500" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  I typically respond to emails within 24-48 hours. For urgent matters, please mention it in your
                  subject line.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">hello@honeyslife.com</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">Response Time</p>
                  <p className="text-gray-600">Usually within 1-2 days</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-rose-500" />
                  What I Love to Chat About
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Collaboration opportunities</li>
                  <li>• Writing and blogging tips</li>
                  <li>• Travel recommendations</li>
                  <li>• Wellness and mindfulness</li>
                  <li>• Book recommendations</li>
                  <li>• Life questions and advice</li>
                  <li>• Just saying hello!</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-to-r from-rose-50 to-purple-50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Quick Note</h3>
                <p className="text-sm text-gray-600">
                  I read every message personally and do my best to respond thoughtfully. Thank you for taking the time
                  to reach out – it truly means the world to me!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
