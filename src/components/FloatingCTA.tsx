"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";
import { CONTACT } from "@/constants";

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  /* Show after scrolling past the hero */
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded buttons */}
      <AnimatePresence>
        {open && (
          <>
            {/* WhatsApp */}
            <motion.a
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              href={`https://wa.me/917995866191?text=Hi!%20I'd%20like%20to%20book%20a%20car%20service%20at%20Wheelsshop%20Madhapur.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </motion.a>

            {/* Call */}
            <motion.a
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-full bg-safety-orange px-5 py-3 text-sm font-bold text-white shadow-lg shadow-safety-orange/30 transition-transform hover:scale-105 active:scale-95"
            >
              <Phone size={20} />
              Call Now
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setOpen((prev) => !prev)}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300 ${
          open
            ? "bg-charcoal-800 text-white rotate-0"
            : "bg-safety-orange text-white shadow-safety-orange/40 hover:shadow-safety-orange/60"
        }`}
        aria-label="Contact options"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Phone size={24} />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Ping indicator */}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-safety-orange-300 opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-safety-orange-400" />
          </span>
        )}
      </motion.button>
    </div>
  );
}
