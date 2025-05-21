import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
import AppWrapper from "@/components/app-wrapper";
import { AnimationProvider } from "@/components/ui/animation-provider";

export const metadata: Metadata = {
  title: {
    default: "Chris Shockley | Software Engineer",
    template: "%s | Chris Shockley",
  },
  description:
    "Personal portfolio of Chris Shockley — software developer, veteran, philosopher.",
  metadataBase: new URL("https://www.cshockley.com"),
  openGraph: {
    images: "/images/og-image.jpg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@cishocksr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVariables} font-sans`}>
        <ScrollProgress />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnimationProvider>
            <div className="flex min-h-screen flex-col">
              <Nav />
              <main className="container flex-1">
                <AppWrapper>{children}</AppWrapper>
              </main>
              <Footer />
            </div>
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
