"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertCircle,
  BellRing,
  BrainCircuit,
  Briefcase,
  Check,
  Clock,
  Code,
  FileCode,
  Mail,
  PanelLeftClose,
  Rocket,
  ScreenShare,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function EntryLevel() {
  const entryLevelTracks = [
    {
      id: "frontend-dev",
      title: "React Developer",
      icon: <FileCode className="h-8 w-8 text-blue-500" />,
      description:
        "Build responsive and interactive user interfaces using React and Next.js for our web applications.",
      skills: [
        "React.js",
        "Next.js",
        "State Management",
        "TypeScript",
        "Material UI/Tailwind",
      ],
      responsibilities: [
        "Develop responsive UI components",
        "Collaborate with designers and backend developers",
        "Implement state management solutions",
        "Optimize application performance",
      ],
    },
    {
      id: "backend-dev",
      title: "Node.js Developer",
      icon: <Code className="h-8 w-8 text-green-500" />,
      description:
        "Create robust backend services and APIs using Node.js to power our applications and services.",
      skills: [
        "Node.js",
        "Express/Nest.js",
        "MongoDB/PostgreSQL",
        "RESTful APIs",
        "GraphQL",
      ],
      responsibilities: [
        "Build efficient server-side applications",
        "Design and implement databases",
        "Create and document APIs",
        "Ensure data security and integrity",
      ],
    },
    {
      id: "graphics-artist",
      title: "Photoshop Artist",
      icon: <PanelLeftClose className="h-8 w-8 text-purple-500" />,
      description:
        "Create stunning visuals, edit photos, and design graphic assets for our digital products and marketing materials.",
      skills: [
        "Adobe Photoshop",
        "Illustration",
        "Photo Editing",
        "Digital Painting",
        "Banner Design",
      ],
      responsibilities: [
        "Create marketing materials",
        "Design UI elements and assets",
        "Edit and optimize images",
        "Maintain brand consistency",
      ],
    },
    {
      id: "3d-modeler",
      title: "Blender Modeler/Animator",
      icon: <BrainCircuit className="h-8 w-8 text-orange-500" />,
      description:
        "Design and animate 3D models and environments for our interactive applications and presentations.",
      skills: ["Blender", "3D Modeling", "Animation", "Texturing", "Rendering"],
      responsibilities: [
        "Create 3D models and environments",
        "Rig and animate characters",
        "Optimize models for real-time applications",
        "Collaborate with the design team",
      ],
    },
  ];

  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <Badge
          variant="outline"
          className="mb-4 px-3 py-1 text-sm font-medium text-blue-500 dark:text-blue-400 border-blue-300 dark:border-blue-700"
        >
          Career Opportunities
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
          Entry-Level Positions
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Start your professional journey with Smart Hive Labs. We typically
          offer positions for early-career professionals across various
          technology disciplines.
        </p>
      </section>

      {/* Current Status Alert */}
      <Alert className="mb-12 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
        <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-500" />
        <AlertTitle className="text-amber-800 dark:text-amber-400 font-medium text-lg">
          No Current Openings
        </AlertTitle>
        <AlertDescription className="text-amber-700 dark:text-amber-300">
          We&apos;re not currently accepting applications for entry-level
          positions. Please check back later or consider our{" "}
          <Link
            href="/careers/internships"
            className="font-medium underline hover:text-amber-900 dark:hover:text-amber-200"
          >
            internship program
          </Link>{" "}
          as a pathway to future opportunities.
        </AlertDescription>
      </Alert>

      {/* Future Opportunities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          When Available: Our Entry-Level Tracks
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          These are the types of entry-level positions we typically offer. Check
          back later for openings in these areas.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {entryLevelTracks.map((track) => (
            <Card
              key={track.id}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  {track.icon}
                  <div>
                    <CardTitle className="text-xl">{track.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  {track.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-sm uppercase text-gray-500">
                    Required Skills
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {track.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-sm uppercase text-gray-500">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    {track.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* What We Look For */}
      <section className="mb-16 bg-neutral-100 dark:bg-neutral-900/60 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          What We Look For
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
              <Rocket className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Passion for Technology</h3>
            <p className="text-gray-700">
              We value individuals who are genuinely excited about technology
              and eager to contribute to innovative solutions.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
              <ScreenShare className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Willingness to Learn</h3>
            <p className="text-gray-700">
              Technology evolves rapidly. We seek team members who embrace
              continuous learning and adapt to new challenges.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
              <PanelLeftClose className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Collaborative Mindset</h3>
            <p className="text-gray-700">
              Our best work happens together. We look for people who communicate
              effectively and thrive in team environments.
            </p>
          </div>
        </div>
      </section>

      {/* Work Environment */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Our Work Environment
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center p-8">
              <div className="w-full h-full relative">
                <Image
                  src="/office-environment.webp"
                  alt="Smart Hive Labs Office"
                  fill
                  className="object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600"><rect fill="%232563EB" width="800" height="600"/><text fill="%23ffffff" font-family="Arial" font-size="36" text-anchor="middle" x="400" y="300">Smart Hive Labs Workplace</text></svg>';
                  }}
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Hybrid Work Model</h3>
                <p className="text-gray-700">
                  Flexibility to work from home with regular in-office
                  collaboration days.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Work-Life Balance</h3>
                <p className="text-gray-700">
                  We respect your time and promote a healthy balance between
                  professional and personal life.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <BellRing className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Career Growth</h3>
                <p className="text-gray-700">
                  Regular skill development workshops, mentoring, and
                  advancement opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notification Sign-up */}
      <section className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-900 dark:to-violet-900 rounded-2xl p-8 md:p-12 text-white mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Informed About Future Openings
          </h2>
          <p className="text-lg text-blue-100 dark:text-blue-200 max-w-2xl mx-auto">
            Join our talent network to receive notifications when new
            entry-level positions become available.
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-neutral-100 rounded-full px-8 flex items-center"
            asChild
          >
            <Link href="/careers">
              <Mail className="mr-2 h-5 w-5" />
              Join Our Talent Network
            </Link>
          </Button>
        </div>
      </section>

      {/* Alternative Paths */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Explore Other Opportunities</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          While we&apos;re not currently hiring for entry-level positions, we do
          have other ways you can join our community:
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-6"
            asChild
          >
            <Link href="/careers/internships">Internship Program</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-6"
            asChild
          >
            <Link href="/careers">Return to Careers</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
