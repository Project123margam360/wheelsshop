import Hero from "@/components/Hero";
import BrandsStrip from "@/components/BrandsStrip";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSteps from "@/components/ProcessSteps";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandsStrip />
      <ServicesGrid />
      <ProcessSteps />
      <About />
      <Testimonials />
      <CTABanner />
      <Contact />
    </>
  );
}
