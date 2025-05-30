import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Code, Users, GitFork, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Open Source Contributions",
  description:
    "Join Smart Hive Labs in our open-source initiatives. Contribute to projects like Hivedemia and CivicLink.",
}

const openSourceProjects = [
  {
    title: "Hivedemia - AI Study Tool",
    description:
      "An AI-powered platform to assist students with learning, quiz generation, and document interaction. We welcome contributions to enhance its features and reach.",
    githubLink: "https://github.com/smarhivelabs/hivedemia", // Placeholder
    tags: ["AI/ML", "Python", "Next.js", "Education"],
    contributionGuide: "https://github.com/smarhivelabs/hivedemia/blob/main/CONTRIBUTING.md", // Placeholder
    issuesLink: "https://github.com/smarhivelabs/hivedemia/issues", // Placeholder
  },
  {
    title: "CivicLink - Civic Tech Initiative",
    description:
      "A project focused on leveraging technology for civic engagement and transparency. Currently exploring tools for voter education and electoral process tracking in Ghana.",
    githubLink: "https://github.com/smarhivelabs/civiclink", // Placeholder
    tags: ["CivicTech", "Next.js", "Node.js", "Transparency"],
    roadmapLink: "https://github.com/smarhivelabs/civiclink/blob/main/ROADMAP.md", // Placeholder
    issuesLink: "https://github.com/smarhivelabs/civiclink/issues", // Placeholder
  },
]

export default function OpenSourcePage() {
  return (
    <div className="py-12">
      <section className="text-center mb-16">
        <Code size={64} className="mx-auto mb-6 text-primary" />
        <h1 className="text-4xl font-bold mb-4 text-foreground">Our Open Source Galaxy</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
          At Smart Hive Labs, we believe in the power of collaboration and giving back to the community. Explore our
          open-source projects and join us in building innovative solutions.
        </p>
        <Link href="https://github.com/smarhivelabs" target="_blank" rel="noopener noreferrer">
          <Button size="lg">
            <Github className="mr-2 h-5 w-5" /> Visit our GitHub Organization
          </Button>
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center text-foreground">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {openSourceProjects.map((project) => (
            <div
              key={project.title}
              className="bg-background p-6 rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-2 text-foreground">{project.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 flex-grow">{project.description}</p>
              <div className="mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-primary/10 text-primary text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto space-y-2">
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full justify-start">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </Button>
                </Link>
                {project.contributionGuide && (
                  <Link href={project.contributionGuide} target="_blank" rel="noopener noreferrer">
                    <Button variant="link" className="text-primary p-0 h-auto text-sm w-full justify-start">
                      <Users className="mr-2 h-4 w-4" /> How to Contribute
                    </Button>
                  </Link>
                )}
                {project.roadmapLink && (
                  <Link href={project.roadmapLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="link" className="text-primary p-0 h-auto text-sm w-full justify-start">
                      <GitFork className="mr-2 h-4 w-4" /> Project Roadmap
                    </Button>
                  </Link>
                )}
                <Link href={project.issuesLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="link" className="text-primary p-0 h-auto text-sm w-full justify-start">
                    <Star className="mr-2 h-4 w-4" /> View Issues
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center bg-primary/5 dark:bg-primary/10 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Join Our Open-Source Community!</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-xl mx-auto">
          Whether you're a developer, designer, writer, or enthusiast, there's a place for you. Help us shape the future
          of technology.
        </p>
        <Link href="https://github.com/smarhivelabs" target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="default">
            <Users className="mr-2 h-5 w-5" /> Get Involved
          </Button>
        </Link>
      </section>
    </div>
  )
}
