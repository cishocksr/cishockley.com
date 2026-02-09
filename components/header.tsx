'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass =
    'transition-colors hover:text-amber-700 dark:hover:text-amber-500';

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm dark:bg-zinc-950/80">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Chris Shockley
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className={linkClass}>
            Home
          </Link>
          <Link href="/about" className={linkClass}>
            About
          </Link>
          <Link href="/blog" className={linkClass}>
            Blog
          </Link>
          <Link href="/projects" className={linkClass}>
            Projects
          </Link>
          <Link href="/contact" className={linkClass}>
            Contact
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button type="button" className="p-2" aria-label="Open Menu">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mx-auto mt-8 flex flex-col gap-6">
                <Link
                  href="/"
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/projects"
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
                <div className="border-t border-zinc-200 pt-4 dark:border-zinc-800">
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
