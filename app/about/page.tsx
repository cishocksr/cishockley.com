import type { Metadata } from "next";
import AboutPageClient from "./about-client";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Chris Shockley's background, skills, and experience as a software developer and veteran.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Chris Shockley | Software Developer",
    description:
      "Learn about Chris Shockley's background, skills, and experience as a software developer and veteran.",
    url: "/about",
    type: "profile",
    images: [
      {
        url: "/images/profile-photo.jpeg",
        width: 800,
        height: 600,
        alt: "Chris Shockley",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
