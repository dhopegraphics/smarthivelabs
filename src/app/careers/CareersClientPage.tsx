"use client" // For form handling

import type React from "react"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea" // Assuming shadcn/ui textarea
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select" // Assuming shadcn/ui select
import { Briefcase, Users, Palette, Send } from "lucide-react"

const roles = [
  "Graphics Design Intern",
  "Frontend Development Intern",
  "Backend Development Intern",
  "AI/ML Intern",
  "React Developer (Entry-Level)",
  "Node.js Developer (Entry-Level)",
  "Photoshop Artist (Entry-Level)",
  "Blender Modeler/Animator (Entry-Level)",
  "Other",
]

export default function CareersClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    role: "",
    message: "",
  })
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, role: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmissionStatus("Submitting...")
    // Simulate API call
    console.log("Career application:", formData)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setSubmissionStatus("Application submitted successfully! We will get back to you soon.")
    setFormData({ name: "", email: "", portfolio: "", role: "", message: "" }) // Reset form
  }

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-foreground">Careers & Internships</h1>
      <p className="text-lg text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
        Join our innovative team at Smart Hive Labs! We&apos;re looking for passionate individuals to grow with us.
      </p>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center text-foreground">Current Opportunities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-background p-6 rounded-lg shadow-md">
            <Palette size={24} className="text-primary mb-2" />
            <h3 className="text-xl font-semibold mb-1 text-foreground">Internship Programs</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Graphics, Frontend, Backend, AI/ML</p>
            <Button variant="link" className="p-0 h-auto text-primary">
              Learn More
            </Button>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-md">
            <Briefcase size={24} className="text-primary mb-2" />
            <h3 className="text-xl font-semibold mb-1 text-foreground">Entry-Level Roles</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
              React, Node.js, Photoshop, Blender, etc.
            </p>
            <Button variant="link" className="p-0 h-auto text-primary">
              View Openings
            </Button>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-md">
            <Users size={24} className="text-primary mb-2" />
            <h3 className="text-xl font-semibold mb-1 text-foreground">NSS Placements</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
              Coming Soon! Stay tuned for national service opportunities.
            </p>
            <Button variant="link" className="p-0 h-auto text-primary disabled" disabled>
              Details Soon
            </Button>
          </div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto bg-background p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 text-center text-foreground">Apply Now</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Full Name
            </label>
            <Input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Email Address
            </label>
            <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label
              htmlFor="portfolio"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
            >
              Portfolio Link (GitHub, Behance, etc.)
            </label>
            <Input type="url" name="portfolio" id="portfolio" value={formData.portfolio} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Role of Interest
            </label>
            <Select name="role" value={formData.role} onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Why are you interested in Smart Hive Labs? (Optional)
            </label>
            <Textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} />
          </div>
          <Button type="submit" className="w-full" disabled={submissionStatus === "Submitting..."}>
            {submissionStatus === "Submitting..." ? (
              "Submitting..."
            ) : (
              <>
                Submit Application <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
          {submissionStatus && !submissionStatus.includes("Submitting...") && (
            <p className="mt-4 text-center text-sm text-green-600 dark:text-green-400">{submissionStatus}</p>
          )}
        </form>
      </section>
    </div>
  )
}
