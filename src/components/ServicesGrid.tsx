"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  CircleDot,
  Paintbrush,
  Thermometer,
  Sparkles,
  Zap,
  Cpu,
  GitFork,
  ShieldCheck,
  Check,
  type LucideIcon,
} from "lucide-react";
import { slideUp, staggerContainer } from "@/lib/motion";
import { SERVICE_GRID } from "@/constants";

/* ── Icon look-up ──────────────────────────────────────── */
const iconMap: Record<string, LucideIcon> = {
  Wrench,
  CircleDot,
  Paintbrush,
  Thermometer,
  Sparkles,
  Zap,
  Cpu,
  GitFork,
  ShieldCheck,
};

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-offwhite py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* ── Section Header ─────────────────────────────── */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-safety-orange">
            What We Offer
          </span>
          <h2 className="text-3xl font-bold text-charcoal sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-500">
            From routine maintenance to insurance claims — every aspect of car
            care, under one roof.
          </p>
        </motion.div>

        {/* ── Cards Grid ─────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICE_GRID.map((service, i) => {
            const Icon = iconMap[service.icon];
            const isHighlighted = service.badge !== null;

            return (
              <motion.div
                key={service.title}
                variants={slideUp}
                custom={i * 0.06}
                className={`group relative flex flex-col rounded-2xl border p-7 shadow-sm transition-all duration-300 hover:shadow-xl ${
                  isHighlighted
                    ? "border-safety-orange/50 bg-gradient-to-br from-safety-orange-50 to-white ring-1 ring-safety-orange/20 hover:ring-safety-orange/40"
                    : "border-charcoal-100 bg-white hover:border-safety-orange/30"
                }`}
              >
                {/* Badge (only for highlighted card) */}
                {service.badge && (
                  <span className="absolute -top-3 right-5 inline-flex items-center gap-1 rounded-full bg-safety-orange px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-glow">
                    <ShieldCheck size={13} strokeWidth={2.5} />
                    {service.badge}
                  </span>
                )}

                {/* Icon */}
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-colors ${
                    isHighlighted
                      ? "bg-safety-orange text-white"
                      : "bg-safety-orange/10 text-safety-orange group-hover:bg-safety-orange group-hover:text-white"
                  }`}
                >
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl font-bold text-charcoal">
                  {service.title}
                </h3>

                {/* Features list */}
                <ul className="flex flex-col gap-2.5">
                  {service.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm leading-snug text-charcoal-500"
                    >
                      <Check
                        size={16}
                        strokeWidth={2.5}
                        className={`mt-0.5 shrink-0 ${
                          isHighlighted
                            ? "text-safety-orange"
                            : "text-safety-orange/70"
                        }`}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
