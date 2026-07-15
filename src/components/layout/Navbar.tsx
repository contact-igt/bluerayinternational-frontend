"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Menu, X, Sparkle, Mail, Phone
} from "lucide-react";
import { CONTACT_INFO, NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/brand/Logo";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const isAdminPage = pathname.startsWith('/admin');
    if (isAdminPage) return null;

    return (
        <>
            {/* Top Bar */}
            <div className="bg-navy-deep text-white py-2 px-4 border-b border-navy-midnight text-xs md:text-sm">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                        <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-gold transition">
                            <Mail className="w-3 h-3 md:w-4 md:h-4 text-gold" /> {CONTACT_INFO.email}
                        </a>
                        <a href={`mailto:${CONTACT_INFO.secondaryEmail}`} className="flex items-center gap-2 hover:text-gold transition">
                            <Mail className="w-3 h-3 md:w-4 md:h-4 text-gold" /> {CONTACT_INFO.secondaryEmail}
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href={`tel:${CONTACT_INFO.phonePrimary}`} className="flex items-center gap-2 hover:text-gold transition">
                            <Phone className="w-3 h-3 md:w-4 md:h-4" /> {CONTACT_INFO.phonePrimary}
                        </a>
                    </div>
                </div>
            </div>

            {/* Header & Navigation */}
            <header className={`bg-white sticky top-0 z-50 shadow-md py-4 transition-all duration-300 ${scrolled ? 'py-2 shadow-lg' : 'py-4'}`}>
                <div className="container mx-auto px-4 flex justify-between items-center">

                    {/* Logo Section */}
                    <Link href="/" className="cursor-pointer group px-4 py-2 rounded-lg  transition">
                        <Logo variant="header" useImage className="h-10 md:h-13" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8 text-sm font-bold text-navy-deep uppercase tracking-wide">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-navy-deep p-2 active:scale-95 transition-transform">
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg py-4 px-4 flex flex-col gap-4 text-sm font-bold text-navy-deep uppercase animate-slide-down">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`py-2 border-b border-gray-50 active:text-gold transition-colors ${pathname === link.href ? 'text-gold' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </header>
        </>
    );
}
