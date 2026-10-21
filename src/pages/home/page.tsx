import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Profile from "./components/Profile";
import AreasPreview from "./components/AreasPreview";
import HowItWorks from "./components/HowItWorks";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <main className="min-h-screen bg-background-50">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Profile />
      <AreasPreview />
      <HowItWorks />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}