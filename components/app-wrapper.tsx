"use client";

import { usePathname } from "next/navigation";
import { PageWrapper } from "@/components/ui/animation-provider";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Disable animation for the homepage (optional)
  const disable = pathname === "/";

  return <PageWrapper disableAnimation={disable}>{children}</PageWrapper>;
}
