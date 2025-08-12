import { Button } from "@/components/ui/button";
import NewsletterForm from "@/components/newsletter-form";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Palette,
  Brain,
  CheckCircle,
  Clock,
  Award,
  Users,
  Star,
  Quote,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-32 text-center bg-gradient-to-br from-secondary via-background to-muted relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="container mx-auto px-4 relative">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            <CheckCircle size={16} className="mr-2" />
            Available for New Projects
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            We Build, Design, <br />
            <span className="text-primary">and Deliver</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground mb-4 max-w-4xl mx-auto font-light">
            Let&apos;s Work Together to Bring Your Vision to Life
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional development and design services with a commitment to
            quality, on-time delivery, and results that exceed expectations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Hire Us Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold border-2 border-border text-secondary-foreground hover:border-primary hover:text-primary bg-background hover:bg-secondary transition-all duration-300"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              What We Deliver
            </h2>
            <p className="text-xl text-secondary-foreground max-w-3xl mx-auto">
              Professional solutions designed to help your business grow and
              succeed in the digital world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Palette
                  size={32}
                  className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Custom Websites that Convert
              </h3>
              <p className="text-secondary-foreground text-lg leading-relaxed mb-6">
                Modern, responsive websites built with React, Next.js, and
                cutting-edge technologies that drive results and engage your
                audience.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Mobile-First Design
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  SEO Optimized
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Fast Loading
                </li>
              </ul>
            </div>
            <div className="group p-8 bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Zap
                  size={32}
                  className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Branding that Stands Out
              </h3>
              <p className="text-secondary-foreground text-lg leading-relaxed mb-6">
                Complete visual identity packages including logos, marketing
                materials, and brand guidelines that make lasting impressions.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Logo Design
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Marketing Materials
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Brand Guidelines
                </li>
              </ul>
            </div>
            <div className="group p-8 bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Brain
                  size={32}
                  className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                AI-Powered Solutions
              </h3>
              <p className="text-secondary-foreground text-lg leading-relaxed mb-6">
                Intelligent applications and automation tools that streamline
                your business processes and enhance user experiences.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Custom AI Tools
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Process Automation
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Data Analytics
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                variant="link"
                className="text-primary text-xl font-semibold hover:text-primary/80"
              >
                Explore All Services <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Why Clients Choose{" "}
                <span className="text-primary">Smart Hive Labs</span>
              </h2>
              <p className="text-xl text-secondary-foreground mb-8 leading-relaxed">
                We&apos;re not just developers and designers — we&apos;re your
                strategic partners committed to your success.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Fast Delivery
                    </h3>
                    <p className="text-muted-foreground">
                      On-time project completion with agile development
                      processes and clear milestones.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Award size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Quality Guaranteed
                    </h3>
                    <p className="text-muted-foreground">
                      Rigorous testing and quality assurance to ensure your
                      project exceeds expectations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Users size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Dedicated Support
                    </h3>
                    <p className="text-muted-foreground">
                      Personal attention and ongoing support to help your
                      business grow and evolve.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Brain size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Creative Solutions
                    </h3>
                    <p className="text-muted-foreground">
                      Innovative approaches that set your brand apart from the
                      competition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card p-8 rounded-2xl shadow-xl border border-border">
                <div className="text-center">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    Ready to Start?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Join hundreds of satisfied clients who trust us with their
                    digital success.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3">
                      Get Your Free Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-xl text-secondary-foreground max-w-3xl mx-auto">
              Don&apos;t just take our word for it — hear from the businesses
              we&apos;ve helped succeed.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Quote size={24} className="text-primary mr-3" />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-card-foreground text-lg mb-6 leading-relaxed">
                &quot;Smart Hive Labs transformed our outdated website into a
                modern, conversion-focused platform. Our online sales increased
                by 300%!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Users size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    Sarah Johnson
                  </h4>
                  <p className="text-muted-foreground">CEO, TechStart Inc.</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Quote size={24} className="text-primary mr-3" />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-card-foreground text-lg mb-6 leading-relaxed">
                &quot;Professional, creative, and delivered exactly what we
                needed. The team understood our vision perfectly and brought it
                to life.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Users size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    Michael Chen
                  </h4>
                  <p className="text-muted-foreground">
                    Founder, Creative Studios
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Quote size={24} className="text-primary mr-3" />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-card-foreground text-lg mb-6 leading-relaxed">
                &quot;From concept to launch, Smart Hive Labs exceeded our
                expectations. Fast, reliable, and incredibly talented
                team.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Users size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    Emily Rodriguez
                  </h4>
                  <p className="text-muted-foreground">
                    Marketing Director, GrowthCo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get Free Business Tips & Project Updates
            </h2>
            <p className="text-xl text-secondary-foreground mb-8 leading-relaxed">
              Join our newsletter for exclusive insights, industry trends, and
              updates on our latest projects. Plus, get free business tips to
              help grow your digital presence.
            </p>
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border max-w-2xl mx-auto">
              <NewsletterForm />
              <p className="text-sm text-muted-foreground mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
