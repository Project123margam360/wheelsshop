"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  CalendarCheck,
  Settings,
  SmilePlus,
} from "lucide-react";
import { slideUp, staggerContainer } from "@/lib/motion";

const STEPS = [
  {
    number: "01",
    title: "Select Your Service",
    description: "Browse our range of services and pick what your car needs.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Schedule Appointment",
    description: "Choose a date & time that works for you — online or by call.",
    icon: CalendarCheck,
  },
  {
    number: "03",
    title: "Quality Maintenance",
    description:
      "Our certified technicians service your car with genuine parts.",
    icon: Settings,
  },
  {
    number: "04",
    title: "Drive Away Happy",
    description: "Get back on the road with a fully inspected, spotless car.",
    icon: SmilePlus,
  },
] as const;

export default function ProcessSteps() {
  return (
    <section className="bg-charcoal-800 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* ── Header ─────────────────────────────────────── */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-safety-orange">
            How It Works
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Four Simple Steps
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-charcoal-400">
            Getting your car serviced has never been easier.
          </p>
        </motion.div>

        {/* ── Steps — Desktop (horizontal) ───────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="hidden md:block"
        >
          <div className="relative grid grid-cols-4 gap-6">
            {/* Horizontal connector line (behind the circles) */}
            <div
              className="pointer-events-none absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-[2px]"
              aria-hidden="true"
            >
              <div className="h-full w-full bg-gradient-to-r from-safety-orange/20 via-safety-orange/50 to-safety-orange/20" />
              {/* animated glow sweep */}
              <motion.div
                className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-safety-orange to-transparent opacity-60 blur-sm"
                animate={{ left: ["0%", "75%", "0%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={slideUp}
                  custom={i * 0.12}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Numbered circle */}
                  <div className="relative z-10 mb-6 flex h-[6.5rem] w-[6.5rem] flex-col items-center justify-center rounded-full border-2 border-charcoal-600 bg-charcoal-700/80 shadow-lg transition-colors duration-300 hover:border-safety-orange hover:shadow-glow">
                    <Icon
                      size={28}
                      className="mb-1 text-safety-orange"
                      strokeWidth={1.8}
                    />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-charcoal-400">
                      Step {step.number}
                    </span>
                  </div>

                  {/* Title & description */}
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="max-w-[200px] text-sm leading-relaxed text-charcoal-400">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Steps — Mobile (vertical timeline) ─────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="md:hidden"
        >
          <div className="relative ml-6">
            {/* Vertical connector line */}
            <div
              className="absolute top-0 bottom-0 left-5 w-[2px] bg-gradient-to-b from-safety-orange/40 via-safety-orange/20 to-transparent"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-10">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    variants={slideUp}
                    custom={i * 0.1}
                    className="relative flex items-start gap-5"
                  >
                    {/* Circle node on the vertical line */}
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-charcoal-600 bg-charcoal-700">
                      <Icon
                        size={18}
                        className="text-safety-orange"
                        strokeWidth={2}
                      />
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <span className="mb-1 block text-[11px] font-bold uppercase tracking-widest text-safety-orange">
                        Step {step.number}
                      </span>
                      <h3 className="mb-1 text-base font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-charcoal-400">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
