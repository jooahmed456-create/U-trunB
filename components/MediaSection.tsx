"use client";
import { useReveal } from "@/lib/useReveal";

const dictionary = {
  ar: {
    badge: "في الإعلام",
    title1: "التغطية",
    title2: "الإعلامية",
    subtitle: "رصد شامل ومستمر لكافة الأخبار والمنشورات التي تناولت حراك حملة U-TURN B",
    actionText: "اضغط لفتح الخبر الأصلي ←",
    media: [
      { outlet: "موقع الحرية", title: "الحرية — إطلاق حملة التوعية بالفريلانس لتمكين الشباب", url: "https://alhorianews.com/sh/k8rj", icon: "📰" },
      { outlet: "الأهرام المسائي", title: "الأهرام — تغطية مميزة تسلط الضوء على رسالة الحملة", url: "https://www.facebook.com/share/p/1Gd1gbmaqk/", icon: "🗞️" },
      { outlet: "المصري اليوم", title: "المصري اليوم — المبادرة ضمن جهود تمكين الشباب اقتصادياً", url: "https://www.almasryalyoum.com/news/details/4208852", icon: "📋" },
      { outlet: "القاهرة الآن", title: "جريدة القاهرة الآن — تغطية شاملة لمشروع التخرج", url: "https://alkahira-alan.blogspot.com/2026/04/u-turn-b.html", icon: "🗞️" },
      { outlet: "فيسبوك", title: "فيسبوك — نجاح ندوة دراما رمضان ٢٠٢٦ بجامعة القاهرة", url: "https://www.facebook.com/share/p/1DTXZERMuu/", icon: "🎤" },
      { outlet: "إنستجرام", title: "إنستجرام — لقطات من مبادرة دعم محاربات السرطان ببهية", url: "https://www.instagram.com/p/DV3_VnOjHvp/", icon: "📸" },
      { outlet: "فيسبوك", title: "فيسبوك — فعاليات يوم اليتيم بالتعاون مع فريق بين نبضين", url: "https://www.facebook.com/share/p/1ZVePywNf7/", icon: "🤝" },
      { outlet: "تيك توك", title: "تيك توك — محتوى توعوي سريع عن عالم العمل الحر", url: "https://www.tiktok.com/@uturnnb", icon: "📱" },
      { outlet: "فيسبوك", title: "فيسبوك — متابعة حية لأنشطة الحملة الميدانية بالجامعة", url: "https://www.facebook.com/share/p/1E8Y4BJLwA/", icon: "📱" },
      { outlet: "إنستجرام", title: "إنستجرام — كواليس مصورة وحصرية لفعاليات الفريق", url: "https://www.instagram.com/p/DXpbw9IliL4/", icon: "📸" },
      { outlet: "فيسبوك", title: "فيسبوك — ألبوم صور يوثق انطلاق فعاليات مشروعنا", url: "https://www.facebook.com/share/18ajTqVPsw/", icon: "🖼️" },
      { outlet: "فيسبوك", title: "فيسبوك — رصد لمدى انتشار وتفاعل الجمهور مع الحملة", url: "https://www.facebook.com/share/1CCFHsRiev/", icon: "📈" },
      { outlet: "فيسبوك", title: "فيسبوك — المنشور التعريفي الأول بهوية U-turn B", url: "https://www.facebook.com/share/1DsBwyJMG1/", icon: "🆔" },
      { outlet: "إنستجرام", title: "إنستجرام — الحساب الرسمي لمتابعة كافة الأنشطة", url: "https://www.instagram.com/u.turn.b", icon: "📸" },
      { outlet: "فيسبوك", title: "فيسبوك — توثيق أنشطة الفريق داخل حرم جامعة القاهرة", url: "https://www.facebook.com/share/p/1KfNuXrTeC/", icon: "🏛️" },
      { outlet: "فيسبوك", title: "فيسبوك — فعالية طلابية مميزة لمشروع تخرج الإعلام", url: "https://www.facebook.com/share/p/1ETs3X6Jyt/", icon: "🎓" }
    ]
  },
  en: {
    badge: "Media Coverage",
    title1: "Media",
    title2: "Highlights",
    subtitle: "Complete and continuous monitoring of all news and posts regarding U-TURN B campaign",
    actionText: "Click to open original source →",
    media: [
      { outlet: "Al-Horria", title: "Al-Horria — Launching Freelance Campaign for Youth", url: "https://alhorianews.com/sh/k8rj", icon: "📰" },
      { outlet: "Al-Ahram", title: "Al-Ahram — Special Coverage on Campaign Mission", url: "https://www.facebook.com/share/p/1Gd1gbmaqk/", icon: "🗞️" },
      { outlet: "Al-Masry Al-Youm", title: "Al-Masry Al-Youm — Initiative in Economic Empowerment", url: "https://www.almasryalyoum.com/news/details/4208852", icon: "📋" },
      { outlet: "Cairo Now", title: "Cairo Now — Comprehensive Graduation Project Coverage", url: "https://alkahira-alan.blogspot.com/2026/04/u-turn-b.html", icon: "🗞️" },
      { outlet: "Facebook", title: "Facebook — Success of Ramadan Drama Seminar at CU", url: "https://www.facebook.com/share/p/1DTXZERMuu/", icon: "🎤" },
      { outlet: "Instagram", title: "Instagram — Supporting Breast Cancer Survivors at Baheya", url: "https://www.instagram.com/p/DV3_VnOjHvp/", icon: "📸" },
      { outlet: "Facebook", title: "Facebook — Orphan's Day in Collaboration with Bayn Nabdayn", url: "https://www.facebook.com/share/p/1ZVePywNf7/", icon: "🤝" },
      { outlet: "TikTok", title: "TikTok — Quick Freelance Awareness Content", url: "https://www.tiktok.com/@uturnnb", icon: "📱" },
      { outlet: "Facebook", title: "Facebook — Live Updates of Field Activities at Campus", url: "https://www.facebook.com/share/p/1E8Y4BJLwA/", icon: "📱" },
      { outlet: "Instagram", title: "Instagram — Exclusive Behind the Scenes Moments", url: "https://www.instagram.com/p/DXpbw9IliL4/", icon: "📸" },
      { outlet: "Facebook", title: "Facebook — Photo Album Documenting Our Project Launch", url: "https://www.facebook.com/share/18ajTqVPsw/", icon: "🖼️" },
      { outlet: "Facebook", title: "Facebook — Monitoring Campaign Reach and Engagement", url: "https://www.facebook.com/share/1CCFHsRiev/", icon: "📈" },
      { outlet: "Facebook", title: "Facebook — First Identity Reveal of U-turn B", url: "https://www.facebook.com/share/1DsBwyJMG1/", icon: "🆔" },
      { outlet: "Instagram", title: "Instagram — Official Account for All Activities", url: "https://www.instagram.com/u.turn.b", icon: "📸" },
      { outlet: "Facebook", title: "Facebook — Documenting Team Activities at Cairo University", url: "https://www.facebook.com/share/p/1KfNuXrTeC/", icon: "🏛️" },
      { outlet: "Facebook", title: "Facebook — Special Student Event for Graduation Project", url: "https://www.facebook.com/share/p/1ETs3X6Jyt/", icon: "🎓" }
    ]
  }
};

export default function MediaSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const ref = useReveal();
  const current = dictionary[lang] || dictionary["ar"];
  const isRTL = lang === 'ar';

  return (
    <section id="media" className="py-16 overflow-hidden bg-[rgba(9,92,86,0.06)]">
      <div ref={ref} className="reveal text-center mb-10 px-6">
        <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-2 block">{current.badge}</span>
        <h2 className="text-4xl md:text-5xl font-black mb-3 leading-tight text-[#095c56]">
          {current.title1} <span className="gradient-text">{current.title2}</span>
        </h2>
        <p className="max-w-2xl mx-auto text-base text-[#095c56]/65">{current.subtitle}</p>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex py-10 animate-marquee whitespace-nowrap group-hover:pause-animation">
          {[...current.media, ...current.media].map((m, i) => (
            <a 
              key={i} 
              href={m.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mx-3 bg-white border border-[#095c56]/15 rounded-xl p-5 w-[300px] transition-all hover:border-[#f97316]/50 hover:scale-105 shadow-lg shadow-[#095c56]/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{m.icon}</span>
                <span className="text-[#095c56] font-black text-[10px] uppercase tracking-widest opacity-80">{m.outlet}</span>
              </div>
              <h3 className="text-[#095c56] text-sm font-bold leading-relaxed whitespace-normal line-clamp-2 h-10">
                {m.title}
              </h3>
              <div className="mt-4 pt-3 border-t border-[#095c56]/15 text-[#f97316] text-[10px] font-bold flex items-center justify-between">
                <span>{current.actionText}</span>
                <span className="text-base">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(${isRTL ? '50%' : '-50%'}); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 60s linear infinite;
        }
        .group-hover\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
