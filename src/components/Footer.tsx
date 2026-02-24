import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ExternalLink,
  Car,
} from "lucide-react";
import { SITE_NAME, CONTACT, NAV_LINKS } from "@/constants";

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com/wheelsshop", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/wheelsshop", icon: Instagram },
  { label: "Twitter", href: "https://twitter.com/wheelsshop", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com/@wheelsshop", icon: Youtube },
] as const;

const QUICK_LINKS = [
  ...NAV_LINKS,
  { label: "Book a Service", href: "#visit-us" },
  { label: "Insurance Claims", href: "#services" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal-700 bg-charcoal-950">
      {/* ── Main Footer Grid ──────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* ── Col 1: About + Founder ─────────────────────── */}
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-safety-orange transition-transform group-hover:scale-110">
                <Car size={22} className="text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  {SITE_NAME}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal-500">
                  Madhapur
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-charcoal-400">
              Your trusted destination for premium car servicing, detailing, and
              repairs in Madhapur, Hyderabad. We combine cutting-edge diagnostics
              with old-school craftsmanship.
            </p>

            {/* Founder tribute */}
            <div className="mt-6 rounded-xl border border-charcoal-800 bg-charcoal-900/60 px-4 py-3">
              <p className="text-xs leading-relaxed text-charcoal-500">
                <span className="font-semibold text-charcoal-300">Founded by Mohd Feroz</span>{" "}
                — driven by a passion for automobiles and a commitment to
                world-class car care in Hyderabad.
              </p>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-charcoal-700 bg-charcoal-900 text-charcoal-400 transition-all hover:border-safety-orange hover:bg-safety-orange hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ─────────────────────────── */}
          <div className="lg:col-span-2">
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1.5 text-sm text-charcoal-400 transition-colors hover:text-safety-orange"
                  >
                    <span className="h-1 w-1 rounded-full bg-charcoal-600 transition-colors group-hover:bg-safety-orange" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact Info ────────────────────────── */}
          <div className="lg:col-span-3">
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {[
                { icon: MapPin, value: CONTACT.address },
                { icon: Phone, value: CONTACT.phone },
                { icon: Mail, value: CONTACT.email },
                { icon: Clock, value: CONTACT.hours },
              ].map(({ icon: Icon, value }) => (
                <li key={value} className="flex items-start gap-3">
                  <Icon
                    size={16}
                    className="mt-0.5 shrink-0 text-safety-orange"
                  />
                  <span className="text-sm leading-relaxed text-charcoal-400">
                    {value}
                  </span>
                </li>
              ))}
            </ul>

            {/* Get Directions link */}
            <a
              href={CONTACT.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-safety-orange transition-colors hover:text-safety-orange-400"
            >
              Get Directions
              <ExternalLink size={14} />
            </a>
          </div>

          {/* ── Col 4: Embedded Google Map ─────────────────── */}
          <div className="lg:col-span-3">
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Find Us
            </h4>
            <div className="overflow-hidden rounded-xl border border-charcoal-700">
              <iframe
                title="WheelsShop Location — Jai Hind Gandhi Rd, VIP Hills, Madhapur"
                src={CONTACT.mapEmbed}
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale transition-all duration-300 hover:grayscale-0"
              />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-charcoal-500">
              Jai Hind Gandhi Rd, VIP Hills, Madhapur, Hyderabad
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ────────────────────────────────────── */}
      <div className="border-t border-charcoal-800 bg-charcoal-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-xs text-charcoal-500">
            © {year} {SITE_NAME} | Madhapur. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-charcoal-500">
            Made with{" "}
            <Heart
              size={12}
              className="text-safety-orange"
              fill="currentColor"
            />{" "}
            in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}
