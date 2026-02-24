"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { slideUp } from "@/lib/motion";
import { CONTACT } from "@/constants";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-safety-orange py-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.1),transparent_50%)]" />

      {/* Geometric shapes */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
      <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-white/5" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Ready to Give Your Car{" "}
            <span className="underline decoration-white/40 decoration-wavy underline-offset-8">
              the Care It Deserves?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Book your appointment today and experience premium car servicing at
            Madhapur&apos;s most trusted auto care center.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            {/* Book Online */}
            <a
              href="#visit-us"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-safety-orange shadow-xl transition-all hover:scale-[1.03] hover:shadow-2xl active:scale-[0.98]"
            >
              Book Online
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            {/* Call Now */}
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="group inline-flex items-center gap-3 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-white/70 hover:bg-white/20 active:scale-[0.98]"
            >
              <PhoneCall size={20} />
              {CONTACT.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
