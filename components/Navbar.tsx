"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, services } from "../data";

const primaryLinks = [{ label: "Home", href: "#home" }, ...navLinks];
const desktopLinkClasses = "text-sm font-medium text-slate-700 transition hover:text-slate-950 focus:outline-none focus:text-slate-950";
const mobileLinkClasses = "block rounded-3xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#f8f0ef] hover:text-slate-950";
const serviceDesktopClasses = "rounded-3xl border border-[#f3e4e2] bg-[#fff8f7] px-4 py-3 text-sm font-medium text-slate-800 transition hover:border-[#e5d0cc] hover:bg-white";
const serviceMobileClasses = "rounded-3xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-slate-950";
const ctaButtonClasses = "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#c62828] to-[#8b0000] px-9 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(187,6,30,0.9)] transition hover:brightness-110";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const openServices = () => {
        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
        }
        setServicesOpen(true);
    };

    const closeServices = () => {
        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current);
        }
        closeTimeout.current = setTimeout(() => {
            setServicesOpen(false);
            closeTimeout.current = null;
        }, 150);
    };

    useEffect(() => {
        return () => {
            if (closeTimeout.current) {
                clearTimeout(closeTimeout.current);
            }
        };
    }, []);

    return (
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
                <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#f7e6e4] shadow-sm">
                        <img src="logo.jpg" className="h-10 w-10 rounded-2xl object-cover" alt="FilerNow logo" />
                    </div>
                    <div className="hidden flex-col leading-tight md:flex">
                        <span className="text-lg font-semibold text-slate-900">FilerNow</span>
                    </div>
                </div>

                <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
                    <a href="#home" className={desktopLinkClasses}>
                        Home
                    </a>

                    <div className="relative" onMouseEnter={openServices} onMouseLeave={closeServices}>
                        <button
                            type="button"
                            aria-expanded={servicesOpen}
                            aria-controls="services-menu"
                            onClick={() => setServicesOpen((value) => !value)}
                            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                        >
                            Services
                            <span className="text-sm">▾</span>
                        </button>

                        <div
                            id="services-menu"
                            onMouseEnter={openServices}
                            onMouseLeave={closeServices}
                            className={`absolute left-0 top-full z-20 mt-3 w-[min(52rem,calc(100vw-4rem))] max-w-[55rem] rounded-[30px] border border-[#f1e5e3] bg-white p-5 shadow-[0_20px_80px_-30px_rgba(9,20,38,0.25)] transition-all duration-200 ${servicesOpen ? "opacity-100 visible" : "pointer-events-none opacity-0 invisible"}`}
                        >
                            <div className="mb-4 flex items-center justify-between rounded-3xl bg-[#fff4f2] px-4 py-3 text-sm font-semibold text-slate-900">
                                <span>Our most popular services</span>
                                <span className="rounded-full bg-[#fee2e2] px-3 py-1 text-xs font-semibold text-[#b91c1c]">Trusted</span>
                            </div>
                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                {services.map((service) => (
                                    <a key={service.title} href={service.href} className={serviceDesktopClasses}>
                                        {service.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className={desktopLinkClasses}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden items-center gap-4 md:flex">
                    <a href="#file-now" className={ctaButtonClasses}>
                        File Now
                    </a>
                 
                </div>

                <button
                    type="button"
                    onClick={() => setOpen((value) => !value)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 md:hidden"
                    aria-label="Toggle navigation"
                >
                    <span className="text-2xl">{open ? "✕" : "☰"}</span>
                </button>
            </div>

            {open && (
                <div className="border-t border-[#f0e9e7] bg-white md:hidden">
                    <div className="space-y-3 px-6 py-4">
                        <div className="flex items-center justify-between rounded-3xl bg-[#f9f5f3] px-4 py-3">
                            <div>
                                <p className="text-sm font-semibold text-slate-900">FilerNow</p>
                                <p className="text-xs text-slate-500">Fast filing & trusted support</p>
                            </div>
                            <a href="#contact" className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                                Contact
                            </a>
                        </div>

                        {primaryLinks.map((link) => (
                            <a key={link.label} href={link.href} className={mobileLinkClasses}>
                                {link.label}
                            </a>
                        ))}

                        <div className="rounded-[30px] border border-[#f3e4e2] bg-[#fff8f7] p-4">
                            <div className="mb-3 flex items-center justify-between">
                                <p className="text-sm font-semibold text-slate-900">Services</p>
                                <span className="rounded-full bg-[#fde8e6] px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b91c1c]">Popular</span>
                            </div>
                            <div className="grid gap-2">
                                {services.map((service) => (
                                    <a key={service.title} href={service.href} className={serviceMobileClasses}>
                                        {service.title}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <a
                            href="#file-now"
                            className="block rounded-full bg-[#bb061e] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#a5051b]"
                        >
                            File Now
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
