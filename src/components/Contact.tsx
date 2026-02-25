"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { slideUp } from "@/lib/motion";
import { CONTACT } from "@/constants";

export default function Contact() {
  return (
    <section id="visit-us" className="bg-charcoal-800 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Info Column */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-safety-orange">
              Get In Touch
            </span>
            <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
              Visit Us or Book Online
            </h2>

            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Address", value: CONTACT.address, href: CONTACT.mapUrl },
                { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
                { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { icon: Clock, label: "Working Hours", value: CONTACT.hours, href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-safety-orange/10 text-safety-orange">
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-charcoal-400">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-white underline decoration-charcoal-600 underline-offset-2 transition-colors hover:text-safety-orange hover:decoration-safety-orange"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="text-base text-white">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.2}
          >
            <form className="rounded-2xl border border-charcoal-700 bg-charcoal-700/40 p-8 backdrop-blur-sm">
              <div className="mb-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-charcoal-300">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-charcoal-600 bg-charcoal-800 px-4 py-3 text-white placeholder-charcoal-500 outline-none transition-colors focus:border-safety-orange"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-charcoal-300">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full rounded-lg border border-charcoal-600 bg-charcoal-800 px-4 py-3 text-white placeholder-charcoal-500 outline-none transition-colors focus:border-safety-orange"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-charcoal-300">
                  Service Needed
                </label>
                <select className="w-full rounded-lg border border-charcoal-600 bg-charcoal-800 px-4 py-3 text-white outline-none transition-colors focus:border-safety-orange">
                  <option value="">Select a service</option>
                  <option>General Service</option>
                  <option>Car Detailing</option>
                  <option>AC Service & Repair</option>
                  <option>Wheel Alignment</option>
                  <option>Body & Paint</option>
                  <option>Engine Diagnostics</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-charcoal-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your car and the issue…"
                  className="w-full resize-none rounded-lg border border-charcoal-600 bg-charcoal-800 px-4 py-3 text-white placeholder-charcoal-500 outline-none transition-colors focus:border-safety-orange"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-safety-orange px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-safety-orange-600"
              >
                Book Appointment
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
