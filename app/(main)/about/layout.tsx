export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container-section max-w-4xl py-12">
      <article className="prose prose-zinc dark:prose-invert lg:prose-xl">
        {children}
      </article>
    </div>
  );
}
