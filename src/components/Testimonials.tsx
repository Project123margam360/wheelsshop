"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { slideUp, staggerContainer } from "@/lib/motion";
import { TESTIMONIALS } from "@/constants";

/* Get initials from name */
function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

/* Gradient pairs for avatars */
const AVATAR_GRADIENTS = [
  "from-safety-orange to-safety-orange-700",
  "from-safety-orange-600 to-safety-orange-900",
  "from-safety-orange-400 to-safety-orange-600",
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-offwhite py-24">
      {/* Decorative large quote marks */}
      <div className="absolute left-10 top-16 text-[12rem] font-black leading-none text-charcoal-100/40 select-none" aria-hidden="true">
        &ldquo;
      </div>
      <div className="absolute bottom-8 right-10 text-[12rem] font-black leading-none text-charcoal-100/40 select-none rotate-180" aria-hidden="true">
        &ldquo;
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-safety-orange">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold text-charcoal sm:text-4xl md:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-charcoal-500">
            Don&apos;t just take our word for it — hear from the car owners who
            trust us with their vehicles.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              variants={slideUp}
              custom={i * 0.1}
              className="group relative flex flex-col rounded-2xl border border-charcoal-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-safety-orange/30 hover:-translate-y-1"
            >
              {/* Top accent bar */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-safety-orange via-safety-orange-400 to-safety-orange opacity-0 transition-opacity group-hover:opacity-100" />

              <Quote
                size={36}
                className="absolute right-6 top-6 text-safety-orange/10 transition-colors group-hover:text-safety-orange/20"
              />

              {/* Stars */}
              <div className="mb-5 flex gap-1 text-safety-orange">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review text */}
              <p className="mb-6 flex-1 text-base leading-relaxed text-charcoal-500">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-charcoal-100 pt-5">
                {/* Avatar */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${AVATAR_GRADIENTS[i % 3]} text-sm font-bold text-white shadow-sm`}
                >
                  {getInitials(t.name)}
                </div>
                <div>
                  <div className="font-bold text-charcoal">{t.name}</div>
                  <div className="text-sm text-charcoal-400">{t.car}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google review badge */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-charcoal-200 bg-white px-6 py-3 shadow-sm">
            <div className="flex gap-0.5 text-safety-orange">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-semibold text-charcoal">
              4.9 / 5
            </span>
            <span className="text-sm text-charcoal-400">
              on Google Reviews
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
