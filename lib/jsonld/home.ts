export function generateWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Chris Shockley",
    url: "https://www.cshockley.com",
    description: "Portfolio site of Chris Shockley, software engineer, philosopher, and veteran.",
    publisher: {
      "@type": "Person",
      name: "Chris Shockley"
    }
  }
}
