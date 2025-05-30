"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" // Assuming shadcn/ui input is available
import { Mail } from "lucide-react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage("") // Clear previous messages

    if (!email) {
      setMessage("Please enter your email address.")
      return
    }

    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.")
      return
    }

    // In a real app, you'd send this to your backend/newsletter service
    console.log("Subscribing email:", email)
    setMessage("Thank you for subscribing!")
    setEmail("")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // setMessage('Subscription successful! Check your email to confirm.'); // Example success
    // setMessage('Oops! Something went wrong. Please try again.'); // Example error
  }

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
