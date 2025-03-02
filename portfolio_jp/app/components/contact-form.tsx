"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { submitContactForm } from "../actions"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setPending(true)
    try {
      const response = await submitContactForm(formData)
      setMessage(response.message)
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="p-6 card-hover border-blue-100 dark:border-blue-900">
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-blue-700 dark:text-blue-300">
            Name
          </label>
          <Input id="name" name="name" required className="border-blue-200 focus-visible:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-blue-700 dark:text-blue-300">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="border-blue-200 focus-visible:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-blue-700 dark:text-blue-300">
            Message
          </label>
          <Textarea id="message" name="message" required className="border-blue-200 focus-visible:ring-blue-500" />
        </div>
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {message && <p className="text-sm text-center mt-4 text-blue-600 dark:text-blue-400">{message}</p>}
      </form>
    </Card>
  )
}

