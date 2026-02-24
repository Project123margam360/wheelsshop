// ─── Brand ───────────────────────────────────────────────
export const SITE_NAME = "WheelsShop";
export const SITE_TAGLINE = "Premium Car Service Center";
export const SITE_LOCATION = "Madhapur, Hyderabad";
export const SITE_DESCRIPTION =
  "WheelsShop | Madhapur — Your trusted destination for premium car servicing, detailing, and repairs in Hyderabad.";

// ─── Contact ─────────────────────────────────────────────
export const CONTACT = {
  phone: "+91 79958 66191",
  email: "hello@wheelsshop.in",
  address:
    "Jai Hind Gandhi Rd, VIP Hills, Madhapur, Hyderabad, Telangana 500081",
  mapUrl: "https://maps.google.com/?q=Jai+Hind+Gandhi+Rd+VIP+Hills+Madhapur+Hyderabad",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3!2d78.3876!3d17.4484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzU0LjIiTiA3OMKwMjMnMTUuNCJF!5e0!3m2!1sen!2sin!4v1700000000000",
  hours: "Mon – Sat: 8 AM – 7 PM | Sun: 9 AM – 2 PM",
} as const;

// ─── Navigation ──────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about-us" },
  { label: "Why Us", href: "#why-us" },
  { label: "Visit Us", href: "#visit-us" },
] as const;

// ─── Brands We Service ───────────────────────────────────
export const BRANDS = [
  "Maruti Suzuki",
  "Hyundai",
  "Toyota",
  "Honda",
  "Kia",
  "Tata",
  "Mahindra",
  "Volkswagen",
  "Skoda",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Ford",
  "Renault",
  "MG",
  "Nissan",
] as const;

// ─── Services (simple cards — legacy) ────────────────────
export const SERVICES = [
  {
    title: "General Service",
    description:
      "Complete multi-point inspection, oil & filter change, brake check, and fluid top-ups to keep your car running smoothly.",
    icon: "Wrench" as const,
  },
  {
    title: "Car Detailing",
    description:
      "Professional exterior polish, ceramic coating, interior deep-clean, and leather conditioning for a showroom finish.",
    icon: "Sparkles" as const,
  },
  {
    title: "AC Service & Repair",
    description:
      "Gas top-up, compressor diagnostics, cabin filter replacement, and full AC system servicing for peak cooling.",
    icon: "Thermometer" as const,
  },
  {
    title: "Wheel Alignment",
    description:
      "Precision 3D wheel alignment and balancing to extend tyre life and ensure a smooth, safe ride.",
    icon: "CircleDot" as const,
  },
  {
    title: "Body & Paint",
    description:
      "Dent removal, scratch repair, full body repaint, and custom colour matching using premium automotive paints.",
    icon: "Paintbrush" as const,
  },
  {
    title: "Engine Diagnostics",
    description:
      "OBD-II scanning, ECU fault-code analysis, and advanced engine troubleshooting for all makes and models.",
    icon: "Cpu" as const,
  },
] as const;

// ─── Services Grid (detailed cards) ─────────────────────
export const SERVICE_GRID = [
  {
    title: "Complete Car Servicing",
    icon: "Wrench" as const,
    badge: null,
    features: [
      "Periodic maintenance & scheduled servicing",
      "Engine oil & filter replacement",
      "Brake inspection & fluid top-up",
      "Multi-point vehicle health check",
      "Spark plug & air filter replacement",
    ],
  },
  {
    title: "Tyres & Wheels",
    icon: "CircleDot" as const,
    badge: null,
    features: [
      "Tyre replacement (all brands)",
      "Wheel alignment & balancing",
      "Tyre rotation & pressure check",
      "Alloy wheel repair & refurbishment",
      "Tubeless tyre puncture repair",
    ],
  },
  {
    title: "Denting & Painting",
    icon: "Paintbrush" as const,
    badge: null,
    features: [
      "Scratch & dent removal",
      "Full body repaint & restoration",
      "Bumper repair & replacement",
      "Custom colour matching",
      "Ceramic & PPF paint protection",
    ],
  },
  {
    title: "AC Service & Repair",
    icon: "Thermometer" as const,
    badge: null,
    features: [
      "AC gas top-up & leak detection",
      "Compressor repair & replacement",
      "Cabin / AC filter replacement",
      "Cooling coil & condenser service",
      "Full AC system diagnostics",
    ],
  },
  {
    title: "Car Detailing & Cleaning",
    icon: "Sparkles" as const,
    badge: null,
    features: [
      "Exterior wash & wax polish",
      "Interior deep-clean & vacuum",
      "Ceramic coating application",
      "Leather conditioning & restoration",
      "Engine bay cleaning",
    ],
  },
  {
    title: "Electrical & Electronics",
    icon: "Zap" as const,
    badge: null,
    features: [
      "Battery check & replacement",
      "Starter motor & alternator repair",
      "Headlight & tail-light restoration",
      "Wiring harness diagnostics",
      "Infotainment & sensor calibration",
    ],
  },
  {
    title: "Engine & Transmission",
    icon: "Cpu" as const,
    badge: null,
    features: [
      "OBD-II scanning & ECU diagnostics",
      "Engine overhaul & rebuild",
      "Clutch & gearbox repair",
      "Timing belt / chain replacement",
      "Fuel injection system service",
    ],
  },
  {
    title: "Suspension & Steering",
    icon: "GitFork" as const,
    badge: null,
    features: [
      "Shock absorber replacement",
      "Power steering fluid flush",
      "Ball joint & tie rod replacement",
      "Strut mount & bush replacement",
      "Ride height & alignment correction",
    ],
  },
  {
    title: "Insurance & Claim Support",
    icon: "ShieldCheck" as const,
    badge: "Cashless",
    features: [
      "Cashless claim processing",
      "Accident & damage assessment",
      "Direct insurer tie-ups (20+ companies)",
      "Hassle-free documentation support",
      "Pickup & drop during claim repairs",
    ],
  },
] as const;

// ─── Stats ───────────────────────────────────────────────
export const STATS = [
  { value: "10+", label: "Years of Experience" },
  { value: "15K+", label: "Cars Serviced" },
  { value: "50+", label: "Expert Mechanics" },
  { value: "4.9★", label: "Google Rating" },
] as const;

// ─── Testimonials ────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    car: "Hyundai Creta",
    text: "Exceptional service! My Creta feels brand new after the full detailing. The team is professional and transparent with pricing.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    car: "Maruti Swift",
    text: "Best AC service I've ever had. They diagnosed the issue in minutes and the cooling is perfect now. Highly recommended!",
    rating: 5,
  },
  {
    name: "Anil Reddy",
    car: "Toyota Fortuner",
    text: "I've been bringing my Fortuner here for 3 years. Consistent quality, fair pricing, and they always go the extra mile.",
    rating: 5,
  },
] as const;
