import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guestbook | Developer Portfolio",
  description: "Sign my guestbook and leave a message!",
};

export default function GuestbookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
