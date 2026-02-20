'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { siteConfig } from '@/config/site';
import { ThemeToggle } from './theme-toggle';
import { VARIANTS_SLIDE_DOWN } from '@/components/motion';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  return (
    <motion.header
      className="border-border bg-background/80 sticky top-0 z-50 border-b backdrop-blur-sm"
      variants={VARIANTS_SLIDE_DOWN}
      initial="hidden"
      animate="visible"
    >
      <nav className="container-section flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <span className="text-accent">C</span>hris{' '}
          <span className="text-accent">S</span>hockley
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative py-1 text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.href)
                  ? 'text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}

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
              <div className="mt-8 flex flex-col gap-2">
                {siteConfig.nav.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-3 py-2.5 text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:text-primary hover:bg-muted'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="mt-4 border-t border-border pt-4">
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
