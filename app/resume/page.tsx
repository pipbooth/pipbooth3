import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl py-8">
      <h1 className="mb-8 text-3xl font-bold">Resume</h1>
      
      {/* Download button */}
      <div className="mb-8">
        <Link 
          href="/path-to-your-resume.pdf" 
          className="inline-flex items-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mr-2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download PDF
        </Link>
      </div>
      
      {/* Education Section */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Education</h2>
        <div className="space-y-4">
          <div className="rounded border p-4">
            <div className="flex flex-col justify-between gap-1 sm:flex-row">
              <h3 className="font-medium">University Name</h3>
              <span className="text-sm text-gray-500">2018 - 2022</span>
            </div>
            <p className="text-gray-700">Bachelor of Science in Computer Science</p>
            <p className="mt-2 text-sm">Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems</p>
          </div>
          
          {/* Add more education entries as needed */}
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Work Experience</h2>
        <div className="space-y-4">
          <div className="rounded border p-4">
            <div className="flex flex-col justify-between gap-1 sm:flex-row">
              <h3 className="font-medium">Company Name</h3>
              <span className="text-sm text-gray-500">Jan 2022 - Present</span>
            </div>
            <p className="text-gray-700">Software Engineer</p>
            <ul className="mt-2 list-inside list-disc text-sm">
              <li>Developed and maintained web applications using React and Node.js</li>
              <li>Collaborated with cross-functional teams to implement new features</li>
              <li>Improved application performance by optimizing database queries</li>
            </ul>
          </div>
          
          <div className="rounded border p-4">
            <div className="flex flex-col justify-between gap-1 sm:flex-row">
              <h3 className="font-medium">Previous Company</h3>
              <span className="text-sm text-gray-500">Jun 2020 - Dec 2021</span>
            </div>
            <p className="text-gray-700">Junior Developer</p>
            <ul className="mt-2 list-inside list-disc text-sm">
              <li>Assisted in the development of front-end components using HTML, CSS, and JavaScript</li>
              <li>Participated in code reviews and implemented feedback</li>
              <li>Wrote and maintained documentation for internal tools</li>
            </ul>
          </div>
          
          {/* Add more experience entries as needed */}
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Skills</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded border p-3">
            <h3 className="mb-2 font-medium">Programming Languages</h3>
            <p className="text-sm text-gray-700">JavaScript, TypeScript, Python, Java</p>
          </div>
          <div className="rounded border p-3">
            <h3 className="mb-2 font-medium">Front-end</h3>
            <p className="text-sm text-gray-700">React, Next.js, HTML, CSS, Tailwind CSS</p>
          </div>
          <div className="rounded border p-3">
            <h3 className="mb-2 font-medium">Back-end</h3>
            <p className="text-sm text-gray-700">Node.js, Express, MongoDB, PostgreSQL</p>
          </div>
          <div className="rounded border p-3">
            <h3 className="mb-2 font-medium">Tools</h3>
            <p className="text-sm text-gray-700">Git, Docker, AWS, Vercel</p>
          </div>
          <div className="rounded border p-3">
            <h3 className="mb-2 font-medium">Soft Skills</h3>
            <p className="text-sm text-gray-700">Team Collaboration, Problem Solving, Communication</p>
          </div>
          
          {/* Add more skill categories as needed */}
        </div>
      </section>
      
      {/* Certifications Section (Optional) */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Certifications</h2>
        <div className="space-y-4">
          <div className="rounded border p-4">
            <div className="flex flex-col justify-between gap-1 sm:flex-row">
              <h3 className="font-medium">AWS Certified Developer</h3>
              <span className="text-sm text-gray-500">Issued: June 2022</span>
            </div>
            <p className="text-sm text-gray-700">Amazon Web Services</p>
          </div>
          
          {/* Add more certifications as needed */}
        </div>
      </section>
    </div>
  )
}
