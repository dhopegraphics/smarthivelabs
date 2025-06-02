"use client" 
import type React from "react"
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea" 
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {  Send } from "lucide-react"
import { careerOpportunities } from "../../data/careerOpportunities"
import { OpportunityCard } from "../../components/career/OpportunityCard"

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
      e.preventDefault();
      setSubmissionStatus("Submitting...");
  
      try {
        // Create form data with Google Forms field names
        const formDataEncoded = new URLSearchParams();
  
        // Add your fields - REPLACE THESE WITH YOUR ACTUAL FIELD NAMES
        formDataEncoded.append("entry.796427824", formData.name); // Name field
        formDataEncoded.append("entry.165884916", formData.email); // Email field
        formDataEncoded.append("entry.1272083731", formData.portfolio); // Company field
        formDataEncoded.append("entry.1129857883", formData.role); // Service field
        formDataEncoded.append("entry.1113827624", formData.message); // Budget field
  
        // Submit to Google Forms
        await fetch(
          "https://docs.google.com/forms/d/e/1FAIpQLSedblbE_xYnh__yxeHERfXDnk8ctwASzMFHqvawYj2IvJ6xyQ/formResponse",
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formDataEncoded,
          }
        );
  
        setSubmissionStatus(
          "Application submitted successfully! We will get back to you soon."
        );
        setFormData({
          name: "",
          email: "",
          portfolio: "",
          role: "",
          message: "",
         
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmissionStatus(
          "There was an error sending your Application. Please try again later."
        );
      }
    };

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-foreground">Careers & Internships</h1>
      <p className="text-lg text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
        Join our innovative team at Smart Hive Labs! We&apos;re looking for passionate individuals to grow with us.
      </p>

     <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center text-foreground">Current Opportunities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity}  />
          ))}
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
              <SelectContent className="bg-slate-900/90" >
                {roles.map((role) => (
                  <SelectItem key={role} value={role} className="text-neutral-300 hover:bg-blue-500">
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
          <Button type="submit" className="w-full transition-all duration-300 hover:text-blue-600 hover:scale-105 hover:shadow-xl " disabled={submissionStatus === "Submitting..."}>
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
