import type { Metadata } from "next";
import Image from "next/image";
import {
  Users,
  Zap,
  Target,
  Lightbulb,
  Heart,
  Award,
  Globe,
  Code2,
  Rocket,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Smart Hive Labs, our mission, vision, and the team dedicated to crafting digital excellence. Owned by Mensah Isaac Nana Sam (Dhope Graphics).",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 shadow-lg">
                <Users className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Smart Hive Labs
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 mb-6 font-semibold">
              &quot;Crafting Digital Excellence Through Innovation&quot;
            </p>
            <p className="text-xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              We are passionate about leveraging technology and creativity to
              solve complex problems and deliver outstanding results for our
              clients and community
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Code2 className="h-4 w-4 mr-2 text-yellow-300" />
                Innovation Driven
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Globe className="h-4 w-4 mr-2 text-green-300" />
                Global Impact
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Award className="h-4 w-4 mr-2 text-orange-300" />
                Excellence Focused
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision Section */}
        <section className="py-20 -mt-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500 rounded-full p-3 mr-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    Our Mission
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To empower businesses and individuals through innovative and
                  high-quality digital services, fostering growth and enabling
                  them to thrive in an ever-evolving technological landscape. We
                  aim to be a hub of creativity and technical expertise.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-500 rounded-full p-3 mr-4">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    Our Vision
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To be a leading force in digital innovation, recognized
                  globally for our commitment to excellence, client success, and
                  contributions to the tech community, particularly in AI and
                  civic technology.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/team.jpg"
                  alt="Smart Hive Labs Team Collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Delivered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet the Founder
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The visionary behind Smart Hive Labs, driving innovation and
              excellence
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-3xl p-12 shadow-2xl border border-gray-100">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="relative">
                  <div className="relative h-60 w-60 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                    <Image
                      src="/mins.jpg"
                      alt="Mensah Isaac Nana Sam - Dhope Graphics"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 bg-primary rounded-full p-3">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-yellow-500 rounded-full p-3">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-4xl font-bold text-primary mb-2">
                    Mensah Isaac Nana Sam
                  </h3>
                  <p className="text-xl font-semibold text-muted-foreground mb-6">
                    (Dhope Graphics) - Founder & CEO
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    With a deep passion for both the artistic and technical
                    sides of digital creation, Isaac founded Smart Hive Labs to
                    build a space where innovation flourishes. His expertise
                    spans graphics design, web development, and AI, driving the
                    company&apos;s vision to deliver impactful solutions.
                  </p>

                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                      Graphics Design
                    </div>
                    <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                      Web Development
                    </div>
                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                      AI Solutions
                    </div>
                    <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                      Innovation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover what makes Smart Hive Labs the perfect partner for your
              digital journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center p-6 bg-blue-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Client-Centric Approach
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We prioritize your needs and work collaboratively to achieve
                your goals with personalized solutions.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center p-6 bg-purple-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Innovative Solutions
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We stay at the forefront of technology to deliver cutting-edge
                products that drive real results.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center p-6 bg-green-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Lightbulb className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Quality & Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to quality ensures your project is in capable
                hands with exceptional attention to detail.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Work Together?
              </h3>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
                Let&apos;s turn your vision into reality with our expertise and
                passion for innovation
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <Link href="/hire-us">
                  <Button
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Rocket className="h-5 w-5 mr-2" />
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-white border-white hover:bg-white/10 px-8 py-4 rounded-full text-lg backdrop-blur-sm"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
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
