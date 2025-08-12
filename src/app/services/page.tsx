import type { Metadata } from "next";
import {
  Palette,
  Zap,
  Cpu,
  Film,
  Mic,
  MonitorPlay,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore the wide range of services offered by Smart Hive Labs, including graphics design, web/mobile/desktop development, AI solutions, and more.",
};

const services = [
  {
    title: "Web & Mobile Development",
    icon: <Zap size={32} className="text-white" />,
    description:
      "Building responsive, high-performance websites and mobile applications tailored to your needs.",
    items: [
      "Frontend Development",
      "Backend Development",
      "Full-Stack Solutions",
      "Cross-Platform Apps",
    ],
    tools: [
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "Python (Django/Flask)",
    ],
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
  },
  {
    title: "Desktop Development",
    icon: <MonitorPlay size={32} className="text-white" />,
    description:
      "Crafting powerful and efficient desktop applications for various platforms.",
    items: [
      "Cross-Platform Applications",
      "Native Performance Apps",
      "Utility Software",
    ],
    tools: ["Tauri (Rust)", "Electron.js"],
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
  },
  {
    title: "Graphics Design",
    icon: <Palette size={32} className="text-white" />,
    description:
      "Creative and impactful visual solutions. We bring your ideas to life with stunning designs.",
    items: [
      "Logo Design & Branding",
      "Flyers & Brochures",
      "2D/3D Animation",
      "Motion Graphics",
    ],
    tools: ["Photoshop", "Illustrator", "Blender", "After Effects"],
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-50 to-rose-100",
    borderColor: "border-pink-200",
  },
  {
    title: "AI & ML Projects",
    icon: <Cpu size={32} className="text-white" />,
    description:
      "Leveraging artificial intelligence and machine learning to create smart solutions and drive innovation.",
    items: [
      "AI-Powered Learning Platforms (e.g., Hivedemia)",
      "Civic Tech Solutions (e.g., CivicLink)",
      "Custom AI Models",
      "Data Analysis & Insights",
    ],
    tools: ["Python", "PyTorch", "Keras", "TensorFlow", "Scikit-learn"],
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-100",
    borderColor: "border-green-200",
  },
  {
    title: "Visual Effects & Movie Production",
    icon: <Film size={32} className="text-white" />,
    description:
      "End-to-end video production services, from concept to final cut, including stunning visual effects.",
    items: [
      "Video Editing",
      "Color Grading",
      "VFX Compositing",
      "Short Films & Documentaries",
    ],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-50 to-amber-100",
    borderColor: "border-orange-200",
  },
  {
    title: "Sound Designing",
    icon: <Mic size={32} className="text-white" />,
    description:
      "Crafting immersive audio experiences for various media, enhancing storytelling and engagement.",
    items: [
      "Sound Effects Creation",
      "Audio Mixing & Mastering",
      "Foley Artistry",
      "Podcast Production",
    ],
    tools: ["Audition", "Pro Tools", "Logic Pro X"],
    gradient: "from-indigo-500 to-violet-500",
    bgGradient: "from-indigo-50 to-violet-100",
    borderColor: "border-indigo-200",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 shadow-lg">
                <Sparkles className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Smart Hive Labs offers a comprehensive suite of digital services
              to bring your vision to reality. We combine creativity with
              cutting-edge technology
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Star className="h-4 w-4 mr-2 text-yellow-300" />
                Premium Quality
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <CheckCircle className="h-4 w-4 mr-2 text-green-300" />
                Proven Results
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Sparkles className="h-4 w-4 mr-2 text-orange-300" />
                Creative Excellence
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

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-gradient-to-br ${service.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border ${service.borderColor} hover:-translate-y-2 relative overflow-hidden animate-fade-in-up`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-white to-transparent rounded-full blur-2xl"></div>
              </div>

              {/* Icon Header */}
              <div className="relative z-10 mb-6">
                <div
                  className={`inline-flex items-center justify-center p-4 bg-gradient-to-r ${service.gradient} rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Offerings */}
                <div className="mb-6">
                  <h4 className="font-bold text-foreground mb-3 flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    Key Offerings
                  </h4>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies & Tools */}
                <div>
                  <h4 className="font-bold text-foreground mb-3 flex items-center text-sm">
                    <Star className="h-4 w-4 mr-2 text-primary" />
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="bg-white/80 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1.5 rounded-full border border-primary/20 hover:border-primary/40 transition-colors duration-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
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
                Ready to Transform Your Ideas?
              </h3>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
                Let&apos;s discuss your project and create something amazing
                together. Our expert team is ready to bring your vision to life
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <Link href="/hire-us">
                  <Button
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <ArrowRight className="h-5 w-5 mr-2" />
                    Get Started
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
