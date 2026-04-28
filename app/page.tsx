"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import FieldsSection from "@/components/FieldsSection";
import QuizSection from "@/components/QuizSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import MediaSection from "@/components/MediaSection";
import FaqSection from "@/components/FaqSection";
import ResourcesSection from "@/components/ResourcesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  // كود حركة الظهور (Reveal)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="bg-white">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <HeroSection lang={lang} />
        <AboutSection lang={lang} />
        <VisionMissionSection lang={lang} />
        <AdvantagesSection lang={lang} />
        <FieldsSection lang={lang} />
        <QuizSection lang={lang} />
        <SuccessStoriesSection lang={lang}/>
        <ActivitiesSection lang={lang} />
        <MediaSection lang={lang} />
        <FaqSection lang={lang} />
        <ResourcesSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
