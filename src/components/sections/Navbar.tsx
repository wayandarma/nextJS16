"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
];

const Logo = () => (
    // Z-index 60 agar selalu di atas overlay menu
    <Link href="/" className="relative z-[60] flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
            {/* Icon sederhana untuk logo */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        </div>
        <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Portfolio
        </span>
    </Link>
);

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Kunci scroll saat menu terbuka
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
                <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Logo />

                    {/* Desktop Navigation */}
                    <ul className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium text-gray-600 transition-colors hover:text-black"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-md text-black md:hidden"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </header>

            {/* MOBILE MENU OVERLAY
        Dipindah keluar dari tag <header> atau <nav> jika memungkinkan, 
        tapi dengan Portal/Fixed position yang kuat, di sini pun aman.
      */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        // PENTING: Gunakan bg-white (solid) bukan bg-background jika variabel css tidak jelas.
                        // h-screen dan w-screen memaksa ukuran penuh viewport.
                        className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-white md:hidden"
                    >
                        <ul className="flex flex-col items-center gap-8 text-center">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-bold text-gray-900 hover:text-gray-500"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}