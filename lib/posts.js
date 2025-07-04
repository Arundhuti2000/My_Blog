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
  },
  {
    id: "3",
    title: "The Power of Static Sites",
    content: `Static sites are making a comeback, and for good reason. They're fast, secure, and easy to deploy.

With modern static site generators like Next.js, we can build dynamic-feeling websites that are actually served as static files. This gives us the best of both worlds: the performance of static sites with the developer experience of modern web frameworks.

Static sites are perfect for blogs, portfolios, and marketing sites. They load quickly, rank well in search engines, and can handle traffic spikes without breaking a sweat.

If you're building a content-focused website, consider going static. Your users (and your hosting bill) will thank you!`,
    excerpt: "Exploring the benefits and power of static site generation.",
    date: "2024-01-05",
    slug: "the-power-of-static-sites",
    tags: ["web development", "static sites", "performance"],
  },
]

export function getAllPosts() {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug)
}

export function addPost(post) {
  const newPost = {
    ...post,
    id: Date.now().toString(),
    date: new Date().toISOString().split("T")[0],
    slug: post.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
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
