"use client";
import { useReveal } from "@/lib/useReveal";

const dictionary = {
  ar: {
    badge: "استكشف مسارك",
    title1: "مجالات",
    title2: "الفريالنس",
    subtitle: "أربعة مسارات رئيسية — اختر ما يناسب شخصيتك ومهاراتك للبدء في رحلتك",
    toolsLabel: "أدوات مقترحة لبدايتك",
    fields: [
      {
        id: "design",
        icon: "🎨",
        title: "مجال التصميم",
        enTitle: "Design",
        desc: "إذا كان لديك حس بصري وإبداعي قوي وتحب التفاصيل الجمالية. مناسب جداً لمجالات الجرافيك ديزاين، المونتاج، وتصميم السوشيال ميديا.",
        tools: ["Photoshop", "Canva", "Figma"],
        color: "from-[#095c56]/10 to-[#095c56]/5",
        border: "border-[#095c56]/20",
        accent: "#095c56"
      },
      {
        id: "writing",
        icon: "✍️",
        title: "مجال الكتابة",
        enTitle: "Writing",
        desc: "لمن لديهم قدرة مميزة على التعبير بالكلام وتوصيل الأفكار بشكل مقنع. مناسب لكتابة المحتوى، الترجمة، والـ Copywriting.",
        tools: ["Notion", "Grammarly", "WordPress"],
        color: "from-[#095c56]/10 to-[#095c56]/5",
        border: "border-[#095c56]/20",
        accent: "#095c56"
      },
      {
        id: "programming",
        icon: "💻",
        title: "مجال البرمجة",
        enTitle: "Programming",
        desc: "إذا كنت تملك تفكيراً منطقياً وحباً للتكنولوجيا وتستمتع بحل المشاكل وفهم الأنظمة. مناسب لتطوير المواقع والتطبيقات.",
        tools: ["VS Code", "HTML/CSS", "JavaScript"],
        color: "from-[#095c56]/10 to-[#095c56]/5",
        border: "border-[#095c56]/20",
        accent: "#095c56"
      },
      {
        id: "marketing",
        icon: "📣",
        title: "مجال التسويق",
        enTitle: "Marketing",
        desc: "لأصحاب المهارة في التأثير على الناس وفهمهم، ومحبي التريندات والتفاعل. مناسب للتسويق الرقمي وإدارة السوشيال ميديا.",
        tools: ["Meta Ads", "Google Ads", "Google Analytics"],
        color: "from-[#f97316]/10 to-[#f97316]/5",
        border: "border-[#f97316]/20",
        accent: "#f97316"
      },
    ]
  },
  en: {
    badge: "Explore Your Path",
    title1: "Freelance",
    title2: "Fields",
    subtitle: "Four main tracks — choose what suits your personality and skills to start your journey",
    toolsLabel: "Suggested tools to start",
    fields: [
      {
        id: "design",
        icon: "🎨",
        title: "Design Field",
        enTitle: "Visual Arts",
        desc: "For those with a strong creative sense who love aesthetics. Perfect for Graphic Design, Video Editing, and Social Media design.",
        tools: ["Photoshop", "Canva", "Figma"],
        color: "from-[#095c56]/10 to-[#095c56]/5",
        border: "border-[#095c56]/20",
        accent: "#095c56"
      },
      {
        id: "writing",
        icon: "✍️",
        title: "Writing Field",
        enTitle: "Content Creation",
        desc: "For those with a unique ability to express through words. Ideal for Content Writing, Translation, and Copywriting.",
        tools: ["Notion", "Grammarly", "WordPress"],
        color: "from-[#095c56]/10 to-[#095c56]/5",
        border: "border-[#095c56]/20",
        accent: "#095c56"
      },
      {
        id: "programming",
        icon: "💻",
        title: "Programming Field",
        enTitle: "Tech Development",
        desc: "For logical thinkers who enjoy problem-solving and systems. Suitable for Web and App development.",
        tools: ["VS Code", "HTML/CSS", "JavaScript"],
        color: "from-[#095c56]/10 to-[#095c56]/5",
        border: "border-[#095c56]/20",
        accent: "#095c56"
      },
      {
        id: "marketing",
        icon: "📣",
        title: "Marketing Field",
        enTitle: "Digital Growth",
        desc: "For those skilled in influencing people and following trends. Perfect for Digital Marketing and Social Media Management.",
        tools: ["Meta Ads", "Google Ads", "Google Analytics"],
        color: "from-[#f97316]/10 to-[#f97316]/5",
        border: "border-[#f97316]/20",
        accent: "#f97316"
      },
    ]
  }
};

export default function FieldsSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const ref = useReveal();
  const current = dictionary[lang] || dictionary["ar"];

  return (
    <section id="fields" className="py-16 px-6 max-w-7xl mx-auto bg-[rgba(249,115,22,0.05)]">
      <div ref={ref} className="reveal">
        <div className="text-center mb-10">
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-2 block">
            {current.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-3 text-[#095c56]">
            {current.title1} <span className="gradient-text">{current.title2}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-[#095c56]/65">
            {current.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {current.fields.map((f, i) => (
            <div 
              key={f.id}
              className={`card-hover bg-gradient-to-br ${f.color} border ${f.border} rounded-2xl p-6 md:p-8 reveal reveal-delay-${i+1} transition-all`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl md:text-5xl drop-shadow-lg">{f.icon}</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-[#095c56]">
                    {f.title}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#095c56]/40">
                    {f.enTitle}
                  </span>
                </div>
              </div>
              
              <p className="leading-relaxed mb-5 text-sm text-[#095c56]/65">
                {f.desc}
              </p>
              
              <div className="pt-4 border-t border-[#095c56]/15">
                <p className="text-[10px] font-bold mb-3 uppercase tracking-widest text-[#095c56]/40">
                  {current.toolsLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {f.tools.map((t) => (
                    <span 
                      key={t} 
                      className="bg-white border text-xs font-bold px-3 py-1 rounded-full transition-colors hover:bg-[#f97316]/10 border-[#095c56]/15 text-[#095c56]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
