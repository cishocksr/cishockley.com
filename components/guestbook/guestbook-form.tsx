"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface GuestbookFormProps {
  user: any
  onSubmit: (message: string) => Promise<void>
}

export function GuestbookForm({ user, onSubmit }: GuestbookFormProps) {
  const [error, setError] = useState<string | null>(null)

  const [message, setMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setSubmitting(true)
    setError(null)

    try {
      await onSubmit(message)
      setMessage("")
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-label="Guestbook form"
    >
      <div>
        <label htmlFor="message" className="sr-only">
          Leave a message
        </label>
        <textarea
          id="message"
          name="message"
          aria-label="Message text area"
          className="w-full p-2 border rounded-md bg-background text-foreground"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={submitting}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
      <Button type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : "Sign Guestbook"}
      </Button>
    </form>
  )
}
