// Static posts data - in a real app, this would come from a CMS or markdown files
let posts = [
  {
    id: "1",
    title: "Welcome to My Blog",
    content: "This is my first blog post. I'm excited to share my thoughts and experiences with you.",
    excerpt: "Welcome to my personal blog where I share my thoughts and experiences.",
    date: "2024-01-15",
    slug: "welcome-to-my-blog",
    tags: ["welcome", "introduction"],
  },
  {
    id: "2",
    title: "My Journey in Tech",
    content:
      "Technology has always fascinated me. From my early days of learning to code to building complex applications, it's been an incredible journey.",
    excerpt: "Sharing my journey and experiences in the technology world.",
    date: "2024-01-10",
    slug: "my-journey-in-tech",
    tags: ["tech", "career", "journey"],
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
