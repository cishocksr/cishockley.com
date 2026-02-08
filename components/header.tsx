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
import { siteConfig } from '@/lib/config/site';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = 'transition-colors hover:text-[var(--primary)] dark:hover:text-[var(--primary)]';

  return (
    <header className="border-border bg-background/80 sticky top-0 z-50 border-b backdrop-blur-sm">
      <nav className="container-section flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Chris Shockley
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.href}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
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

                <div className="border-border border-t pt-4">
                  {siteConfig.nav.map((item) => {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={linkClass}
                        onClick={() => setOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}


                  <ThemeToggle />
                </div>
              </div>
            </SheetContent >
          </Sheet >
        </div >
      </nav >
    </header >
  );
}
