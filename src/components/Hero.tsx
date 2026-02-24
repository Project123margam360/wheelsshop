"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* ── Background Image ────────────────────────────── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* ── Dark Overlay Stack ──────────────────────────── */}
      <div className="absolute inset-0 bg-charcoal-950/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/60 to-transparent" />

      {/* ── Subtle accent glow (top-right) ──────────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,102,0,0.08),transparent_55%)]" />

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:py-40">
        {/* Badge */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-safety-orange/30 bg-safety-orange/10 px-5 py-2 text-sm font-semibold tracking-wide text-safety-orange backdrop-blur-sm"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-safety-orange animate-pulse" />
          Premier Auto Care in Madhapur
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="mx-auto max-w-5xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Welcome to{" "}
          <span className="text-safety-orange">WheelsShop</span>{" "}
          <span className="text-charcoal-300">|</span> Madhapur
          <span className="mt-3 block text-2xl font-semibold tracking-normal text-charcoal-200 sm:text-3xl md:text-4xl">
            Premier Car Service &amp; Auto Repairs in Hyderabad
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-charcoal-300 md:text-xl"
        >
          Trusted car servicing and maintenance solutions with a focus on{" "}
          <strong className="font-semibold text-white">quality</strong> and{" "}
          <strong className="font-semibold text-white">transparency</strong>.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          className="mt-12"
        >
          <a
            href="#visit-us"
            className="group inline-flex items-center gap-3 rounded-full bg-safety-orange px-10 py-5 text-lg font-bold text-white shadow-glow transition-all duration-300 hover:bg-safety-orange-600 hover:shadow-glow-lg hover:scale-[1.03] active:scale-[0.98]"
          >
            Book a Service Today
            <ArrowRight
              size={22}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.7}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-charcoal-400"
        >
          {[
            "✓ 10+ Years Experience",
            "✓ 15,000+ Cars Serviced",
            "✓ 4.9★ Google Rated",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1">
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ────────────────────────────── */}
      <motion.a
        href="#services"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-charcoal-400 transition-colors hover:text-safety-orange"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <ChevronDown size={24} />
      </motion.a>
    </section>
  );
}
