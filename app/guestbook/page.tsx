"use client"

import { useEffect, useState } from "react"
import { createBrowserClient } from "@/lib/supabase"
import GuestbookForm from "@/components/guestbook/guestbook-form"
import { GuestbookEntry } from "@/components/guestbook/guestbook-entry"
import AuthButton from "@/components/guestbook/auth-button"

const supabase = createBrowserClient()
const ADMIN_UID = process.env.NEXT_PUBLIC_ADMIN_UID

export default function GuestbookPage() {
  const [user, setUser] = useState<any>(null)
  const [entries, setEntries] = useState<any[]>([])

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
    }

    fetchUser()

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null)
      }
    )

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    const fetchEntries = async () => {
      const { data, error } = await supabase
        .from("guestbook")
        .select("id, name, message, created_at, avatar_url, user_id")
        .order("created_at", { ascending: false })

      if (!error && data) setEntries(data)
    }

    fetchEntries()
  }, [])

  const handleSubmit = async (message: string) => {
    if (!user) throw new Error("User not authenticated")

    const { error: insertError } = await supabase.from("guestbook").insert([
      {
        user_id: user.id,
        name: user.user_metadata.full_name || user.email,
        avatar_url: user.user_metadata.avatar_url,
        message,
      },
    ])

    if (insertError) {
      throw new Error(insertError.message || "Failed to post message.")
    }

    const { data, error: fetchError } = await supabase
      .from("guestbook")
      .select("id, name, message, created_at, avatar_url, user_id")
      .order("created_at", { ascending: false })

    if (fetchError) {
      throw new Error(fetchError.message || "Failed to refresh guestbook.")
    }

    setEntries(data)
  }

  const handleDelete = async (id: string, entryUserId: string) => {
    if (!user) return

    const isAdmin = user.id === ADMIN_UID
    const isOwner = user.id === entryUserId

    if (!isAdmin && !isOwner) {
      alert("You can only delete your own messages.")
      return
    }

    const { error } = await supabase.from("guestbook").delete().eq("id", id)

    if (!error) {
      setEntries(entries.filter((entry) => entry.id !== id))
    } else {
      console.error("Delete error:", error.message)
      alert("Failed to delete message.")
    }
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-serif font-bold mb-6">Guestbook</h1>

      <AuthButton />

      {user ? (
        <GuestbookForm user={user} onSubmit={handleSubmit} />
      ) : (
        <p className="text-muted-foreground">
          Please log in to sign the guestbook.
        </p>
      )}

      <div className="mt-10 space-y-6">
        {entries.map((entry) => (
          <GuestbookEntry
            key={entry.id}
            entry={entry}
            currentUserId={user?.id}
            isAdmin={user?.id === ADMIN_UID}
            onDelete={() => handleDelete(entry.id, entry.user_id)}
          />
        ))}
      </div>
    </div>
  )
}
