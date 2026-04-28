"use client";
import { useReveal } from "@/lib/useReveal";

const dictionary = {
  ar: {
    badge: "ما تحتاج معرفته",
    title1: "المميزات",
    title2: "التحديات",
    advHeader: "مميزات العمل الحر",
    chalHeader: "تحديات العمل الحر",
    successQuote: "💡 النجاح في العمل الحر يعتمد على وعيك بالمميزات والتحديات واستعدادك للتطور والتكيّف",
    advantages: [
      { icon: "🕐", title: "حرية الوقت والمكان", body: "تستطيع العمل من أي مكان وفي أي وقت يناسبك." },
      { icon: "🎛", title: "تحكم كامل في اختياراتك", body: "أنت من تختار المشاريع والعملاء الذين تفضّل العمل معهم." },
      { icon: "📈", title: "إمكانية دخل أعلى", body: "كلما طوّرت مهاراتك وبنيت سمعة قوية، زاد دخلك." },
      { icon: "🌱", title: "تطوير مستمر للمهارات", body: "التنوع في المشاريع يساعدك على تعلم مهارات جديدة دائماً." },
      { icon: "⚖️", title: "تحقيق التوازن", body: "تستطيع تنظيم وقتك بما يناسب حياتك الشخصية." },
    ],
    challenges: [
      { icon: "💰", title: "عدم استقرار الدخل", body: "الدخل في العمل الحر غير ثابت وقد يختلف من شهر لآخر." },
      { icon: "⏱", title: "إدارة الوقت والانضباط", body: "تحتاج إلى تنظيم وقتك والالتزام بدون وجود مدير." },
      { icon: "👥", title: "الحصول على عملاء", body: "في البداية قد يكون من الصعب بناء قاعدة عملاء." },
      { icon: "🧘", title: "التعامل مع الضغط والوحدة", body: "العمل الفردي قد يسبب ضغطاً نفسياً وشعوراً بالعزلة." },
      { icon: "✅", title: "مسؤولية أكبر", body: "أنت المسؤول عن التسويق لنفسك وتنفيذ العمل معاً." },
    ]
  },
  en: {
    badge: "What You Need to Know",
    title1: "Advantages",
    title2: "Challenges",
    advHeader: "Freelancing Advantages",
    chalHeader: "Freelancing Challenges",
    successQuote: "💡 Success in freelancing depends on your awareness of the advantages and challenges and your readiness to evolve and adapt.",
    advantages: [
      { icon: "🕐", title: "Time and Location Freedom", body: "You can work from anywhere and at any time that suits you." },
      { icon: "🎛", title: "Full Control over Choices", body: "You choose the projects and clients you prefer to work with." },
      { icon: "📈", title: "Potential for Higher Income", body: "As you develop your skills and build a strong reputation, your income increases." },
      { icon: "🌱", title: "Continuous Skill Development", body: "Variety in projects helps you always learn new skills." },
      { icon: "⚖️", title: "Achieving Balance", body: "You can organize your time to fit your personal life." },
    ],
    challenges: [
      { icon: "💰", title: "Income Instability", body: "Freelance income is inconsistent and may vary from month to month." },
      { icon: "⏱", title: "Time Management and Discipline", body: "You need to organize your time and commit without a manager." },
      { icon: "👥", title: "Getting Clients", body: "In the beginning, it can be difficult to build a client base." },
      { icon: "🧘", title: "Dealing with Pressure and Loneliness", body: "Working alone can cause psychological pressure and a sense of isolation." },
      { icon: "✅", title: "Greater Responsibility", body: "You are responsible for marketing yourself and executing the work." },
    ]
  }
};

export default function AdvantagesSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const ref = useReveal();
  const current = dictionary[lang] || dictionary["ar"];

  return (
    <section id="advantages" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-10">
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-2 block">
            {current.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#095c56]">
            {current.title1} <span className="text-[#095c56]/30">&</span> {current.title2}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 border bg-white border-[#095c56]/15 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-[#095c56]/10 flex items-center justify-center text-[#095c56] text-lg">✓</div>
              <h3 className="text-xl font-black text-[#095c56]">{current.advHeader}</h3>
            </div>
            <div className="space-y-3">
              {current.advantages.map((a, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-lg border transition-colors group bg-[rgba(9,92,86,0.04)] border-[#095c56]/10 hover:border-[#095c56]/25">
                  <span className="text-xl shrink-0">{a.icon}</span>
                  <div>
                    <div className="font-semibold mb-0.5 text-[#095c56] text-sm">{a.title}</div>
                    <div className="text-xs text-[#095c56]/60">{a.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-6 border bg-white border-[#095c56]/15 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-[#f97316]/10 flex items-center justify-center text-[#f97316] text-lg">⚡</div>
              <h3 className="text-xl font-black text-[#095c56]">{current.chalHeader}</h3>
            </div>
            <div className="space-y-3">
              {current.challenges.map((c, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-lg border transition-colors group bg-[rgba(9,92,86,0.04)] border-[#095c56]/10 hover:border-[#f97316]/25">
                  <span className="text-xl shrink-0">{c.icon}</span>
                  <div>
                    <div className="font-semibold mb-0.5 text-[#095c56] text-sm">{c.title}</div>
                    <div className="text-xs text-[#095c56]/60">{c.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center p-5 border rounded-xl bg-[rgba(249,115,22,0.04)] border-[#f97316]/20">
          <p className="text-[#f97316] font-semibold text-base">{current.successQuote}</p>
        </div>
      </div>
    </section>
  );
}
