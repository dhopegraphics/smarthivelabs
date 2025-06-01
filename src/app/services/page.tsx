import type { Metadata } from "next"
import { Palette, Zap, Cpu, Film, Mic, MonitorPlay } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore the wide range of services offered by Smart Hive Labs, including graphics design, web/mobile/desktop development, AI solutions, and more.",
}

const services = [
   {
    title: "Web & Mobile Development",
    icon: <Zap size={32} className="text-primary" />,
    description: "Building responsive, high-performance websites and mobile applications tailored to your needs.",
    items: ["Frontend Development", "Backend Development", "Full-Stack Solutions", "Cross-Platform Apps"],
    tools: ["React", "Next.js", "React Native", "Node.js", "Python (Django/Flask)"],
  },
    {
    title: "Desktop Development",
    icon: <MonitorPlay size={32} className="text-primary" />,
    description: "Crafting powerful and efficient desktop applications for various platforms.",
    items: ["Cross-Platform Applications", "Native Performance Apps", "Utility Software"],
    tools: ["Tauri (Rust)", "Electron.js"],
  },
  {
    title: "Graphics Design",
    icon: <Palette size={32} className="text-primary" />,
    description: "Creative and impactful visual solutions. We bring your ideas to life with stunning designs.",
    items: ["Logo Design & Branding", "Flyers & Brochures", "2D/3D Animation", "Motion Graphics"],
    tools: ["Photoshop", "Illustrator", "Blender", "After Effects"],
  },
 

  {
    title: "AI & ML Projects",
    icon: <Cpu size={32} className="text-primary" />,
    description:
      "Leveraging artificial intelligence and machine learning to create smart solutions and drive innovation.",
    items: [
      "AI-Powered Learning Platforms (e.g., Hivedemia)",
      "Civic Tech Solutions (e.g., CivicLink)",
      "Custom AI Models",
      "Data Analysis & Insights",
    ],
    tools: ["Python", "PyTorch", "Keras", "TensorFlow", "Scikit-learn"],
  },
  {
    title: "Visual Effects & Movie Production",
    icon: <Film size={32} className="text-primary" />,
    description: "End-to-end video production services, from concept to final cut, including stunning visual effects.",
    items: ["Video Editing", "Color Grading", "VFX Compositing", "Short Films & Documentaries"],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
  },
  {
    title: "Sound Designing",
    icon: <Mic size={32} className="text-primary" />,
    description: "Crafting immersive audio experiences for various media, enhancing storytelling and engagement.",
    items: ["Sound Effects Creation", "Audio Mixing & Mastering", "Foley Artistry", "Podcast Production"],
    tools: ["Audition", "Pro Tools", "Logic Pro X"],
  },
]

export default function ServicesPage() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-foreground">Our Services</h1>
      <p className="text-lg text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
        Smart Hive Labs offers a comprehensive suite of digital services to bring your vision to reality. We combine
        creativity with cutting-edge technology.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-background p-6 rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col"
          >
            <div className="flex items-center mb-4">
              {service.icon}
              <h2 className="text-2xl font-semibold ml-3 text-foreground">{service.title}</h2>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm flex-grow">{service.description}</p>
            <div className="mb-3">
              <h4 className="font-semibold text-sm mb-1 text-foreground">Key Offerings:</h4>
              <ul className="list-disc list-inside text-sm space-y-1 text-neutral-500 dark:text-neutral-400">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1 text-foreground">Technologies & Tools:</h4>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span key={tool} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
