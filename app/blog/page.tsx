import Link from "next/link"

// Sample blog post data - replace with your own
const posts = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    excerpt: "An introduction to the core technologies of web development: HTML, CSS, and JavaScript.",
    date: "March 15, 2023",
    slug: "getting-started-with-web-development",
  },
  {
    id: 2,
    title: "Building Responsive Websites",
    excerpt: "Learn how to create websites that look great on any device using modern CSS techniques.",
    date: "April 22, 2023",
    slug: "building-responsive-websites",
  },
  {
    id: 3,
    title: "Introduction to React",
    excerpt: "Discover the basics of React and how it can help you build interactive user interfaces.",
    date: "May 10, 2023",
    slug: "introduction-to-react",
  },
]

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-2xl py-8">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="border-b pb-6">
            <h2 className="text-2xl font-semibold">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                {post.title}
              </Link>
            </h2>
            <time className="mt-1 block text-sm text-gray-500">{post.date}</time>
            <p className="mt-3">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-2 inline-block text-blue-600 hover:underline">
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
