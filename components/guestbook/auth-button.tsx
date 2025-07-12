"use client"

import { useEffect, useState } from "react"
import { createBrowserClient } from "@/lib/supabase"
import { Button } from "@/components/ui/button"

const supabase = createBrowserClient()

export default function AuthButton() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const login = (provider: "google" | "github") => {
    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${location.origin}/guestbook`,
      },
    })
  }

  const logout = () => supabase.auth.signOut()

  return (
    <div className="mb-6">
      {user ? (
        <div className="space-y-2">
          <p className="text-muted-foreground">
            Signed in as <strong>{user.email}</strong>
          </p>
          <Button variant="secondary" onClick={logout}>
            Log out
          </Button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Button variant="outline" onClick={() => login("google")}>
            Sign in with Google
          </Button>
          <Button variant="outline" onClick={() => login("github")}>
            Sign in with GitHub
          </Button>
        </div>
      )}
    </div>
  )
}
