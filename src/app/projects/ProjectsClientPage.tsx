"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import { useState } from "react"


const projects = [
  {
    title: "Hivedemia - AI Study Platform",
    category: "AI & Education",
    description:
      "An AI-powered platform designed to revolutionize learning. Features include AI tutoring, quiz generation from documents/text, document Q&A, and performance tracking.",
    imageUrl: "/black-logo-white-text.webp",
    status: "Current Project",
    tags: ["AI/ML", "React", "Next.js", "Python", "EdTech"],
    githubLink: "https://github.com/smarhivelabs/hivedemia", // Placeholder
    demoLink: "#", // Placeholder
    features: ["AI Tutoring", "Quiz Generation", "Document Q&A", "Performance Tracking"],
  },
  {
    title: "CivicLink - Ghana Digital Voting System",
    category: "Civic Tech & Governance",
    description:
      "A prototype project aimed at enhancing electoral processes in Ghana. Features voter education, real-time electoral tracking, and tools for transparency.",
    imageUrl: "/placeholder.svg?width=600&height=400",
    status: "Prototype Project",
    tags: ["CivicTech", "Next.js", "Node.js", "Blockchain (Conceptual)"],
    githubLink: "https://github.com/smarhivelabs/civiclink", // Placeholder
    features: [
      "Voter Education Portal",
      "Real-Time Tracking",
      "Transparency Tools",
      "Secure Registration (Conceptual)",
    ],
  },
  // Add more projects here for the enhanced portfolio
  {
    title: "E-commerce Platform Redesign",
    category: "Web Development",
    description:
      "Complete overhaul of a client's e-commerce site, resulting in improved UX and increased conversion rates. Showcasing before/after and development process.",
    imageUrl: "/placeholder.svg?width=600&height=400",
    status: "Completed Client Work",
    tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    caseStudyLink: "/projects/ecommerce-redesign-case-study", // Example link to interactive case study
  },
  {
    title: "Motion Graphics Showcase Reel",
    category: "Graphics Design",
    description:
      "A compilation of our best motion graphics work, demonstrating skills in animation, visual storytelling, and brand promotion.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    status: "Portfolio Piece",
    tags: ["After Effects", "Motion Design", "Branding"],
  },
]

// TODO: Implement filtering logic if needed
// const [filter, setFilter] = useState('All');
// const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

export default function ProjectsClientPage() {
  const [filter, setFilter] = useState("All")
  const filteredProjects = projects.filter((p) => filter === "All" || p.category === filter)

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-foreground">Our Projects</h1>
      <p className="text-lg text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
        Showcasing our commitment to innovation and excellence. Explore our diverse range of projects from AI solutions
        to impactful web and graphic designs.
      </p>

      {/* TODO: Add filter buttons here if implementing filtering */}
      <div className="flex justify-center space-x-2 mb-8">
        <Button variant={filter === "All" ? "default" : "outline"} onClick={() => setFilter("All")}>
          All
        </Button>
        <Button
          variant={filter === "AI & Education" ? "default" : "outline"}
          onClick={() => setFilter("AI & Education")}
        >
          AI & Education
        </Button>
        <Button
          variant={filter === "Web Development" ? "default" : "outline"}
          onClick={() => setFilter("Web Development")}
        >
          Web Development
        </Button>
        <Button
          variant={filter === "Graphics Design" ? "default" : "outline"}
          onClick={() => setFilter("Graphics Design")}
        >
          Graphics Design
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.title} className="bg-background rounded-lg shadow-xl overflow-hidden flex flex-col">
            {project.imageUrl && (
              <div className="relative bg-slate-700 dark:bg-[#0a0a0a] h-50 w-full">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            {project.videoUrl && (
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={project.videoUrl}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="border-0"
                ></iframe>
              </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                {project.category}
              </span>
              <h2 className="text-2xl font-semibold mb-2 text-foreground">{project.title}</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3 flex-grow">{project.description}</p>

              {project.features && (
                <div className="mb-3">
                  <h4 className="text-sm font-semibold mb-1 text-foreground">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm space-y-0.5 text-neutral-500 dark:text-neutral-400">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-neutral-200 dark:bg-neutral-700 rounded-full px-3 py-1 text-xs font-semibold text-neutral-700 dark:text-neutral-300 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex space-x-3">
                {project.githubLink && (
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Button>
                  </Link>
                )}
                {project.demoLink && (
                  <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="default" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Button>
                  </Link>
                )}
                {project.caseStudyLink && (
                  <Link href={project.caseStudyLink}>
                    <Button variant="link" size="sm" className="text-primary">
                      View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
