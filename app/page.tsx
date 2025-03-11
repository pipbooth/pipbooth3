export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 py-8">
      <h1 className="text-3xl font-bold">About Me</h1>
      <div className="space-y-4">
        <p>
          Hello! I'm a [your profession] based in [your location]. I specialize in [your specialties] and I'm passionate
          about [your interests].
        </p>
        <p>
          I have experience working with [relevant technologies/tools] and have collaborated on projects involving
          [types of projects].
        </p>
        <p>When I'm not working, you can find me [your hobbies/interests outside of work].</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-2">
          Feel free to reach out to me at{" "}
          <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
            your.email@example.com
          </a>
        </p>
      </div>
    </div>
  )
}
