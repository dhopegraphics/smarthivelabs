"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  ArrowRight,
  Star,
  Users,
  Zap,
  Trophy,
  Eye,
  Code2,
} from "lucide-react";
import { useState } from "react";

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
    features: [
      "AI Tutoring",
      "Quiz Generation",
      "Document Q&A",
      "Performance Tracking",
    ],
    projectType: "Our Product",
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
    projectType: "Prototype",
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
    projectType: "Hired Project",
  },
  {
    title: "Motion Graphics Showcase Reel",
    category: "Graphics Design",
    description:
      "A compilation of our best motion graphics work, demonstrating skills in animation, visual storytelling, and brand promotion.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    status: "Portfolio Piece",
    tags: ["After Effects", "Motion Design", "Branding"],
    projectType: "Hired Project",
  },
];

export default function ProjectsClientPage() {
  const [filter, setFilter] = useState("All");
  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <Code2 className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Our Amazing{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our portfolio of innovative solutions, cutting-edge
              technology, and creative excellence that drives results for our
              clients
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="h-4 w-4 mr-2 text-yellow-300" />
                50+ Projects Delivered
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="h-4 w-4 mr-2 text-green-300" />
                Happy Clients Worldwide
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Trophy className="h-4 w-4 mr-2 text-orange-300" />
                Award-Winning Designs
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-16 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-16 left-1/4 w-24 h-24 bg-orange-300/20 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Filter by Category
          </h2>
          <p className="text-muted-foreground mb-8">
            Explore our diverse range of projects across different domains
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={filter === "All" ? "default" : "outline"}
              onClick={() => setFilter("All")}
              className="rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <Eye className="mr-2 h-4 w-4" />
              All Projects
            </Button>
            <Button
              variant={filter === "AI & Education" ? "default" : "outline"}
              onClick={() => setFilter("AI & Education")}
              className="rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <Zap className="mr-2 h-4 w-4" />
              AI & Education
            </Button>
            <Button
              variant={filter === "Web Development" ? "default" : "outline"}
              onClick={() => setFilter("Web Development")}
              className="rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <Code2 className="mr-2 h-4 w-4" />
              Web Development
            </Button>
            <Button
              variant={filter === "Graphics Design" ? "default" : "outline"}
              onClick={() => setFilter("Graphics Design")}
              className="rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <Star className="mr-2 h-4 w-4" />
              Graphics Design
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary/20 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Project Image/Video */}
              {project.imageUrl && (
                <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>
              )}
              {project.videoUrl && (
                <div className="aspect-video relative">
                  <iframe
                    width="100%"
                    height="100%"
                    src={project.videoUrl}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                  ></iframe>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>
              )}

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground bg-gray-50 px-3 py-1 rounded-full">
                    {project.projectType}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                {project.features && (
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-foreground mb-3 flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-primary" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-primary text-xs font-medium px-3 py-1.5 rounded-full border border-primary/20 hover:border-primary/40 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full hover:scale-105 transition-transform duration-200"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    </Link>
                  )}
                  {project.demoLink && (
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="rounded-full hover:scale-105 transition-transform duration-200"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </Link>
                  )}
                  {project.caseStudyLink && (
                    <Link href={project.caseStudyLink}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:bg-primary/10 rounded-full"
                      >
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                Let&apos;s collaborate and bring your vision to life with our
                expertise and creativity
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/hire-us">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full px-8 py-3 text-primary font-semibold hover:scale-105 transition-transform duration-200"
                  >
                    Start a Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-3 border-white text-white hover:bg-white hover:text-primary transition-all duration-200"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
