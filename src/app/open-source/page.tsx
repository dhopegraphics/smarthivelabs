import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Github,
  Code,
  Users,
  GitFork,
  Star,
  Rocket,
  Heart,
  Globe,
  Zap,
  Target,
  Award,
  ExternalLink,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 shadow-lg">
                <Code className="h-12 w-12 text-white animate-pulse" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Open Source{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Galaxy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Building the future together, one commit at a time. Join our
              open-source community and help us create innovative solutions that
              make a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm mb-10">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Heart className="h-4 w-4 mr-2 text-red-300" />
                Community Driven
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Globe className="h-4 w-4 mr-2 text-green-300" />
                Global Impact
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Rocket className="h-4 w-4 mr-2 text-blue-300" />
                Innovation
              </div>
            </div>
            <Link
              href="https://github.com/smarthivelabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Github className="mr-2 h-5 w-5" />
                Visit our GitHub
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-300/20 rounded-full blur-lg"></div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Featured Projects Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our open-source initiatives that are making a real impact
              in education, civic engagement, and technology innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {openSourceProjects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-primary/10 rounded-xl p-3 group-hover:bg-primary/20 transition-colors">
                    {project.title.includes("Hivedemia") ? (
                      <Zap className="h-8 w-8 text-primary" />
                    ) : (
                      <Target className="h-8 w-8 text-primary" />
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <div className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      Active
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02]">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                  <div className="grid grid-cols-2 gap-2">
                    {project.contributionGuide && (
                      <Link
                        href={project.contributionGuide}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full text-xs border-primary/20 hover:bg-primary/10 hover:border-primary transition-all"
                        >
                          <Users className="mr-1 h-3 w-3" />
                          Contribute
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
                          variant="outline"
                          size="sm"
                          className="w-full text-xs border-primary/20 hover:bg-primary/10 hover:border-primary transition-all"
                        >
                          <GitFork className="mr-1 h-3 w-3" />
                          Roadmap
                        </Button>
                      </Link>
                    )}
                    <Link
                      href={project.issuesLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-xs border-primary/20 hover:bg-primary/10 hover:border-primary transition-all col-span-2"
                      >
                        <Star className="mr-1 h-3 w-3" />
                        View Issues & Features
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Join Community Section */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <Sparkles className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Community!
              </h2>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
                Whether you&apos;re a developer, designer, writer, or tech
                enthusiast - there&apos;s a place for you in our open-source
                family.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <CheckCircle className="h-8 w-8 text-green-300 mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">Easy to Start</h4>
                  <p className="text-blue-100 text-sm">
                    Comprehensive documentation and beginner-friendly issues
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Award className="h-8 w-8 text-yellow-300 mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">Recognition</h4>
                  <p className="text-blue-100 text-sm">
                    Your contributions are valued and properly credited
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Heart className="h-8 w-8 text-red-300 mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">Supportive</h4>
                  <p className="text-blue-100 text-sm">
                    Friendly community ready to help and mentor newcomers
                  </p>
                </div>
              </div>

              <Link
                href="https://github.com/smarthivelabs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 font-semibold px-12 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Get Involved Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
