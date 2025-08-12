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
  Send,
  Users,
  Rocket,
  Star,
  Heart,
  CheckCircle,
  Sparkles,
  UserPlus,
} from "lucide-react";
import { careerOpportunities } from "../../data/careerOpportunities";
import { OpportunityCard } from "../../components/career/OpportunityCard";

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
];

export default function CareersClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    role: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, role: value });
  };

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 shadow-lg">
                <UserPlus className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Join Our{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Join our innovative team at Smart Hive Labs! We&apos;re looking
              for passionate individuals to grow with us and shape the future of
              technology
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Star className="h-4 w-4 mr-2 text-yellow-300" />
                Career Growth
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Heart className="h-4 w-4 mr-2 text-red-300" />
                Great Culture
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Rocket className="h-4 w-4 mr-2 text-green-300" />
                Innovation Focus
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
        {/* Current Opportunities Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Current Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover exciting roles where you can make a real impact and grow
              your career
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerOpportunities.map((opportunity, index) => (
              <div
                key={opportunity.id}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <OpportunityCard opportunity={opportunity} />
              </div>
            ))}
          </div>
        </section>

        {/* Application Form Section */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-3xl p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="bg-primary rounded-full p-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Ready to Apply?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Take the first step towards an exciting career with Smart Hive
                Labs. We&apos;d love to hear from you!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
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
                    onChange={handleChange}
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
                    <CheckCircle className="h-4 w-4 inline mr-2 text-primary" />
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="portfolio"
                  className="block text-sm font-bold text-foreground mb-3"
                >
                  <Sparkles className="h-4 w-4 inline mr-2 text-primary" />
                  Portfolio Link (GitHub, Behance, etc.)
                </label>
                <Input
                  type="url"
                  name="portfolio"
                  id="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                  placeholder="https://github.com/yourname or https://behance.net/yourname"
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-bold text-foreground mb-3"
                >
                  <Star className="h-4 w-4 inline mr-2 text-primary" />
                  Role of Interest
                </label>
                <Select
                  name="role"
                  value={formData.role}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary">
                    <SelectValue placeholder="Select a role that interests you" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
                    {roles.map((role) => (
                      <SelectItem
                        key={role}
                        value={role}
                        className="text-foreground hover:bg-primary/10 focus:bg-primary/10"
                      >
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-foreground mb-3"
                >
                  <Heart className="h-4 w-4 inline mr-2 text-primary" />
                  Why are you interested in Smart Hive Labs? (Optional)
                </label>
                <Textarea
                  name="message"
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                  placeholder="Tell us what excites you about joining our team..."
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 font-semibold px-12 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  disabled={submissionStatus === "Submitting..."}
                >
                  {submissionStatus === "Submitting..." ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>

              {submissionStatus &&
                !submissionStatus.includes("Submitting...") && (
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

        {/* Why Join Us Section */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <Rocket className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Why Smart Hive Labs?
              </h3>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
                Join a team that values innovation, creativity, and personal
                growth. Build the future of technology with us!
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Star className="h-8 w-8 text-yellow-300 mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">
                    Growth Opportunities
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Continuous learning and career advancement in cutting-edge
                    technologies
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Heart className="h-8 w-8 text-red-300 mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">Amazing Culture</h4>
                  <p className="text-blue-100 text-sm">
                    Collaborative environment where creativity and innovation
                    thrive
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Rocket className="h-8 w-8 text-green-300 mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">Impactful Projects</h4>
                  <p className="text-blue-100 text-sm">
                    Work on meaningful projects that make a real difference
                  </p>
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
