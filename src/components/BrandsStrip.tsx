"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { BRANDS } from "@/constants";

export default function BrandsStrip() {
  return (
    <section className="relative overflow-hidden border-y border-charcoal-100 bg-white py-14">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mx-auto max-w-7xl px-6"
      >
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-charcoal-400">
          Trusted by owners of <span className="text-safety-orange">16+ brands</span>
        </p>
      </motion.div>

      {/* Infinite scroll marquee */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee items-center gap-12 whitespace-nowrap">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="flex h-12 items-center rounded-lg border border-charcoal-100 bg-charcoal-50/60 px-6 text-sm font-bold tracking-wide text-charcoal-500 transition-colors hover:border-safety-orange/40 hover:text-safety-orange"
            >
              {brand}
            </span>
          ))}
        </div>
        <div className="flex animate-marquee items-center gap-12 whitespace-nowrap" aria-hidden="true">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span
              key={`dup-${brand}-${i}`}
              className="flex h-12 items-center rounded-lg border border-charcoal-100 bg-charcoal-50/60 px-6 text-sm font-bold tracking-wide text-charcoal-500 transition-colors hover:border-safety-orange/40 hover:text-safety-orange"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
