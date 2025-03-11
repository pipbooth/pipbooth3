import Link from "next/link"
import Image from "next/image"

// Sample project data - replace with your own
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of your first project and what technologies you used.",
    imageUrl: "/placeholder.svg?height=200&width=350",
    link: "https://github.com/yourusername/project-one",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description of your second project highlighting your skills and achievements.",
    imageUrl: "/placeholder.svg?height=200&width=350",
    link: "https://github.com/yourusername/project-two",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Overview of another project showcasing different aspects of your abilities.",
    imageUrl: "/placeholder.svg?height=200&width=350",
    link: "https://github.com/yourusername/project-three",
  },
]

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl py-8">
      <h1 className="mb-8 text-3xl font-bold">Projects</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="overflow-hidden rounded-lg border">
            <Image
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              width={350}
              height={200}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                View Project →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
