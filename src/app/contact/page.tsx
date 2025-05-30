"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessageSquare, Phone, MapPin, AlertTriangle, Lightbulb, Send } from "lucide-react"
import NewsletterForm from "@/components/newsletter-form"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [issueFormData, setIssueFormData] = useState({
    name: "",
    email: "",
    issueType: "Bug",
    description: "",
  })
  const [formStatus, setFormStatus] = useState<string | null>(null)
  const [issueFormStatus, setIssueFormStatus] = useState<string | null>(null)

  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleIssueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIssueFormData({ ...issueFormData, [e.target.name]: e.target.value })
  }

  const handleIssueTypeChange = (value: string) => {
    setIssueFormData({ ...issueFormData, issueType: value })
  }

  const handleGeneralSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormStatus("Sending...")
    console.log("General contact form:", formData)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setFormStatus("Message sent successfully! We will be in touch.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleIssueSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIssueFormStatus("Submitting...")
    console.log("Issue report form:", issueFormData)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIssueFormStatus("Issue reported successfully. Thank you for your feedback!")
    setIssueFormData({ name: "", email: "", issueType: "Bug", description: "" })
  }

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-foreground">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-16 mb-16">
        {/* General Contact Form */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center">
            <MessageSquare className="mr-3 text-primary" />
            Get in Touch
          </h2>
          <form onSubmit={handleGeneralSubmit} className="space-y-6 bg-background p-8 rounded-lg shadow-xl">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Full Name
              </label>
              <Input type="text" name="name" id="name" value={formData.name} onChange={handleGeneralChange} required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleGeneralChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
              >
                Subject
              </label>
              <Input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleGeneralChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
              >
                Message
              </label>
              <Textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleGeneralChange}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={formStatus === "Sending..."}>
              {formStatus === "Sending..." ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            {formStatus && !formStatus.includes("Sending...") && (
              <p className="mt-4 text-center text-sm text-green-600 dark:text-green-400">{formStatus}</p>
            )}
          </form>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-foreground">Contact Information</h2>
          <div className="space-y-4 text-neutral-700 dark:text-neutral-300 bg-background p-8 rounded-lg shadow-xl">
            <p className="flex items-center">
              <Mail className="mr-3 h-5 w-5 text-primary" />{" "}
              <a href="mailto:info@smarhivelabs.com" className="hover:text-primary">
                info@smarhivelabs.com
              </a>
            </p>
            <p className="flex items-center">
              <Phone className="mr-3 h-5 w-5 text-primary" />{" "}
              <a href="tel:+233000000000" className="hover:text-primary">
                +233 (0)00 000 000 (Placeholder)
              </a>
            </p>
            <p className="flex items-start">
              <MapPin className="mr-3 h-5 w-5 text-primary mt-1" /> Accra, Ghana (Placeholder Address)
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Newsletter</h3>
            <div className="bg-background p-8 rounded-lg shadow-xl">
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                Stay updated on our latest projects & opportunities.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </section>
      </div>

      {/* Issue Reporting Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center text-foreground flex items-center justify-center">
          <AlertTriangle className="mr-3 text-primary" /> Report an Issue or Suggestion
        </h2>
        <form onSubmit={handleIssueSubmit} className="space-y-6 bg-background p-8 rounded-lg shadow-xl">
          <div>
            <label
              htmlFor="issueName"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
            >
              Your Name
            </label>
            <Input
              type="text"
              name="name"
              id="issueName"
              value={issueFormData.name}
              onChange={handleIssueChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="issueEmail"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
            >
              Your Email
            </label>
            <Input
              type="email"
              name="email"
              id="issueEmail"
              value={issueFormData.email}
              onChange={handleIssueChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="issueType"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
            >
              Type
            </label>
            <Select name="issueType" value={issueFormData.issueType} onValueChange={handleIssueTypeChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Bug">
                  Bug Report <AlertTriangle className="inline ml-1 h-4 w-4 text-red-500" />
                </SelectItem>
                <SelectItem value="Suggestion">
                  Suggestion / Feedback <Lightbulb className="inline ml-1 h-4 w-4 text-yellow-500" />
                </SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label
              htmlFor="issueDescription"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
            >
              Description
            </label>
            <Textarea
              name="description"
              id="issueDescription"
              rows={5}
              value={issueFormData.description}
              onChange={handleIssueChange}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={issueFormStatus === "Submitting..."}>
            {issueFormStatus === "Submitting..." ? (
              "Submitting..."
            ) : (
              <>
                Submit Report <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
          {issueFormStatus && !issueFormStatus.includes("Submitting...") && (
            <p className="mt-4 text-center text-sm text-green-600 dark:text-green-400">{issueFormStatus}</p>
          )}
        </form>
      </section>
    </div>
  )
}
