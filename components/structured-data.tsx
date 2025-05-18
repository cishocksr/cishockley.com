"use client";

import Script from "next/script";

export default function StructuredData({ data }: { data: object }) {
  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
