import type { MDXComponents } from 'mdx/types';
import Image, { type ImageProps } from 'next/image';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Style headings
    h1: ({ children }) => (
      <h1 className='mb-4 text-4xl font-bold'>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className='mt-8 mb-3 text-3xl font-bold'>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className='mt-6 mb-2 text-2xl font-semibold'>{children}</h3>
    ),

    // Style paragraphs
    p: ({ children }) => (
      <p className='mb-4 leading-7 text-foreground'>{children}</p>
    ),

    // Style links
    a: ({ href, children }) => (
      <Link
        href={href as string}
        className='text-primary hover:underline transition-colors'
      >
        {children}
      </Link>
    ),

    // Use Next.js Image for images
    img: (props) => (
      <Image
        sizes='100vw'
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),

    // Style lists
    ul: ({ children }) => <ul className='mb-4 ml-6 list-disc'>{children}</ul>,
    ol: ({ children }) => (
      <ol className='mb-4 ml-6 list-decimal'>{children}</ol>
    ),
    li: ({ children }) => <li className='mb-1'>{children}</li>,

    // Style code blocks
    code: ({ children }) => (
      <code className='rounded bg-muted px-1 py-0.5 text-sm text-foreground'>
        {children}
      </code>
    ),

    ...components,
  };
}
