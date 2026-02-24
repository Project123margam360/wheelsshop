"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Sparkles,
  Thermometer,
  CircleDot,
  Paintbrush,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import { slideUp, staggerContainer } from "@/lib/motion";
import { SERVICES } from "@/constants";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Sparkles,
  Thermometer,
  CircleDot,
  Paintbrush,
  Cpu,
};

export default function Services() {
  return (
    <section id="services" className="bg-offwhite py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
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
            From routine maintenance to full-body restoration, we&apos;ve got
            every aspect of car care covered.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={slideUp}
                custom={i * 0.08}
                className="group rounded-2xl border border-charcoal-100 bg-white p-8 shadow-sm transition-all hover:border-safety-orange/40 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-safety-orange/10 text-safety-orange transition-colors group-hover:bg-safety-orange group-hover:text-white">
                  <Icon size={28} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-charcoal">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-charcoal-500">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
