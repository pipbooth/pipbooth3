import { notFound } from "next/navigation"
import Link from "next/link"

// Sample blog post data - replace with your own
const posts = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    content: `
      <p>Web development is an exciting field that combines creativity and technical skills. In this post, we'll explore the fundamentals of web development and how you can get started.</p>
      
      <h2>The Three Core Technologies</h2>
      
      <p>At the heart of web development are three core technologies:</p>
      
      <ul>
        <li><strong>HTML</strong> - The structure of web pages</li>
        <li><strong>CSS</strong> - The styling and layout</li>
        <li><strong>JavaScript</strong> - The interactivity and behavior</li>
      </ul>
      
      <p>By mastering these three technologies, you'll have a solid foundation for building websites and web applications.</p>
    `,
    date: "March 15, 2023",
    slug: "getting-started-with-web-development",
  },
  {
    id: 2,
    title: "Building Responsive Websites",
    content: `
      <p>In today's world, websites need to look good on devices of all sizes. This is where responsive design comes in.</p>
      
      <h2>What is Responsive Design?</h2>
      
      <p>Responsive design is an approach to web design that makes your websites look good on all devices and screen sizes. It involves using HTML and CSS to automatically resize, hide, shrink, or enlarge the website to make it look good on all devices.</p>
      
      <h2>Key Techniques</h2>
      
      <ul>
        <li>Fluid grids</li>
        <li>Flexible images</li>
        <li>Media queries</li>
      </ul>
    `,
    date: "April 22, 2023",
    slug: "building-responsive-websites",
  },
  {
    id: 3,
    title: "Introduction to React",
    content: `
      <p>React is a popular JavaScript library for building user interfaces, particularly single-page applications.</p>
      
      <h2>Why React?</h2>
      
      <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
      
      <h2>Key Concepts</h2>
      
      <ul>
        <li>Components</li>
        <li>Props</li>
        <li>State</li>
        <li>Lifecycle methods</li>
      </ul>
    `,
    date: "May 10, 2023",
    slug: "introduction-to-react",
  },
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-2xl py-8">
      <Link href="/blog" className="mb-6 inline-block text-blue-600 hover:underline">
        ← Back to all posts
      </Link>

      <article className="prose max-w-none">
        <h1>{post.title}</h1>
        <time className="block text-sm text-gray-500">{post.date}</time>

        <div className="mt-6" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
