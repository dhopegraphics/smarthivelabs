"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BrainCircuit,
  FileText,
  PenSquare,
  BookOpenCheck,
  ImageIcon,
  LineChart,
  Shield,
  FileTerminal,
  ArrowRight,
  UserX,
} from "lucide-react";

export default function Hivedemia() {
  const features = [
    {
      icon: <BrainCircuit className="h-10 w-10 text-indigo-500" />,
      title: "AI Tutoring",
      description:
        "Get personalized help with challenging subjects and concepts from our intelligent AI tutor.",
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-500" />,
      title: "Quiz Generation",
      description:
        "Create custom quizzes from your notes or any learning material to test your knowledge.",
    },
    {
      icon: <PenSquare className="h-10 w-10 text-green-500" />,
      title: "Personalized Planning",
      description:
        "Develop tailored study schedules that adapt to your learning style and goals.",
    },
    {
      icon: <BookOpenCheck className="h-10 w-10 text-yellow-500" />,
      title: "Document Q&A",
      description:
        "Upload documents and get instant answers to your questions about the content.",
    },
    {
      icon: <ImageIcon className="h-10 w-10 text-orange-500" />,
      title: "Photo Problem Solving",
      description:
        "Take a picture of a problem and receive step-by-step guidance to solve it.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-red-500" />,
      title: "Performance Tracking",
      description:
        "Monitor your progress across subjects and identify areas for improvement.",
    },
  ];

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-8 mb-20">
        <div className="lg:w-1/2">
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-sm font-medium text-indigo-500 dark:text-indigo-400 border-indigo-300 dark:border-indigo-700"
          >
            AI-Powered Learning
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400">
            Hivedemia
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Transform your learning experience with our AI-powered study
            platform designed to make education more personalized, efficient,
            and accessible.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800 text-white"
            >
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 flex items-center justify-center">
            <div className="relative w-5/6 h-5/6">
              <Image
                src="/black-logo-white-text.webp"
                alt="Hivedemia Dashboard"
                fill
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600"><rect fill="%234338ca" width="800" height="600"/><text fill="%23ffffff" font-family="Arial" font-size="42" text-anchor="middle" x="400" y="300">Hivedemia</text></svg>';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Supercharge Your Learning</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hivedemia combines cutting-edge AI technology with effective
            learning methodologies to create a powerful educational experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-20 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How Hivedemia Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform utilizes advanced AI to deliver a seamless and
            intuitive learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-indigo-600 dark:bg-indigo-700 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Upload Your Materials
            </h3>
            <p className="text-gray-600">
              Share your notes, textbooks, or assignments with our AI system.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-indigo-600 dark:bg-indigo-700 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
            <p className="text-gray-600">
              Our AI processes and understands your content to provide
              personalized support.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-indigo-600 dark:bg-indigo-700 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Learn & Improve</h3>
            <p className="text-gray-600">
              Receive tailored assistance, quizzes, and track your progress over
              time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="mb-20">
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-40 h-40 rounded-full bg-indigo-600 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">SHL</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To empower students worldwide with intelligent tools for
                personalized, efficient learning. We believe education should be
                accessible, engaging, and adapted to each learner&apos;s unique
                needs.
              </p>
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="font-semibold">Mensah Isaac Nana Sam</h3>
                  <p className="text-sm text-gray-600">
                    Founder (Dhope Graphics)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Creator Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About the Creator</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hivedemia is developed by Smart Hive Labs, a company dedicated to
            innovation in education and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Dhope Graphics</h3>
            <p className="text-gray-600 mb-4">
              The brand name of Mensah Isaac Nana Sam, focusing on creative
              digital solutions that merge design with technology.
            </p>
            <Link
              href="/about"
              className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center hover:underline"
            >
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Smart Hive Labs</h3>
            <p className="text-gray-600 mb-4">
              A technology company focused on developing innovative solutions
              that address real-world challenges in education and beyond.
            </p>
            <Link
              href="/about"
              className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center hover:underline"
            >
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-700 dark:to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Hivedemia today and experience the future of AI-assisted
            education.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-indigo-700 hover:bg-neutral-100"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Legal Links */}
      <section className="text-center">
        <div className="inline-flex flex-col sm:flex-row gap-4">
          <Button variant="outline" className="flex items-center" asChild>
            <Link href="/hivedemia-privacy">
              <Shield className="mr-2 h-5 w-5" />
              Privacy Policy
            </Link>
          </Button>
          <Button variant="outline" className="flex items-center" asChild>
            <Link href="/hivedemia-termsofuse">
              <FileTerminal className="mr-2 h-5 w-5" />
              Terms of Use
            </Link>
          </Button>
          <Button variant="outline" className="flex items-center" asChild>
            <Link href="/account-deletion">
              <UserX className="mr-2 h-5 w-5" />
              Delete Account
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
