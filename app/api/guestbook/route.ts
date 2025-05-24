import { createServerClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

// GET: fetch all guestbook entries
export async function GET() {
  const supabase = createServerClient();

  const { data, error } = await supabase
    .from("guestbook")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// POST: insert a new guestbook entry
export async function POST(req: Request) {
  const supabase = createServerClient();

  // ✅ Make sure all fields are extracted
  const { name, message, avatar_url, user_id } = await req.json();

  const { data, error } = await supabase
    .from("guestbook")
    .insert([{ name, message, avatar_url, user_id }])
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!data || data.length === 0) {
    return NextResponse.json({ error: "Insert succeeded but no data returned" }, { status: 500 });
  }

  return NextResponse.json(data[0]);
}
