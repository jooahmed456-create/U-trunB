"use client";
import { useReveal } from "@/lib/useReveal";

const dictionary = {
  ar: {
    badge: "حملة توعوية طلابية — كلية الإعلام، جامعة القاهرة",
    title1: "حوّل مسارك",
    title2: "نحو الحرية المهنية",
    subtitle: "نسعى إلى نشر ثقافة العمل الحر بين الشباب وتمكينهم من بناء مستقبل مهني مستقل من خلال المعرفة، الأدوات، وقصص الإلهام الحقيقية",
    cta1: "اعرف مجالك في الفريلانس 🎯",
    cta2: "تعرف علينا ←",
    stats: [ { num: "٤", label: "مجالات رئيسية" }, { num: "+١٢", label: "أداة ومنصة" }, { num: "٦", label: "قصص نجاح" } ]
  },
  en: {
    badge: "Student Awareness Campaign — Mass Comm, Cairo University",
    title1: "Turn Your Path",
    title2: "To Professional Freedom",
    subtitle: "We aim to spread freelance culture among youth and empower them to build an independent career through knowledge, tools, and real inspiration.",
    cta1: "Discover Your Field 🎯",
    cta2: "About Us ←",
    stats: [ { num: "4", label: "Main Fields" }, { num: "12+", label: "Tools & Platforms" }, { num: "6", label: "Success Stories" } ]
  }
};

export default function HeroSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const ref = useReveal();
  const current = dictionary[lang] || dictionary["ar"];

  return (
    <section id="hero" className="relative pt-24 pb-14 px-6 min-h-[85vh] flex flex-col justify-center bg-white overflow-hidden">
      {/* Animated background orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#f97316]/8 blur-[100px] rounded-full pointer-events-none animate-float" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div ref={ref} className="reveal">
          <span className="inline-block bg-white border border-[#095c56]/20 text-[#f97316] text-xs md:text-sm font-bold px-4 py-1.5 rounded-full mb-5 shadow-sm animate-fade-in-up">
            {current.badge}
          </span>
          
          <h1 className="text-5xl md:text-6xl font-black text-[#095c56] mb-5 leading-tight animate-fade-in-up animate-delay-2">
            {current.title1} <br />
            <span className="gradient-text">{current.title2}</span>
          </h1>
          
          <p className="text-base md:text-lg text-[#095c56]/65 mb-6 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animate-delay-3">
            {current.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 animate-fade-in-up animate-delay-4">
            <a href="#quiz" className="w-full sm:w-auto bg-[#f97316] text-white px-6 py-3 rounded-full font-bold hover:bg-[#ea580c] transition-all shadow-lg shadow-orange-500/15 text-sm hover-scale hover-lift">
              {current.cta1}
            </a>
            <a href="#about" className="w-full sm:w-auto bg-transparent border border-[#095c56]/20 text-[#095c56] px-6 py-3 rounded-full font-bold hover:border-[#f97316] hover:text-[#f97316] transition-all text-sm hover-scale">
              {current.cta2}
            </a>
          </div>
          
          <div className="grid grid-cols-3 gap-4 border-t border-[#095c56]/15 pt-8 animate-fade-in-up animate-delay-5">
            {current.stats.map((s, i) => (
              <div key={i} className="group cursor-default">
                <div className="text-2xl md:text-3xl font-black text-[#f97316] mb-1 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {s.num}
                </div>
                <div className="text-[#095c56]/50 text-xs font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
