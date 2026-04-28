"use client";
import { useReveal } from "@/lib/useReveal";

export default function AboutSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const ref = useReveal();

  return (
    <section id="about" className="py-16 bg-[#095c56]">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal grid md:grid-cols-2 gap-10 items-center">
          {/* Text side — right in RTL */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
              من نحن
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              نحن طلاب بكلية الإعلام – جامعة القاهرة، نقدم حملة توعوية تهدف إلى نشر ثقافة العمل الحر بين الشباب، وتوضيح الفرص الحقيقية التي يتيحها هذا المجال. نسعى إلى تصحيح المفاهيم الخاطئة حول الفريلانس، وتمكين الشباب من اتخاذ خطوات واثقة نحو بناء مستقبل مهني مستقل.
            </p>
            <h3 className="text-lg font-bold text-[#f97316] mb-3">الأهداف</h3>
            <ul className="space-y-2.5">
              {[
                "تصحيح المفاهيم الخاطئة عن الفريلانس",
                "تشجيع الشباب على خوض تجربة الفريلانس",
                "توضيح مزايا وتحديات العمل الحر بشكل واقعي"
              ].map((goal, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#f97316] flex items-center justify-center text-white text-[10px] font-bold shrink-0">✓</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          {/* Image side — left in RTL */}
          <div className="w-full aspect-[4/3] bg-white/10 border-2 border-dashed border-white/20 rounded-2xl flex items-center justify-center overflow-hidden p-4">
            <img
              src="https://res.cloudinary.com/dkh59ytfc/image/upload/v1777393428/ChatGPT_Image_Apr_28_2026_07_23_36_PM_fptutl.png"
              alt="U-TURN B Campaign Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
