"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Car } from "lucide-react";
import { NAV_LINKS, SITE_NAME, CONTACT } from "@/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ── Track scroll to add shadow & tighter padding ────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock body scroll when mobile menu is open ───────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal-900/98 shadow-lg shadow-black/20 backdrop-blur-lg"
          : "bg-charcoal-800/95 backdrop-blur-md"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        {/* ── Logo ─────────────────────────────────────── */}
        <Link href="/" className="group flex items-center gap-3">
          {/* Icon placeholder */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-safety-orange transition-transform group-hover:scale-110">
            <Car size={22} className="text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tight text-white">
              {SITE_NAME}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal-400">
              Madhapur
            </span>
          </div>
        </Link>

        {/* ── Desktop Navigation Links ─────────────────── */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative rounded-lg px-4 py-2 text-sm font-medium text-charcoal-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
                {/* Active-style underline on hover */}
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-safety-orange transition-transform hover:scale-x-100 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Right side: Call Now CTA + Hamburger ─────── */}
        <div className="flex items-center gap-3">
          {/* Call Now — desktop & tablet */}
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 rounded-full bg-safety-orange px-5 py-2.5 text-sm font-bold text-white shadow-glow transition-all hover:bg-safety-orange-600 hover:shadow-glow-lg active:scale-95 sm:flex"
          >
            <Phone size={16} strokeWidth={2.5} />
            <span>Call Now</span>
          </a>

          {/* Phone number text — visible on md+ next to button */}
          <span className="hidden text-xs font-semibold text-charcoal-300 lg:inline">
            {CONTACT.phone}
          </span>

          {/* Hamburger toggle — mobile only */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* ── Mobile Dropdown Menu ───────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden border-t border-charcoal-700/60 bg-charcoal-900/98 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-7xl px-6 py-6">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.06 * i, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium text-charcoal-200 transition-colors hover:bg-white/5 hover:text-safety-orange"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-safety-orange/60" />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Call Now CTA */}
              <motion.div
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="mt-5 border-t border-charcoal-700/60 pt-5"
              >
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-3 rounded-full bg-safety-orange px-6 py-4 text-base font-bold text-white shadow-glow transition-all hover:bg-safety-orange-600 active:scale-95"
                >
                  <Phone size={18} strokeWidth={2.5} />
                  Call Now — {CONTACT.phone}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
