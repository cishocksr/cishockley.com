export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chris Shockley",
    url: "https://www.cshockley.com",
    image: "https://www.cshockley.com/images/profile-photo.jpeg",
    sameAs: [
      "https://github.com/chrisshockley",
      "https://linkedin.com/in/chrisshockley"
    ],
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Independent"
    }
  }
}
