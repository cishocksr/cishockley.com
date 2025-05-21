"use client";

import { usePathname } from "next/navigation";
import { PageWrapper } from "@/components/ui/animation-provider";
import { useEffect } from "react";
import { useAnimation } from "@/components/ui/animation-provider";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const disable = pathname === "/"; // Disable homepage animation
  const { setAnimationComplete } = useAnimation();

  // Mark animation as complete when the page mounts
  useEffect(() => {
    if (disable) {
      setAnimationComplete(true);
    }
  }, [disable, setAnimationComplete]);

  return <PageWrapper disableAnimation={disable}>{children}</PageWrapper>;
}
