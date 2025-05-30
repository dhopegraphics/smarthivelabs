import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CalendarDays, UserCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - Tech Insights",
  description:
    "Read the latest articles, tutorials, and insights from the Smart Hive Labs team on web development, AI, graphics design, and more.",
}

// Placeholder blog posts data
const blogPosts = [
  {
    slug: "getting-started-with-nextjs-15",
    title: "Getting Started with Next.js 15: A Beginner's Guide",
    date: "2025-05-30",
    author: "Dhope Graphics",
    excerpt:
      "Next.js 15 is here with exciting new features. Learn how to set up your first project and explore the basics of App Router, Server Components, and more.",
    category: "Web Development",
    imageUrl: "/placeholder.svg?width=600&height=400",
    tags: ["Next.js", "React", "Tutorial", "Beginner"],
  },
  {
    slug: "ai-in-education-hivedemia-insights",
    title: "The Future of Learning: AI in Education & Hivedemia Insights",
    date: "2025-05-25",
    author: "AI Team @ Smart Hive Labs",
    excerpt:
      "Discover how AI is transforming the educational landscape. We share insights from our work on Hivedemia, an AI-powered study platform.",
    category: "AI/ML",
    imageUrl: "/placeholder.svg?width=600&height=400",
    tags: ["AI", "Machine Learning", "EdTech", "Hivedemia"],
  },
  {
    slug: "mastering-logo-design-principles",
    title: "Mastering Logo Design: Key Principles for Impactful Branding",
    date: "2025-05-20",
    author: "Graphics Team",
    excerpt:
      "A great logo is crucial for brand identity. We dive into the fundamental principles of logo design that can make your brand stand out.",
    category: "Graphics Design",
    imageUrl: "/placeholder.svg?width=600&height=400",
    tags: ["Logo Design", "Branding", "Graphic Design", "Tips"],
  },
  {
    slug: "animating-in-blender-tutorial",
    title: "Tutorial: Creating Your First Animation in Blender",
    date: "2025-05-15",
    author: "3D Team",
    excerpt:
      "Blender is a powerful open-source 3D creation suite. This tutorial walks you through creating a simple animation, perfect for beginners.",
    category: "Graphics Design",
    imageUrl: "/placeholder.svg?width=600&height=400",
    tags: ["Blender", "3D Animation", "Tutorial", "Motion Graphics"],
  },
]

export default function BlogPage() {
  return (
    <div className="py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Tech Insights & Articles</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Stay informed with our latest thoughts, tutorials, and news from the world of technology and design.
        </p>
      </section>

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-background rounded-lg shadow-lg overflow-hidden flex flex-col group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-56 w-full">
                  <Image
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="block">
                  <h2 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3 flex-grow">{post.excerpt}</p>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                  <span className="flex items-center mb-1">
                    <CalendarDays className="mr-1.5 h-3.5 w-3.5" />{" "}
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center">
                    <UserCircle className="mr-1.5 h-3.5 w-3.5" /> By {post.author}
                  </span>
                </div>
                <div className="mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-neutral-200 dark:bg-neutral-700 rounded-full px-2 py-0.5 text-xs font-medium text-neutral-700 dark:text-neutral-300 mr-1.5 mb-1.5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="link" className="text-primary p-0 h-auto group-hover:underline">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Placeholder for pagination or "Load More" button */}
      <div className="text-center mt-12">
        <Button variant="outline">Load More Posts</Button>
      </div>
    </div>
  )
}
