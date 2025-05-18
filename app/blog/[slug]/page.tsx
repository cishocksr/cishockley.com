import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/mdx";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { useMDXComponents } from "@/components/mdx-components";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import type { Post } from "@/types";
import { generateBlogPostJsonLd } from "@/lib/jsonld/blog";
import StructuredData from "@/components/structured-data";
import { compilePost } from "@/lib/compile";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Post Not Found",
      description: "This blog post could not be found.",
    };
  }

  const { meta } = post;

  return {
    title: meta.title,
    description: meta.excerpt,
    alternates: {
      canonical: `/blog/${meta.slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.excerpt,
      type: "article",
      publishedTime: meta.date,
      url: `https://www.cshockley.com/blog/${meta.slug}`,
      images: [
        {
          url: meta.image,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.excerpt,
      images: [meta.image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const { meta, content } = post;

  const compiled = await compilePost(content, meta);

  return (
    <article className="container py-12 px-4 max-w-3xl mx-auto prose dark:prose-invert">
      <StructuredData
        data={generateBlogPostJsonLd({ id: meta.slug, ...meta, content })}
      />

      <h1 className="mb-4">{meta.title}</h1>

      <div className="flex items-center text-muted-foreground mb-6 gap-6">
        <div className="flex items-center gap-1 text-sm">
          <Calendar className="h-4 w-4" />
          {meta.date}
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Clock className="h-4 w-4" />
          {meta.readingTime}
        </div>
      </div>

      {meta.image && (
        <div className="relative w-full h-[300px] md:h-[400px] mb-8">
          <Image
            src={meta.image}
            alt={meta.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      {meta.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {meta.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      )}

      {compiled.content}
    </article>
  );
}
