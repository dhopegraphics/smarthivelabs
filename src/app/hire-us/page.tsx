"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Handshake, Building, User, Palette, Zap, Cpu, Send, Mail, Lightbulb } from "lucide-react"

const serviceCategories = [
  "Graphics Design (Logos, Flyers, Animation)",
  "Web Development (React, Next.js, Node.js)",
  "Mobile App Development (React Native)",
  "Desktop Development (Tauri, Electron)",
  "AI/ML Project Development",
  "Visual Effects & Movie Production",
  "Sound Designing",
  "Consultation",
  "Other",
]

export default function HireUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "", // Optional
    service: "",
    projectDetails: "",
    budget: "", // Optional, could be a range or specific
  })
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmissionStatus("Sending inquiry...")
    // Simulate API call
    console.log("Hiring inquiry:", formData)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setSubmissionStatus("Your inquiry has been sent! We will contact you shortly to discuss your project.")
    setFormData({ name: "", email: "", company: "", service: "", projectDetails: "", budget: "" }) // Reset form
  }

  return (
    <div className="py-12">
      <section className="text-center mb-12">
        <Handshake size={64} className="mx-auto mb-6 text-primary" />
        <h1 className="text-4xl font-bold mb-4 text-foreground">Let&apos;s Build Something Amazing Together</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Ready to start your next project? Smart Hive Labs offers expert services to bring your ideas to life. Fill out
          the form below, and let&apos;s discuss how we can help you achieve your goals.
        </p>
      </section>

      <section className="max-w-3xl mx-auto bg-background p-8 sm:p-10 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-semibold mb-8 text-center text-foreground">Project Inquiry Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Your Name / Contact Person <User className="inline ml-1 h-4 w-4 text-primary" />
              </label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g., John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Your Email <Mail className="inline ml-1 h-4 w-4 text-primary" />
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="e.g., john.doe@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Company Name (Optional) <Building className="inline ml-1 h-4 w-4 text-primary" />
            </label>
            <Input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g., Acme Corp"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Service Needed <Zap className="inline ml-1 h-4 w-4 text-primary" />
            </label>
            <Select
              name="service"
              value={formData.service}
              onValueChange={(value) => handleSelectChange("service", value)}
             
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a service category" />
              </SelectTrigger>
              <SelectContent className="dark:bg-blue-950/60  bg-blue-50">
                {serviceCategories.map((service) => (
                  <SelectItem className="hover:text-blue-700" key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label
              htmlFor="projectDetails"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
            >
              Tell us about your project <Lightbulb className="inline ml-1 h-4 w-4 text-primary" />
            </label>
            <Textarea
              name="projectDetails"
              id="projectDetails"
              rows={6}
              value={formData.projectDetails}
              onChange={handleChange}
              required
              placeholder="Describe your project requirements, goals, timeline, etc."
            />
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Estimated Budget (Optional) <DollarSign className="inline ml-1 h-4 w-4 text-primary" />
            </label>
            <Input
              type="text"
              name="budget"
              id="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="e.g., $500 - $1000, or specific amount"
            />
          </div>
          <Button type="submit" className="w-full text-lg py-3 dark:hover:bg-blue-800 hover:bg-blue-600 hover:text-white" disabled={submissionStatus === "Sending inquiry..."}>
            {submissionStatus === "Sending inquiry..." ? (
              "Processing..."
            ) : (
              <>
                Send Project Inquiry <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
          {submissionStatus && !submissionStatus.includes("Sending inquiry...") && (
            <p className="mt-4 text-center text-sm text-green-600 dark:text-green-400">{submissionStatus}</p>
          )}
        </form>
      </section>

      <section className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-foreground">Why Partner with Smart Hive Labs?</h3>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-neutral-600 dark:text-neutral-400">
          <div className="bg-background  dark:hover:shadow-zinc-900 hover:shadow-blue-200  p-6 rounded-lg shadow-lg">
            <Palette size={32} className="mx-auto mb-3 text-primary" />
            <h4 className="font-semibold text-lg mb-1 text-foreground">Creative Expertise</h4>
            <p className="text-sm">Innovative designs and solutions tailored to your brand.</p>
          </div>
          <div className="bg-background p-6 rounded-lg dark:hover:shadow-zinc-900 hover:shadow-blue-200  shadow-lg">
            <Zap size={32} className="mx-auto mb-3 text-primary" />
            <h4 className="font-semibold text-lg mb-1 text-foreground">Technical Prowess</h4>
            <p className="text-sm">Utilizing the latest technologies for robust and scalable results.</p>
          </div>
          <div className="bg-background p-6 rounded-lg dark:hover:shadow-zinc-900 hover:shadow-blue-200  shadow-lg">
            <Cpu size={32} className="mx-auto mb-3 text-primary" />
            <h4 className="font-semibold text-lg mb-1 text-foreground">Collaborative Process</h4>
            <p className="text-sm">We work closely with you every step of the way to ensure success.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

// Helper component for DollarSign icon, as it's not directly in lucide-react
const DollarSign = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
)
