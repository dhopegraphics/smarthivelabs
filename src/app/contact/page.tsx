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
  Lightbulb,
  Send,
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
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-16 mb-16">
        {/* General Contact Form */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 flex items-center">
            <MessageSquare className="mr-3 text-primary" />
            Get in Touch
          </h2>
          <iframe
            name="hidden_iframe"
            id="hidden_iframe"
            className="hidden"
          ></iframe>
          <form
            onSubmit={handleGeneralSubmit}
            className="space-y-6 bg-white p-8 rounded-lg shadow-xl"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleGeneralChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
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
                className="block text-sm font-medium text-gray-700 mb-1"
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
                className="block text-sm font-medium text-gray-700 mb-1"
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
            <Button
              type="submit"
              className="w-full text-lg py-3 hover:bg-blue-600 hover:bg-blue-600 hover:text-white"
              disabled={formStatus === "Sending..."}
            >
              {formStatus === "Sending..." ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            {formStatus && !formStatus.includes("Sending...") && (
              <p className="mt-4 text-center text-sm text-green-600 text-green-600">
                {formStatus}
              </p>
            )}
          </form>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
            Contact Information
          </h2>
          <div className="space-y-4 text-gray-700 bg-white p-8 rounded-lg shadow-xl">
            <p className="flex items-center">
              <Mail className="mr-3 h-5 w-5 text-primary" />{" "}
              <a
                href="mailto:info@smarhivelabs.com"
                className="hover:text-primary"
              >
                support@smarhivelabs.dev
              </a>
            </p>
            <p className="flex items-center">
              <Phone className="mr-3 h-5 w-5 text-primary" />{" "}
              <a href="tel:+233000000000" className="hover:text-primary">
                +233 (0)59 795 9032
              </a>
            </p>
            <p className="flex items-start">
              <MapPin className="mr-3 h-5 w-5 text-primary mt-1" /> Prestea,
              Ghana
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Newsletter
            </h3>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <p className="text-gray-600 mb-4">
                Stay updated on our latest projects & opportunities.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </section>
      </div>

      {/* Issue Reporting Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900 flex items-center justify-center">
          <AlertTriangle className="mr-3 text-primary" /> Report an Issue or
          Suggestion
        </h2>
        <form
          onSubmit={handleIssueSubmit}
          className="space-y-6 bg-white p-8 rounded-lg shadow-xl"
        >
          <div>
            <label
              htmlFor="issueName"
              className="block text-sm font-medium text-gray-700 mb-1"
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
              className="block text-sm font-medium text-gray-700 mb-1"
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
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Type
            </label>
            <Select
              name="issueType"
              value={issueFormData.issueType}
              onValueChange={handleIssueTypeChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Bug">
                  Bug Report{" "}
                  <AlertTriangle className="inline ml-1 h-4 w-4 text-red-500" />
                </SelectItem>
                <SelectItem value="Suggestion">
                  Suggestion / Feedback{" "}
                  <Lightbulb className="inline ml-1 h-4 w-4 text-yellow-500" />
                </SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label
              htmlFor="issueDescription"
              className="block text-sm font-medium text-gray-700 mb-1"
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
          <Button
            type="submit"
            className="w-full text-lg py-3 hover:bg-blue-600 hover:bg-blue-600 hover:text-white"
            disabled={issueFormStatus === "Submitting..."}
          >
            {issueFormStatus === "Submitting..." ? (
              "Submitting..."
            ) : (
              <>
                Submit Report <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
          {issueFormStatus && !issueFormStatus.includes("Submitting...") && (
            <p className="mt-4 text-center text-sm text-green-600 text-green-600">
              {issueFormStatus}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
