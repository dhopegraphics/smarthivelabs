"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" // Assuming shadcn/ui input is available
import { Mail } from "lucide-react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")



      const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setMessage("Submitting...");
  
      try {
        // Create form data with Google Forms field names
        const formDataEncoded = new URLSearchParams();
  
        // Add your fields - REPLACE THESE WITH YOUR ACTUAL FIELD NAMES
        formDataEncoded.append("entry.1487033616", email); // Name field
    
       
        // Submit to Google Forms
        await fetch(
          "https://docs.google.com/forms/d/e/1FAIpQLSeRGOcFmYK6zLICXIYxr_Ko7-qc1jICVa-_thT2bpAEiaDvRA/formResponse",
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formDataEncoded,
          }
        );
  
        setMessage(
          "Issue reported successfully. Thank you for your feedback!"
        );
           setEmail("")
      } catch (error) {
        console.error("Error submitting form:", error);
        setMessage(
          "There was an error sending your inquiry. Please try again later."
        );
      }
    };


  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-grow">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 w-full" // Added w-full for responsiveness
            aria-label="Email for newsletter"
          />
        </div>
        <Button type="submit" className="w-full sm:w-auto">
          Subscribe
        </Button>
      </div>
      {message && (
        <p className={`mt-2 text-sm ${message.includes("Thank you") ? "text-green-600" : "text-red-600"}`}>{message}</p>
      )}
    </form>
  )
}
