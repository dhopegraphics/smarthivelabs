"use client";

import type React from "react";

import { useState, type FormEvent } from "react";
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
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  AlertTriangle,
  Send,
  Users,
  Clock,
  CheckCircle,
  Star,
  Globe,
  HeadphonesIcon,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import NewsletterForm from "@/components/newsletter-form";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [issueFormData, setIssueFormData] = useState({
    name: "",
    email: "",
    issueType: "Bug",
    description: "",
  });
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [issueFormStatus, setIssueFormStatus] = useState<string | null>(null);

  const handleGeneralChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleIssueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIssueFormData({ ...issueFormData, [e.target.name]: e.target.value });
  };

  const handleIssueTypeChange = (value: string) => {
    setIssueFormData({ ...issueFormData, issueType: value });
  };

  const handleGeneralSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("Sending...");

    try {
      // Create form data with Google Forms field names
      const formDataEncoded = new URLSearchParams();

      // Add your fields - REPLACE THESE WITH YOUR ACTUAL FIELD NAMES
      formDataEncoded.append("entry.492654800", formData.name); // Name field
      formDataEncoded.append("entry.436969293", formData.email); // Email field
      formDataEncoded.append("entry.138659123", formData.subject); // Company field
      formDataEncoded.append("entry.6561659", formData.message); // Service field

      // Submit to Google Forms
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSc0V8oI1MlYk036_AQaJ1ydpuaXVG4ar5NdMPlcsPMx_8IcNw/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formDataEncoded,
        }
      );

      setFormStatus("Message sent successfully! We will be in touch.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus(
        "There was an error sending your inquiry. Please try again later."
      );
    }
  };

  const handleIssueSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIssueFormStatus("Submitting...");

    try {
      // Create form data with Google Forms field names
      const formDataEncoded = new URLSearchParams();

      // Add your fields - REPLACE THESE WITH YOUR ACTUAL FIELD NAMES
      formDataEncoded.append("entry.833558056", issueFormData.name); // Name field
      formDataEncoded.append("entry.777662989", issueFormData.email); // Email field
      formDataEncoded.append("entry.1019693634", issueFormData.issueType); // Company field
      formDataEncoded.append("entry.1332607264", issueFormData.description); // Service field

      // Submit to Google Forms
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScBOe6fOwwlIMAwBc1O-1tc4DztLZsRjgEMnY9GxP_m0qpROw/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formDataEncoded,
        }
      );

      setIssueFormStatus(
        "Issue reported successfully. Thank you for your feedback!"
      );
      setIssueFormData({ name: "", email: "", issueType: "", description: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setIssueFormStatus(
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
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 shadow-lg animate-bounce">
                <MessageSquare className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Get In{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Ready to bring your vision to life? We&apos;re here to help you
              build something amazing. Let&apos;s start the conversation!
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Clock className="h-4 w-4 mr-2 text-green-300" />
                Quick Response
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Users className="h-4 w-4 mr-2 text-blue-300" />
                Expert Team
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Globe className="h-4 w-4 mr-2 text-purple-300" />
                Global Reach
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
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* General Contact Form */}
          <section>
            <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-12 shadow-2xl border border-gray-100">
              <div className="text-center mb-10">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary rounded-full p-4">
                    <Send className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Send us a Message
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Have a project in mind? We&apos;d love to hear about it!
                </p>
              </div>

              <iframe
                name="hidden_iframe"
                id="hidden_iframe"
                className="hidden"
              ></iframe>
              <form onSubmit={handleGeneralSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-foreground mb-3"
                    >
                      <CheckCircle className="h-4 w-4 inline mr-2 text-primary" />
                      Full Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleGeneralChange}
                      className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-foreground mb-3"
                    >
                      <Mail className="h-4 w-4 inline mr-2 text-primary" />
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleGeneralChange}
                      className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-foreground mb-3"
                  >
                    <Star className="h-4 w-4 inline mr-2 text-primary" />
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleGeneralChange}
                    className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-foreground mb-3"
                  >
                    <MessageSquare className="h-4 w-4 inline mr-2 text-primary" />
                    Message
                  </label>
                  <Textarea
                    name="message"
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleGeneralChange}
                    className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary hover:bg-primary/90 font-semibold px-12 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    disabled={formStatus === "Sending..."}
                  >
                    {formStatus === "Sending..." ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>

                {formStatus && !formStatus.includes("Sending...") && (
                  <div className="text-center">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="text-green-700 font-medium">{formStatus}</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </section>

          {/* Contact Information & Newsletter */}
          <section className="space-y-8">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="bg-indigo-600 rounded-full p-3">
                    <HeadphonesIcon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  Contact Information
                </h3>
                <p className="text-muted-foreground">
                  Get in touch through any of these channels
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center bg-white/50 rounded-xl p-4 hover:bg-white/80 transition-colors">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:support@smarhivelabs.dev"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      support@smarhivelabs.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-center bg-white/50 rounded-xl p-4 hover:bg-white/80 transition-colors">
                  <div className="bg-green-100 rounded-lg p-3 mr-4">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a
                      href="tel:+233000000000"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      +233 (0)59 795 9032
                    </a>
                  </div>
                </div>

                <div className="flex items-start bg-white/50 rounded-xl p-4 hover:bg-white/80 transition-colors">
                  <div className="bg-purple-100 rounded-lg p-3 mr-4 mt-1">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Prestea, Ghana</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-yellow-50 via-white to-orange-50 rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-orange-500 rounded-full p-3">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground">
                  Get the latest updates on our projects & opportunities
                </p>
              </div>
              <NewsletterForm />
            </div>
          </section>
        </div>

        {/* Issue Reporting Section */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-red-50 via-white to-pink-50 rounded-3xl p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="bg-red-500 rounded-full p-4">
                  <AlertTriangle className="h-10 w-10 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Report an Issue
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Found a bug or have a suggestion? We appreciate your feedback
                and will address it promptly.
              </p>
            </div>

            <form onSubmit={handleIssueSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="issueName"
                    className="block text-sm font-bold text-foreground mb-3"
                  >
                    <CheckCircle className="h-4 w-4 inline mr-2 text-primary" />
                    Your Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    id="issueName"
                    value={issueFormData.name}
                    onChange={handleIssueChange}
                    className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="issueEmail"
                    className="block text-sm font-bold text-foreground mb-3"
                  >
                    <Mail className="h-4 w-4 inline mr-2 text-primary" />
                    Your Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    id="issueEmail"
                    value={issueFormData.email}
                    onChange={handleIssueChange}
                    className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="issueType"
                  className="block text-sm font-bold text-foreground mb-3"
                >
                  <Star className="h-4 w-4 inline mr-2 text-primary" />
                  Issue Type
                </label>
                <Select
                  name="issueType"
                  value={issueFormData.issueType}
                  onValueChange={handleIssueTypeChange}
                >
                  <SelectTrigger className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary">
                    <SelectValue placeholder="Select issue type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
                    <SelectItem
                      value="Bug"
                      className="text-foreground hover:bg-red-50 focus:bg-red-50"
                    >
                      🐛 Bug Report
                    </SelectItem>
                    <SelectItem
                      value="Suggestion"
                      className="text-foreground hover:bg-yellow-50 focus:bg-yellow-50"
                    >
                      💡 Suggestion / Feedback
                    </SelectItem>
                    <SelectItem
                      value="Other"
                      className="text-foreground hover:bg-blue-50 focus:bg-blue-50"
                    >
                      📝 Other
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor="issueDescription"
                  className="block text-sm font-bold text-foreground mb-3"
                >
                  <MessageSquare className="h-4 w-4 inline mr-2 text-primary" />
                  Description
                </label>
                <Textarea
                  name="description"
                  id="issueDescription"
                  rows={6}
                  value={issueFormData.description}
                  onChange={handleIssueChange}
                  className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                  placeholder="Please describe the issue or suggestion in detail..."
                  required
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 font-semibold px-12 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-white"
                  disabled={issueFormStatus === "Submitting..."}
                >
                  {issueFormStatus === "Submitting..." ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Report
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>

              {issueFormStatus &&
                !issueFormStatus.includes("Submitting...") && (
                  <div className="text-center">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="text-green-700 font-medium">
                        {issueFormStatus}
                      </p>
                    </div>
                  </div>
                )}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
