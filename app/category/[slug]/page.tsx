import CategoryPageClient from "./CategoryPageClient"

export function generateStaticParams() {
  const categories = ["lifestyle", "environment", "travel", "wellness"]
  return categories.map((category) => ({
    slug: category,
  }))
}

export default function CategoryPage() {
  return <CategoryPageClient />
}
