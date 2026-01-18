export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <article className="prose prose-zinc dark:prose-invert lg:prose-xl">
        {children}
      </article>
    </div>
  );
}
