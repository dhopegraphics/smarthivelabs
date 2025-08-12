"use client";

import type React from "react";
import { useState, type FormEvent, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Handshake,
  Building,
  User,
  Palette,
  Zap,
  Mail,
  Lightbulb,
  Rocket,
  Star,
  CheckCircle,
  Users,
  Clock,
  Target,
  Award,
  ArrowRight,
  Sparkles,
  DollarSign,
} from "lucide-react";

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
];

export default function HireUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "", // Optional
    service: "",
    projectDetails: "",
    budget: "", // Optional, could be a range or specific
  });
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmissionStatus("Sending inquiry...");

    try {
      // Create form data with Google Forms field names
      const formDataEncoded = new URLSearchParams();

      // Add your fields - REPLACE THESE WITH YOUR ACTUAL FIELD NAMES
      formDataEncoded.append("entry.2037285691", formData.name); // Name field
      formDataEncoded.append("entry.1492959357", formData.email); // Email field
      formDataEncoded.append("entry.1356979553", formData.company); // Company field
      formDataEncoded.append("entry.1614785805", formData.service); // Service field
      formDataEncoded.append("entry.2139609860", formData.projectDetails); // Project details
      formDataEncoded.append("entry.754821484", formData.budget); // Budget field

      // Submit to Google Forms
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdEgbgVi4Fhpg4Fd82_DLG8V-cbVo9mhvwDzUJYnzpxWnmE8Q/formResponse",
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
        "Your inquiry has been sent! We will contact you shortly."
      );
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        projectDetails: "",
        budget: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus(
        "There was an error sending your inquiry. Please try again later."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 shadow-lg">
                <Handshake className="h-12 w-12 text-white animate-pulse" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Let&apos;s Build{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your vision into reality? Smart Hive Labs
              delivers expert solutions that exceed expectations. Let&apos;s
              start building something amazing!
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Award className="h-4 w-4 mr-2 text-yellow-300" />
                Expert Team
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Clock className="h-4 w-4 mr-2 text-green-300" />
                Quick Turnaround
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Target className="h-4 w-4 mr-2 text-red-300" />
                Goal-Oriented
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Project Inquiry Form */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-3xl p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="bg-primary rounded-full p-4">
                  <Rocket className="h-10 w-10 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Start Your Project
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Tell us about your project and let&apos;s discuss how we can
                bring your vision to life
              </p>
            </div>

            <iframe
              name="hidden_iframe"
              id="hidden_iframe"
              className="hidden"
            ></iframe>
            <form
              ref={formRef}
              action="https://docs.google.com/forms/d/e/1FAIpQLSdEgbgVi4Fhpg4Fd82_DLG8V-cbVo9mhvwDzUJYnzpxWnmE8Q/formResponse"
              method="POST"
              target="_blank"
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-foreground mb-3"
                  >
                    <User className="h-4 w-4 inline mr-2 text-primary" />
                    Your Name / Contact Person
                  </label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                    placeholder="e.g., John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-foreground mb-3"
                  >
                    <Mail className="h-4 w-4 inline mr-2 text-primary" />
                    Your Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-bold text-foreground mb-3"
                >
                  <Building className="h-4 w-4 inline mr-2 text-primary" />
                  Company Name (Optional)
                </label>
                <Input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                  placeholder="e.g., Acme Corp"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-bold text-foreground mb-3"
                >
                  <Zap className="h-4 w-4 inline mr-2 text-primary" />
                  Service Needed
                </label>
                <Select
                  name="service"
                  value={formData.service}
                  onValueChange={(value) =>
                    handleSelectChange("service", value)
                  }
                >
                  <SelectTrigger className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary">
                    <SelectValue placeholder="Select a service category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
                    {serviceCategories.map((service) => (
                      <SelectItem
                        key={service}
                        value={service}
                        className="text-foreground hover:bg-primary/10 focus:bg-primary/10"
                      >
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor="projectDetails"
                  className="block text-sm font-bold text-foreground mb-3"
                >
                  <Lightbulb className="h-4 w-4 inline mr-2 text-primary" />
                  Tell us about your project
                </label>
                <Textarea
                  name="projectDetails"
                  id="projectDetails"
                  rows={6}
                  value={formData.projectDetails}
                  onChange={handleChange}
                  className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                  placeholder="Describe your project requirements, goals, timeline, and any specific features you need..."
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-bold text-foreground mb-3"
                >
                  <DollarSign className="h-4 w-4 inline mr-2 text-primary" />
                  Estimated Budget (Optional)
                </label>
                <Input
                  type="text"
                  name="budget"
                  id="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                  placeholder="e.g., $500 - $1000, or specific amount"
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 font-semibold px-12 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  disabled={submissionStatus === "Sending inquiry..."}
                >
                  {submissionStatus === "Sending inquiry..." ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Send Project Inquiry
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>

              {submissionStatus &&
                !submissionStatus.includes("Sending inquiry...") && (
                  <div className="text-center">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="text-green-700 font-medium">
                        {submissionStatus}
                      </p>
                    </div>
                  </div>
                )}
            </form>
          </div>
        </section>

        {/* Why Partner Section */}
        <section>
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Partner with Smart Hive Labs?
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We don&apos;t just deliver projects - we build lasting
              partnerships and create solutions that drive real business
              results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="bg-blue-100 rounded-xl p-4 w-fit mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Palette className="h-10 w-10 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4 text-center">
                Creative Expertise
              </h4>
              <p className="text-muted-foreground text-center leading-relaxed">
                Innovative designs and solutions tailored to your brand
                identity. We bring creativity and technical excellence together.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="bg-purple-100 rounded-xl p-4 w-fit mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Zap className="h-10 w-10 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4 text-center">
                Technical Prowess
              </h4>
              <p className="text-muted-foreground text-center leading-relaxed">
                Utilizing cutting-edge technologies and best practices for
                robust, scalable, and future-proof solutions.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="bg-green-100 rounded-xl p-4 w-fit mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4 text-center">
                Collaborative Process
              </h4>
              <p className="text-muted-foreground text-center leading-relaxed">
                We work closely with you every step of the way, ensuring clear
                communication and your vision comes to life.
              </p>
            </div>
          </div>

          {/* Additional CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <Sparkles className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
                Join hundreds of satisfied clients who have transformed their
                businesses with Smart Hive Labs. Your success story starts here!
              </p>

              <div className="flex flex-wrap justify-center gap-8 text-sm mb-8">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <Star className="h-4 w-4 mr-2 text-yellow-300" />
                  5-Star Reviews
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <Clock className="h-4 w-4 mr-2 text-green-300" />
                  Fast Delivery
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <Award className="h-4 w-4 mr-2 text-blue-300" />
                  Award-Winning Team
                </div>
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
