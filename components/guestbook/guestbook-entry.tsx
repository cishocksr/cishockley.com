"use client"

import { Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Entry {
  id: string
  name: string
  message: string
  created_at: string
  avatar_url?: string
  user_id: string // ✅ added
}

interface GuestbookEntryProps {
  entry: Entry
  currentUserId?: string
  isAdmin?: boolean
  onDelete?: () => void
}

export function GuestbookEntry({
  entry,
  isAdmin,
  currentUserId, // ✅ now used
  onDelete,
}: GuestbookEntryProps) {
  return (
    <div className="border-b py-4 flex items-start gap-4">
      <div className="flex-shrink-0">
        {entry.avatar_url ? (
          <Image
            src={entry.avatar_url}
            alt={`${entry.name}'s avatar`}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-muted" aria-hidden="true" />
        )}
      </div>
      <div className="flex-1">
        <p className="font-medium">{entry.name}</p>
        <p className="text-sm text-muted-foreground">{entry.message}</p>
        <time
          className="text-xs text-muted-foreground"
          dateTime={entry.created_at}
        >
          {new Date(entry.created_at).toLocaleString()}
        </time>
      </div>
      {(isAdmin || currentUserId === entry.user_id) && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onDelete}
          aria-label={`Delete message from ${entry.name}`}
        >
          <Trash className="w-4 h-4" />
        </Button>
      )}
    </div>
  )
}
