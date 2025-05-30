import { Button } from "@/components/ui/button"
import NewsletterForm from "@/components/newsletter-form"
import Link from "next/link"
import { ArrowRight, Zap, Palette, Brain } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Welcome to <span className="text-primary">Smart Hive Labs</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-3xl mx-auto">
            Where Creativity Meets Technology. We specialize in Graphics Design, Web Development, and AI-driven
            solutions for a smarter future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/projects">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Our Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#newsletter">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10"
              >
                Join Our Newsletter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mini Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Core Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Palette size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Graphics Design</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Logos, Flyers, 2D/3D Animation, Motion Graphics. Visually stunning designs that tell your story.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Zap size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Web & App Development</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                React, Next.js, Node.js, Python, Tauri. Building robust and scalable digital experiences.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Brain size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">AI-Powered Solutions</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                AI Learning Platforms, Civic Tech. Innovative AI projects driving progress and efficiency.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="link" className="text-primary text-lg">
                Discover All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section Anchor */}
      <section id="newsletter" className="py-16 bg-background ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Stay Updated</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest projects, tech insights, and career opportunities at Smart Hive
            Labs.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}
