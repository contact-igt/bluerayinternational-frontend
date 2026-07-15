"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Facebook, Linkedin, Instagram, MapPin, Mail, Phone
} from "lucide-react";
import { CONTACT_INFO, NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/brand/Logo";

export default function Footer() {
    const pathname = usePathname();
    const isAdminPage = pathname.startsWith('/admin');

    if (isAdminPage) return null;

    return (
        <footer className="bg-navy-deep text-white py-12 px-4 border-t-4 border-gold">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
                    <div>
                        <Link
                            href="/"
                            className="inline-flex w-fit bg-white px-4 py-2 rounded-lg border border-white/80 shadow-sm mb-4 hover:border-gold transition"
                        >
                            <Logo variant="footer" useImage className="h-10 md:h-13" />
                        </Link>
                        <p className="text-sm opacity-60 mb-4 italic">Since 2009</p>
                        <p className="text-sm opacity-80 leading-relaxed mb-6">
                            Leading technical training and IT services institute based in Vadalur. Specializing in NDT, QA/QC, Safety, and Engineering solutions.
                        </p>
                        <div className="flex gap-4">
                            <a href={CONTACT_INFO.socials.facebook} className="opacity-60 hover:opacity-100 hover:text-gold transition active:scale-95">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href={CONTACT_INFO.socials.linkedin} className="opacity-60 hover:opacity-100 hover:text-gold transition active:scale-95">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href={CONTACT_INFO.socials.instagram} className="opacity-60 hover:opacity-100 hover:text-gold transition active:scale-95">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-gold uppercase tracking-wider text-sm">Quick Links</h4>
                        <ul className="space-y-3 text-sm opacity-80">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-gold transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-gold uppercase tracking-wider text-sm">Contact Info</h4>
                        <div className="space-y-4 text-sm">
                            <div className="flex gap-2 text-white">
                                <MapPin className="w-4 h-4 text-gold shrink-0" />
                                <span className="opacity-80 leading-tight">
                                    {CONTACT_INFO.addressLine1},<br />
                                    {CONTACT_INFO.addressLine2}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <Phone className="w-4 h-4 text-gold shrink-0" />
                                <span className="opacity-80 font-bold">{CONTACT_INFO.phonePrimary}</span>
                            </div>
                            <div className="flex gap-2">
                                <Mail className="w-4 h-4 text-gold shrink-0" />
                                <div className="flex flex-col gap-1">
                                    <span className="opacity-80">{CONTACT_INFO.email}</span>
                                    <span className="opacity-80">{CONTACT_INFO.secondaryEmail}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-40 gap-4">
                    <p>© {new Date().getFullYear()} Blueray International. All rights reserved.</p>
                    <div className="flex gap-6 items-center">
                        <Link href="/privacy" className="hover:text-gold">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-gold">Terms of Service</Link>
                        <Link href="/admin/login" className="hover:text-gold border-l border-white/30 pl-6 ml-2">Admin Access</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
