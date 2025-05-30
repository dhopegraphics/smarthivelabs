import type { Metadata } from "next"
import Image from "next/image"
import { Users, Zap, Target, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Smart Hive Labs, our mission, vision, and the team dedicated to crafting digital excellence. Owned by Mensah Isaac Nana Sam (Dhope Graphics).",
}

export default function AboutPage() {
  return (
    <div className="py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-foreground">About Smart Hive Labs</h1>
        <p className="text-xl text-primary font-semibold mb-6">&quot;Crafting Digital Excellence Through Innovation&quot;</p>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          Smart Hive Labs is a dynamic digital solutions provider founded by Mensah Isaac Nana Sam (also known by his
          public brand, Dhope Graphics). We are passionate about leveraging technology and creativity to solve complex
          problems and deliver outstanding results for our clients and community.
        </p>
      </section>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-foreground">
              Our Mission <Target className="inline ml-2 text-primary" />
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              To empower businesses and individuals through innovative and high-quality digital services, fostering
              growth and enabling them to thrive in an ever-evolving technological landscape. We aim to be a hub of
              creativity and technical expertise.
            </p>
            <h2 className="text-3xl font-semibold mb-4 text-foreground">
              Our Vision <Lightbulb className="inline ml-2 text-primary" />
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              To be a leading force in digital innovation, recognized globally for our commitment to excellence, client
              success, and contributions to the tech community, particularly in AI and civic technology.
            </p>
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/team.jpg"
              alt="Smart Hive Labs Team Collaboration"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Meet the Founder</h2>
        <div className="max-w-4xl mx-auto bg-background p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="relative h-40 w-40 rounded-full overflow-hidden shadow-md flex-shrink-0">
            <Image
              src="/mins.jpg"
              alt="Mensah Isaac Nana Sam - Dhope Graphics"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary">Mensah Isaac Nana Sam</h3>
            <p className="text-md font-medium text-neutral-500 dark:text-neutral-400 mb-2">(Dhope Graphics)</p>
            <p className="text-neutral-600 dark:text-neutral-400">
              With a deep passion for both the artistic and technical sides of digital creation, Isaac founded Smart
              Hive Labs to build a space where innovation flourishes. His expertise spans graphics design, web
              development, and AI, driving the company&apos;s vision to deliver impactful solutions.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <Users size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Client-Centric Approach</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              We prioritize your needs and work collaboratively to achieve your goals.
            </p>
          </div>
          <div className="p-6">
            <Zap size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Innovative Solutions</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              We stay at the forefront of technology to deliver cutting-edge products.
            </p>
          </div>
          <div className="p-6">
            <Lightbulb size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Quality & Excellence</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Our commitment to quality ensures your project is in capable hands.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
