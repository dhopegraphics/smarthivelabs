"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Calendar,
  Clock,
  GraduationCap,
  Code,
  Database,
  Palette,
} from "lucide-react";

export default function Internships() {
  const currentYear = new Date().getFullYear();

  const internshipTracks = [
    {
      id: "graphics-design",
      title: "Graphics Design Intern",
      icon: <Palette className="h-8 w-8 text-purple-500" />,
      description:
        "Learn industry-standard design tools and techniques to create stunning visuals for web and mobile applications.",
      skills: [
        "Adobe Photoshop",
        "Figma",
        "UI/UX Design",
        "Illustration",
        "Brand Identity",
      ],
      projects: [
        "Design UI components",
        "Create marketing assets",
        "Develop brand guidelines",
      ],
    },
    {
      id: "frontend-dev",
      title: "Frontend Development Intern",
      icon: <Code className="h-8 w-8 text-blue-500" />,
      description:
        "Build beautiful, responsive user interfaces using modern frontend technologies and frameworks.",
      skills: [
        "React.js",
        "Next.js",
        "HTML/CSS",
        "JavaScript/TypeScript",
        "TailwindCSS",
      ],
      projects: [
        "Develop UI components",
        "Implement responsive layouts",
        "Create interactive features",
      ],
    },
    {
      id: "backend-dev",
      title: "Backend Development Intern",
      icon: <Database className="h-8 w-8 text-green-500" />,
      description:
        "Design and implement scalable server-side solutions and APIs to power modern web applications.",
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "RESTful APIs",
        "Authentication",
      ],
      projects: [
        "Build API endpoints",
        "Design database schemas",
        "Implement auth systems",
      ],
    },
  ];

  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <Badge
          variant="outline"
          className="mb-4 px-3 py-1 text-sm font-medium text-blue-500 dark:text-blue-400 border-blue-300 dark:border-blue-700"
        >
          {currentYear} Program
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
          Smart Hive Labs Internship Program
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
          Join our 3-month immersive training and skill empowerment program.
          Gain hands-on experience, mentorship, and build your professional
          portfolio.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-neutral-700 dark:text-neutral-300">
              3-month duration
            </span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-neutral-700 dark:text-neutral-300">
              20 hours weekly
            </span>
          </div>
          <div className="flex items-center">
            <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-neutral-700 dark:text-neutral-300">
              Certificate upon completion
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            size="lg"
            className="rounded-full px-8 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            <a href="#apply">Apply Now</a>
          </Button>
        </div>
      </section>

      {/* Program Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Program Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-neutral-700 dark:text-neutral-300">
              Smart Hive Labs&apos; Internship Program is designed to empower
              the next generation of tech talents through hands-on training and
              real-world projects. Our 3-month program focuses on practical
              skill development in graphics design, frontend, and backend
              development.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <p className="text-neutral-700 dark:text-neutral-300">
                  Work on real-world projects with experienced mentors
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <p className="text-neutral-700 dark:text-neutral-300">
                  Weekly skill development workshops and code reviews
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <p className="text-neutral-700 dark:text-neutral-300">
                  Build a professional portfolio to showcase your work
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <p className="text-neutral-700 dark:text-neutral-300">
                  Certificate of completion and recommendation letter
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <p className="text-neutral-700 dark:text-neutral-300">
                  Opportunity for full-time roles for exceptional performers
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center p-8">
              <div className="w-full h-full relative">
                <Image
                  src="/images/internship-program.jpg"
                  alt="Smart Hive Labs Interns Working"
                  fill
                  className="object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600"><rect fill="%232563EB" width="800" height="600"/><text fill="%23ffffff" font-family="Arial" font-size="36" text-anchor="middle" x="400" y="300">Smart Hive Labs Internship</text></svg>';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Tracks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Available Tracks
        </h2>
        <p className="text-center text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
          Choose your specialization path and develop in-demand skills for the
          tech industry
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {internshipTracks.map((track) => (
            <Card
              key={track.id}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-lg transition-all duration-300"
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
                <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                  {track.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-sm uppercase text-neutral-500 dark:text-neutral-400">
                    Skills You&apos;ll Learn
                  </h4>
                  <div className="flex flex-wrap gap-2">
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
                  <h4 className="font-medium mb-2 text-sm uppercase text-neutral-500 dark:text-neutral-400">
                    Project Examples
                  </h4>
                  <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 text-sm space-y-1">
                    {track.projects.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#apply">Apply for this track</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Program Structure */}
      <section className="mb-16 bg-neutral-100 dark:bg-neutral-900/60 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Program Structure
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
              <span className="font-bold text-lg">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Month 1: Foundations</h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Master the fundamentals of your chosen track through structured
              learning modules and small practice assignments.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
              <span className="font-bold text-lg">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Month 2: Application</h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Apply your skills to guided projects with increasing complexity.
              Work collaboratively with other interns.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
              <span className="font-bold text-lg">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Month 3: Capstone</h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Complete a real-world capstone project that will be featured in
              your portfolio. Present your work to the team.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          What Past Interns Say
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                  <span className="font-bold text-blue-700 dark:text-blue-400">
                    KA
                  </span>
                </div>
                <div>
                  <p className="font-bold">Kofi Addo</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Frontend Development, 2023
                  </p>
                </div>
              </div>
              <blockquote className="text-neutral-700 dark:text-neutral-300 italic">
                &quot;The Smart Hive Labs internship transformed my career path.
                I gained practical skills that no classroom could teach, and the
                mentors were incredibly supportive. Now I work as a junior
                developer at a tech startup.&quot;
              </blockquote>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                  <span className="font-bold text-purple-700 dark:text-purple-400">
                    AD
                  </span>
                </div>
                <div>
                  <p className="font-bold">Ama Darko</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Graphics Design, 2023
                  </p>
                </div>
              </div>
              <blockquote className="text-neutral-700 dark:text-neutral-300 italic">
                &quot;I came in with basic design skills but graduated from the
                program with a professional portfolio. The hands-on projects and
                feedback sessions were invaluable. I&apos;m now freelancing for
                clients I met through Smart Hive Labs.&quot;
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Application CTA */}
      <section
        id="apply"
        className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-900 dark:to-violet-900 rounded-2xl p-8 md:p-12 text-white mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Accelerate Your Tech Career?
          </h2>
          <p className="text-lg text-blue-100 dark:text-blue-200 max-w-2xl mx-auto">
            Applications for our 3-month internship program are now open.
            Limited slots available!
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-neutral-100 rounded-full px-8"
            asChild
          >
            <Link href="/careers">Apply Through Our Careers Page</Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white dark:bg-neutral-900">
            <CardHeader>
              <CardTitle className="text-lg">
                Is this a paid internship?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 dark:text-neutral-300">
                This is an unpaid training program focused on skill development.
                However, exceptional interns may be offered stipends for their
                capstone projects and potential employment opportunities upon
                completion.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-neutral-900">
            <CardHeader>
              <CardTitle className="text-lg">
                What are the eligibility requirements?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 dark:text-neutral-300">
                Basic knowledge in your chosen track, strong interest in
                technology, and commitment to the 3-month program with
                approximately 20 hours per week availability.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-neutral-900">
            <CardHeader>
              <CardTitle className="text-lg">
                Is this remote or in-person?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 dark:text-neutral-300">
                We offer only remote for now .
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-neutral-900">
            <CardHeader>
              <CardTitle className="text-lg">
                What happens after the program?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 dark:text-neutral-300">
                All interns receive a certificate of completion and a
                recommendation letter. Top performers may be offered full-time
                positions or freelance opportunities with Smart Hive Labs and
                our partner companies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Have more questions?</h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6">
          Contact us at{" "}
          <a
            href="mailto:internships@smarthivelabs.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            support@smarthivelabs.dev
          </a>
        </p>
        <Button variant="outline" className="rounded-full px-6" asChild>
          <Link href="/careers">Return to Careers</Link>
        </Button>
      </section>
    </div>
  );
}
