"use client";

import { useEffect, useState } from "react";
import { PageWrapper } from "@/components/ui/animation-provider";
import { Button } from "@/components/ui/button";
import { createBrowserClient } from "@/lib/supabase";
import AuthButton from "@/components/auth-button";

type Entry = {
  id: string;
  name: string;
  message: string;
  avatar_url?: string;
  created_at: string;
  user_id: string;
};

const supabase = createBrowserClient();

const ADMIN_UID = process.env.NEXT_PUBLIC_ADMIN_UID as string;

export default function GuestbookPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [user, setUser] = useState<any>(null);

  // Load session + guestbook entries
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    supabase
      .from("guestbook")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => setEntries(data || []));

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return alert("You must be signed in to leave a message.");

    setSubmitting(true);

    const res = await fetch("/api/guestbook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        message,
        avatar_url: avatarUrl,
        user_id: user.id,
      }),
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({ error: "Unknown error" }));
      console.error("Failed to submit:", error);
      alert("Error submitting your message: " + error.error);
      setSubmitting(false);
      return;
    }

    setName("");
    setMessage("");
    setAvatarUrl("");

    // ✅ Now safely fetch updated entries
    const entriesRes = await fetch("/api/guestbook");
    const data = await entriesRes.json();
    setEntries(data);

    setSubmitting(false);
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this message?"
    );
    if (!confirm) return;

    await fetch("/api/guestbook", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  };

  return (
    <PageWrapper>
      <div className="container py-12 px-4">
        <h1 className="text-4xl font-serif font-bold mb-6 text-charcoal dark:text-foreground">
          Guestbook
        </h1>

        <div className="max-w-3xl mx-auto">
          <AuthButton />

          {/* Form */}
          {user && (
            <form onSubmit={handleSubmit} className="space-y-4 mb-12">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border rounded px-4 py-2 bg-background text-foreground"
              />
              <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full border rounded px-4 py-2 bg-background text-foreground"
              />
              <input
                type="url"
                placeholder="Optional avatar URL"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
                className="w-full border rounded px-4 py-2 bg-background text-foreground"
              />
              <Button type="submit" disabled={submitting}>
                {submitting ? "Submitting..." : "Sign Guestbook"}
              </Button>
            </form>
          )}

          {/* Guestbook Entries */}
          <h2 className="text-2xl font-serif font-bold mb-6 text-charcoal dark:text-foreground">
            Recent Messages
          </h2>

          <div className="space-y-4">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="border rounded p-4 bg-card flex gap-4 items-start justify-between"
              >
                <div className="flex gap-4">
                  {entry.avatar_url ? (
                    <img
                      src={entry.avatar_url}
                      alt={`${entry.name}'s avatar`}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-sm">
                      {entry.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{entry.name}</p>
                    <p>{entry.message}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {new Date(entry.created_at).toLocaleString()}
                    </p>
                  </div>
                </div>

                {user?.id === ADMIN_UID && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(entry.id)}
                  >
                    Delete
                  </Button>
                )}
              </div>
            ))}
            {entries.length === 0 && (
              <p className="text-muted-foreground">No messages yet.</p>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
