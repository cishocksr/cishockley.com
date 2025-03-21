'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import MenuItem from "./menu-item";
import { DarkToggle } from "./dark-mode-toggle";
import MobileNav from "./mobile-nav";

const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
]

export default function Navbar() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-2xl shadow-md transition-all duration-300 ease-out"
        >
            <div className="max-w-7xl mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* ----- Logo ------ */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 group"
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative h-8 w-8 rounded-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light animate-spin-slow [mask-image:linear-gradient(transparent,white)]" />
                                <div className="absolute inset-[2px] bg-background rounded-full flex items-center justify-center">
                                    <span className="font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                                        CS
                                    </span>
                                </div>
                            </div>
                            <span className="font-semibold text-content/90 group-hover:text-primary transition-colors">
                                Chris Shockley
                            </span>
                        </Link>
                    </motion.div>
                    {/*  ------NavItem ----- */}

                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-6 bg-background/80 px-4 py-2 rounded-full border border-white/5 shadow-lg shadow-primary/5">
                            {navItems.map((items, i) => (
                                <MenuItem key={items.name} index={i} href={items.href}>{items.name}</MenuItem>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <DarkToggle />
                    </div>
                    <div className="flex items-center gap-3 md:hidden">
                        <DarkToggle />
                        <MobileNav />
                    </div>

                </div>

            </div>

        </motion.nav>
    )
}