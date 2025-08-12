import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarDays,
  UserCircle,
  BookOpen,
  Clock,
  Eye,
  Sparkles,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Tech Insights",
  description:
    "Read the latest articles, tutorials, and insights from the Smart Hive Labs team on web development, AI, graphics design, and more.",
};

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
    readTime: "8 min read",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
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
    readTime: "12 min read",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-100",
    borderColor: "border-green-200",
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
    readTime: "10 min read",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-50 to-rose-100",
    borderColor: "border-pink-200",
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
    readTime: "15 min read",
    gradient: "from-purple-500 to-violet-500",
    bgGradient: "from-purple-50 to-violet-100",
    borderColor: "border-purple-200",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 shadow-lg">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Tech{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Stay informed with our latest thoughts, tutorials, and news from
              the world of technology and design
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Star className="h-4 w-4 mr-2 text-yellow-300" />
                Expert Insights
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <BookOpen className="h-4 w-4 mr-2 text-green-300" />
                In-Depth Tutorials
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Sparkles className="h-4 w-4 mr-2 text-orange-300" />
                Latest Trends
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-300/20 rounded-full blur-lg"></div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.slug}
                className={`group bg-gradient-to-br ${post.bgGradient} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border ${post.borderColor} overflow-hidden hover:-translate-y-2 animate-fade-in-up`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Image Section */}
                <Link href={`/blog/${post.slug}`} className="block relative">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`bg-gradient-to-r ${post.gradient} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}
                      >
                        {post.category}
                      </span>
                    </div>

                    {/* Read Time Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Content Section */}
                <div className="p-8">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author and Date */}
                  <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <UserCircle className="h-4 w-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/80 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1.5 rounded-full border border-primary/20 hover:border-primary/40 transition-colors duration-200"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="mt-auto">
                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="ghost"
                        className="text-primary hover:bg-primary/10 p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform duration-200"
                      >
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Load More Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-md mx-auto">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 rounded-full p-3">
                <Eye className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Want to Read More?
            </h3>
            <p className="text-muted-foreground mb-6">
              Discover more insights, tutorials, and tech stories
            </p>
            <Button
              variant="outline"
              className="rounded-full px-8 py-3 font-semibold hover:scale-105 transition-transform duration-200"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Load More Posts
            </Button>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <Sparkles className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Stay Updated
              </h3>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
                Get the latest articles, tutorials, and tech insights delivered
                straight to your inbox
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <BookOpen className="h-5 w-5 mr-2" />
                    Subscribe to Newsletter
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-white border-white hover:bg-white/10 px-8 py-4 rounded-full text-lg backdrop-blur-sm"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
