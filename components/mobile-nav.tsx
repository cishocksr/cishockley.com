"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";

const navItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
];

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden">
            {/* Hamburger Button */}
            <button onClick={() => setOpen(true)} aria-label="Open menu">
                <Menu className="h-6 w-6 text-foreground" />
            </button>

            {/* Overlay Menu */}
            {open && (
                <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md p-6">
                    <div className="flex justify-end">
                        <button onClick={() => setOpen(false)} aria-label="Close menu">
                            <X className="h-6 w-6 text-foreground" />
                        </button>
                    </div>

                    <nav className="mt-8 flex flex-col items-start gap-6 text-2xl font-semibold text-foreground">
                        <Link href="/" onClick={() => setOpen(false)}>
                            Home
                        </Link>
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.href} onClick={() => setOpen(false)}>
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
}
