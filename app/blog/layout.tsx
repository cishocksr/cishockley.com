export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <section>{children}</section>
      </body>
    </html>
  );
}
