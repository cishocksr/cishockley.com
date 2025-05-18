import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Typography elements
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          "mt-12 mb-6 text-4xl font-extrabold tracking-tight lg:text-5xl",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          "mt-10 mb-4 text-3xl font-bold tracking-tight",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn("mt-8 mb-4 text-2xl font-bold", className)}
        {...props}
      />
    ),
    h4: ({ className, ...props }) => (
      <h4 className={cn("mt-6 mb-2 text-xl font-bold", className)} {...props} />
    ),
    p: ({ className, ...props }) => (
      <p className={cn("leading-7 mb-4 text-base", className)} {...props} />
    ),
    a: ({ className, ...props }) => (
      <Link
        className={cn(
          "font-medium text-primary underline underline-offset-4 hover:text-primary/80",
          className
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }) => (
      <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
      <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
    ),
    li: ({ className, ...props }) => (
      <li className={cn("mt-2", className)} {...props} />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn("mt-6 border-l-4 border-primary pl-6 italic", className)}
        {...props}
      />
    ),
    img: ({ className, alt, ...props }) => (
      <div className="my-8 overflow-hidden rounded-lg">
        <Image
          className={cn("w-full", className)}
          alt={alt || ""}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 66vw"
          {...props}
        />
      </div>
    ),
    hr: ({ ...props }) => <hr className="my-8 border-border" {...props} />,
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className={cn("w-full", className)} {...props} />
      </div>
    ),
    tr: ({ className, ...props }) => (
      <tr
        className={cn(
          "m-0 border-t border-border p-0 even:bg-muted",
          className
        )}
        {...props}
      />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          "border border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn(
          "border border-border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          "mb-4 mt-6 overflow-x-auto rounded-lg bg-black py-4",
          className
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <code
        className={cn(
          "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
          className
        )}
        {...props}
      />
    ),
    ...components,
  };
}
