"use client";

import { motion } from "framer-motion";
import { slideUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/motion";
import { STATS } from "@/constants";
import { Award, Users, Wrench, Shield } from "lucide-react";

const STAT_ICONS = [Award, Wrench, Users, Shield];

export default function About() {

  return (
    <>
      {/* ═══════ About Us Section ═══════════════════════════ */}
      <section id="about-us" className="relative overflow-hidden bg-charcoal-900 py-24">
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        {/* Accent glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,102,0,0.06),transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image Column */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=800&q=80"
                  alt="Wheelsshop service center — mechanics at work"
                  className="h-[450px] w-full object-cover"
                />
                {/* Orange overlay bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal-950/90 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-safety-orange">
                      <Award size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">Since 2016</div>
                      <div className="text-sm text-charcoal-300">Trusted by Hyderabad</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -right-4 rounded-xl border border-charcoal-700 bg-charcoal-800 px-5 py-4 shadow-2xl lg:-right-8"
              >
                <div className="text-3xl font-extrabold text-safety-orange">4.9★</div>
                <div className="text-xs font-medium text-charcoal-400">Google Rating</div>
                <div className="mt-1 flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-safety-orange text-sm">★</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-safety-orange">
                About Us
              </span>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                A Decade of Driving{" "}
                <span className="text-safety-orange">Excellence</span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-charcoal-300">
                Founded in 2016 by{" "}
                <strong className="font-semibold text-white">Mohd Feroz</strong>,
                Wheelsshop has grown from a small garage in Madhapur to
                Hyderabad&apos;s most trusted multi-brand car service center. Our
                commitment to quality, transparency, and customer satisfaction
                drives everything we do.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-charcoal-300">
                We invest in the latest diagnostic tools and factory-trained
                technicians so your car always receives the care it deserves —
                whether it&apos;s a quick oil change or a complete overhaul.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  "Genuine Spare Parts",
                  "Certified Technicians",
                  "Transparent Pricing",
                  "Pickup & Drop",
                  "Warranty on Service",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-charcoal-600 bg-charcoal-800/60 px-4 py-2 text-sm font-medium text-charcoal-200 transition-colors hover:border-safety-orange/50 hover:text-safety-orange"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ Why Us — Stats Section ═══════════════════════ */}
      <section id="why-us" className="relative bg-charcoal-800 py-20">
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-safety-orange to-transparent opacity-40" />

        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Numbers That Speak for Themselves
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {STATS.map((stat, i) => {
              const Icon = STAT_ICONS[i];
              return (
                <motion.div
                  key={stat.label}
                  variants={slideUp}
                  custom={i * 0.1}
                  className="group relative rounded-2xl border border-charcoal-700 bg-charcoal-700/30 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-safety-orange/40 hover:bg-charcoal-700/50"
                >
                  <Icon
                    size={24}
                    className="mx-auto mb-3 text-safety-orange/60 transition-colors group-hover:text-safety-orange"
                  />
                  <div className="mb-2 text-4xl font-extrabold text-safety-orange">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-charcoal-300">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
