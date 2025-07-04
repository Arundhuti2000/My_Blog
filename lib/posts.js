// Static posts data - in a real app, this would come from a CMS or markdown files
let posts = [
  {
    id: "1",
    title: "Welcome to My Blog",
    content: `Welcome to my personal blog! I'm excited to share my thoughts and experiences with you.

This is where I'll be documenting my journey, sharing insights, and connecting with others who share similar interests. 

I believe that sharing our experiences can help others learn and grow, and I hope that my posts will provide value to anyone who reads them.

Thank you for visiting, and I hope you'll stick around for more content!`,
    excerpt: "Welcome to my personal blog where I share my thoughts and experiences.",
    date: "2024-01-15",
    slug: "welcome-to-my-blog",
    tags: ["welcome", "introduction"],
    category: "lifestyle",
  },
  {
    id: "2",
    title: "My Journey in Tech",
    content: `Technology has always fascinated me. From my early days of learning to code to building complex applications, it's been an incredible journey.

I started with simple HTML and CSS, then moved on to JavaScript, and eventually discovered the power of modern frameworks like React and Next.js.

The tech industry is constantly evolving, and I love being part of this dynamic field. Every day brings new challenges and opportunities to learn something new.

In this blog, I'll share my experiences, the lessons I've learned, and the projects I'm working on. I hope my journey can inspire others who are just starting out or looking to make a career change into tech.`,
    excerpt: "Sharing my journey and experiences in the technology world.",
    date: "2024-01-10",
    slug: "my-journey-in-tech",
    tags: ["tech", "career", "journey"],
    category: "lifestyle",
  },
  {
    id: "3",
    title: "Finding Balance in a Busy World",
    content: `In today's fast-paced world, finding balance can feel like an impossible task. Between work, relationships, and personal goals, it's easy to feel overwhelmed.

I've learned that balance isn't about perfect time management or having everything figured out. It's about making conscious choices about what matters most and being present in each moment.

Here are some strategies that have helped me find more balance in my daily life:

1. Setting boundaries with work and technology
2. Prioritizing self-care and mental health
3. Making time for relationships and meaningful connections
4. Practicing mindfulness and gratitude

Remember, balance looks different for everyone. What matters is finding what works for you and being gentle with yourself along the way.`,
    excerpt: "Exploring strategies for finding balance and peace in our busy modern lives.",
    date: "2024-01-05",
    slug: "finding-balance-in-busy-world",
    tags: ["wellness", "balance", "mindfulness"],
    category: "wellness",
  },
]

export function getAllPosts() {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug) || null
}

export function addPost(post) {
  const newPost = {
    id: Date.now().toString(),
    title: post.title || "Untitled",
    content: post.content || "",
    excerpt: post.excerpt || post.content?.substring(0, 150) + "..." || "",
    date: new Date().toISOString().split("T")[0],
    slug: (post.title || "untitled")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    tags: post.tags || [],
    category: post.category || "lifestyle",
  }
  posts.unshift(newPost)
  return newPost
}

export function updatePost(id, updatedPost) {
  const index = posts.findIndex((post) => post.id === id)
  if (index !== -1) {
    posts[index] = { ...posts[index], ...updatedPost }
    return posts[index]
  }
  return null
}

export function deletePost(id) {
  posts = posts.filter((post) => post.id !== id)
}
