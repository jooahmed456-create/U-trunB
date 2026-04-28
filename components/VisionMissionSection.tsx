"use client";
import { useReveal } from "@/lib/useReveal";

const dictionary = {
  ar: {
    badge: "رؤيتنا ورسالتنا",
    title1: "الرؤية",
    title2: "الرسالة",
    visionTitle: "الرؤية",
    visionDesc: "مجتمع يقدر العمل الحر ويعتمد عليه كمسار مهني أساسي لتحقيق الإبداع والاستقلال المالي.",
    missionTitle: "الرسالة",
    missionDesc: "نقدم محتوى تعليمياً وفعاليات ملهمة وموارد عملية لتمكين الشباب من اتخاذ خطوات واثقة نحو بناء مستقبل مهني مستقل وناجح.",
    goalsTitle: "أهدافنا",
    goals: [
      { text: "نشر الوعي بأهمية العمل الحر", icon: "🔍" },
      { text: "تصحيح المفاهيم الخاطئة", icon: "💡" },
      { text: "تأهيل الشباب بالمهارات المطلوبة", icon: "🛠️" },
      { text: "تعريف الشباب بالفرص العالمية", icon: "🌍" },
      { text: "دعم مسيرة مهنية ناجحة", icon: "🚀" },
      { text: "ربط الفريلانسرز ببعضهم", icon: "🤝" }
    ]
  },
  en: {
    badge: "Vision & Mission",
    title1: "Vision",
    title2: "Mission",
    visionTitle: "Vision",
    visionDesc: "A society that values freelancing and relies on it as a primary career path to achieve creativity and financial independence.",
    missionTitle: "Mission",
    missionDesc: "Providing educational content, inspiring events, and practical resources to empower youth to take confident steps towards an independent career.",
    goalsTitle: "Our Goals",
    goals: [
      { text: "Spread awareness of freelancing", icon: "🔍" },
      { text: "Correct misconceptions", icon: "💡" },
      { text: "Equip youth with required skills", icon: "🛠️" },
      { text: "Introduce global opportunities", icon: "🌍" },
      { text: "Support successful careers", icon: "🚀" },
      { text: "Connect freelancers together", icon: "🤝" }
    ]
  }
};

export default function VisionMissionSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const ref = useReveal();
  const current = dictionary[lang] || dictionary["ar"];

  return (
    <section id="vision" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-10">
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-2 block">
            {current.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#095c56]">
            {current.title1} <span className="text-[#095c56]/30">&</span> {current.title2}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-5">
          <div className="bg-white border border-[#095c56]/15 rounded-xl p-6 hover:border-[#f97316]/40 transition-colors shadow-sm card-hover">
            <div className="text-3xl mb-3">👁️</div>
            <h3 className="text-lg font-bold text-[#095c56] mb-2">{current.visionTitle}</h3>
            <p className="text-[#095c56]/65 text-sm leading-relaxed">{current.visionDesc}</p>
          </div>
          <div className="bg-white border border-[#095c56]/15 rounded-xl p-6 hover:border-[#f97316]/40 transition-colors shadow-sm card-hover">
            <div className="text-3xl mb-3">✉️</div>
            <h3 className="text-lg font-bold text-[#095c56] mb-2">{current.missionTitle}</h3>
            <p className="text-[#095c56]/65 text-sm leading-relaxed">{current.missionDesc}</p>
          </div>
        </div>

        <div className="bg-white border border-[#095c56]/15 rounded-xl p-6 shadow-sm">
          <div className="text-center mb-5">
            <span className="text-3xl block mb-2">🎯</span>
            <h3 className="text-lg font-bold text-[#095c56]">{current.goalsTitle}</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {current.goals.map((g, i) => (
              <div key={i} className="bg-[rgba(9,92,86,0.04)] border border-[#095c56]/10 p-3 rounded-lg flex items-center gap-2 hover:border-[#f97316]/30 transition-colors">
                <span className="text-base">{g.icon}</span>
                <span className="text-[#095c56]/80 text-xs font-semibold">{g.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
