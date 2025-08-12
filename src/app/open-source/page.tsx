import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Code, Users, GitFork, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Open Source Contributions",
  description:
    "Join Smart Hive Labs in our open-source initiatives. Contribute to projects like Hivedemia and CivicLink.",
};

const openSourceProjects = [
  {
    title: "Hivedemia - AI Study Tool",
    description:
      "An AI-powered platform to assist students with learning, quiz generation, and document interaction. We welcome contributions to enhance its features and reach.",
    githubLink: "https://github.com/smarhivelabs/hivedemia", // Placeholder
    tags: ["AI/ML", "Python", "Next.js", "Education"],
    contributionGuide:
      "https://github.com/smarhivelabs/hivedemia/blob/main/CONTRIBUTING.md", // Placeholder
    issuesLink: "https://github.com/smarthivelabs/hivedemia/issues", // Placeholder
  },
  {
    title: "CivicLink - Civic Tech Initiative",
    description:
      "A project focused on leveraging technology for civic engagement and transparency. Currently exploring tools for voter education and electoral process tracking in Ghana.",
    githubLink: "https://github.com/smarhivelabs/civiclink", // Placeholder
    tags: ["CivicTech", "Next.js", "Node.js", "Transparency"],
    roadmapLink:
      "https://github.com/smarthivelabs/civiclink/blob/main/ROADMAP.md", // Placeholder
    issuesLink: "https://github.com/smarthivelabs/civiclink/issues", // Placeholder
  },
];

export default function OpenSourcePage() {
  return (
    <div className="py-12 px-12">
      <section className="text-center mb-16">
        <Code size={64} className="mx-auto mb-6 text-primary" />
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Our Open Source Galaxy
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          At Smart Hive Labs, we believe in the power of collaboration and
          giving back to the community. Explore our open-source projects and
          join us in building innovative solutions.
        </p>
        <Link
          href="https://github.com/smarthivelabs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className=" transition-all hover:text-white duration-300 hover:bg-slate-900 hover:scale-105  hover:shadow-xl"
          >
            <Github className="mr-2 h-5 w-5  " /> Visit our GitHub Organization
          </Button>
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {openSourceProjects.map((project) => (
            <div
              key={project.title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-slate-100/20   hover:scale-105 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {project.description}
              </p>
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
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full mb-5 justify-start transition-all hover:bg-slate-950 duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </Button>
                </Link>
                {project.contributionGuide && (
                  <Link
                    href={project.contributionGuide}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="link"
                      className="text-primary p-0 h-auto text-sm w-full justify-start"
                    >
                      <Users className="mr-2 h-4 w-4" /> How to Contribute
                    </Button>
                  </Link>
                )}
                {project.roadmapLink && (
                  <Link
                    href={project.roadmapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="link"
                      className="text-primary p-0 h-auto text-sm w-full justify-start"
                    >
                      <GitFork className="mr-2 h-4 w-4" /> Project Roadmap
                    </Button>
                  </Link>
                )}
                <Link
                  href={project.issuesLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="link"
                    className="text-primary p-0 h-auto text-sm w-full justify-start"
                  >
                    <Star className="mr-2 h-4 w-4" /> View Issues
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center bg-primary/5 dark:bg-primary/10 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Join Our Open-Source Community!
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Whether you&apos;re a developer, designer, writer, or enthusiast,
          there&apos;s a place for you. Help us shape the future of technology.
        </p>
        <Link
          href="https://github.com/smarthivelabs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            variant="default"
            className=" transition-all hover:text-white duration-300 hover:bg-slate-900 hover:scale-105  hover:shadow-xl"
          >
            <Users className="mr-2 h-5 w-5" /> Get Involved
          </Button>
        </Link>
      </section>
    </div>
  );
}
