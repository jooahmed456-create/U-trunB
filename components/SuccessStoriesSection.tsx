"use client";
import { useState } from "react";
import { useReveal } from "@/lib/useReveal";
import Modal from "@/components/Modal";

const stories = [
  {
    name: "كارولين ديفيدسون Carolyn Davidson",
    role: "Graphic Designer",
    desc: "مصممة فريلانسر صممت شعار Nike الشهير مقابل أجر بسيط، ليصبح لاحقًا من أشهر الشعارات عالميًا.",
    fullDesc: "كارولين ديفيدسون هي مصممة جرافيك فريلانسر أمريكية اشتهرت بتصميم شعار Nike الشهير 'Swoosh' عام 1971. في ذلك الوقت، كانت طالبة جامعية وتعمل كفريلانسر. صممت الشعار مقابل مبلغ بسيط لم يتجاوز 35 دولاراً، ليصبح لاحقاً واحداً من أشهر وأكثر الشعارات قيمة في العالم، حيث أصبحت Nike شركة عالمية عملاقة. قصتها تُعدّ من أبرز الأمثلة على كيف يمكن للموهبة الفردية أن تترك بصمة خالدة في عالم التصميم.",
    link: "#",
    linkLabel: "اقرأ المزيد",
    gallery: [1, 2]
  },
  {
    name: "لوكاس ميسينغ Lucas Masing",
    role: "Videographer & Filmmaker",
    desc: "فريلانسر يعمل كـ videographer و filmmaker، تعاون مع براندات عالمية مثل Dior.",
    fullDesc: "لوكاس ميسينغ هو مخرج ومصور سينمائي فريلانسر ألماني استطاع بناء سمعته في عالم الإنتاج المرئي من خلال العمل المستقل. تعاون مع علامات تجارية عالمية رفيعة المستوى مثل Dior وغيرها من الشركات الفاخرة. يُعدّ مثالاً حياً على كيف يمكن للفريلانسر في مجال الفيديو والسينما أن يصل إلى أرفع المستويات من خلال الالتزام بالجودة وبناء علاقات مهنية قوية.",
    link: "#",
    linkLabel: "اقرأ المزيد",
    gallery: [1, 2]
  },
  {
    name: "درو ستروزان Drew Struzan",
    role: "Illustrator & Movie Poster Artist",
    desc: "فنان فريلانسر اشتهر بتصميم بوسترات أفلام أيقونية، أبرزها سلسلة Star Wars.",
    fullDesc: "درو ستروزان هو فنان أمريكي فريلانسر يُعتبر من أشهر رسامي بوسترات الأفلام في تاريخ هوليوود. اشتهر بتصميم بوسترات أفلام أيقونية مثل سلسلة Star Wars وIndiana Jones وBack to the Future وThe Goonies. على الرغم من عمله كفريلانسر، أصبحت أعماله جزءاً لا يتجزأ من ذاكرة السينما العالمية، مما يثبت أن العمل الحر يمكن أن يصل إلى قمة الإبداع والشهرة.",
    link: "#",
    linkLabel: "اقرأ المزيد",
    gallery: [1, 2]
  },
  {
    name: "سايمون أوكسلي Simon Oxley",
    role: "Graphic Designer",
    desc: "مصمم جرافيك فريلانسر أنشأ أيقونة طائر Twitter وتم شراؤها لاحقًا لتصبح شعار المنصة.",
    fullDesc: "سايمون أوكسلي هو مصمم جرافيك بريطاني يعمل كفريلانسر. خلال مسيرته، صمم أيقونة طائر أزرق صغير كجزء من مجموعة أيقونات للبيع على منصة iStock. في عام 2006، اشترت شركة Twitter هذه الأيقونة لتصبح الشعار الأصلي للمنصة، قبل أن يتم إعادة تصميمها لاحقاً. قصته تُظهر كيف يمكن للعمل الحر أن يؤدي إلى إنشاء رموز ثقافية عالمية دون قصد.",
    link: "#",
    linkLabel: "اقرأ المزيد",
    gallery: [1, 2]
  }
];

export default function SuccessStoriesSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const ref = useReveal();
  const [activeStory, setActiveStory] = useState<typeof stories[0] | null>(null);

  return (
    <section id="stories" className="py-16 bg-[rgba(9,92,86,0.06)]">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-10">
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-2 block">إلهام حقيقي</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#095c56] mb-2">
            قصص <span className="gradient-text">نجاح</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stories.map((s, i) => (
            <div
              key={i}
              onClick={() => setActiveStory(s)}
              className="bg-white border border-[#095c56]/10 rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 transition-all cursor-pointer hover:border-[#f97316]/30"
              role="button"
              tabIndex={0}
              onKeyDown={(k) => { if (k.key === "Enter") setActiveStory(s); }}
            >
              <div className="w-full aspect-[4/3] bg-[rgba(9,92,86,0.06)] border-b-2 border-dashed border-[#095c56]/10 flex items-center justify-center">
                <span className="text-[#095c56]/25 text-3xl">🖼️</span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-[#095c56] mb-1.5 leading-snug">{s.name}</h3>
                <p className="text-[#095c56]/60 text-xs leading-relaxed">{s.desc}</p>
                <span className="inline-block mt-2 text-[#f97316] text-[10px] font-bold">{lang === "ar" ? "اضغط للتفاصيل ←" : "Click for details ←"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!activeStory} onClose={() => setActiveStory(null)}>
        {activeStory && (
          <div className="p-6 md:p-8">
            <div className="w-full aspect-video bg-[rgba(9,92,86,0.06)] border-2 border-dashed border-[#095c56]/15 rounded-xl flex items-center justify-center mb-5">
              <span className="text-[#095c56]/25 text-5xl">🖼️</span>
            </div>
            
            <h3 className="text-xl font-black text-[#095c56] mb-1">{activeStory.name}</h3>
            <p className="text-[#f97316] text-xs font-bold mb-4">{activeStory.role}</p>
            <p className="text-[#095c56]/70 text-sm leading-relaxed mb-5">{activeStory.fullDesc}</p>
            
            <div className="flex items-center gap-3 mb-5">
              <a 
                href={activeStory.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#f97316] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#ea580c] transition-colors"
              >
                {activeStory.linkLabel}
              </a>
              <a 
                href={activeStory.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border border-[#095c56]/15 text-[#095c56] text-xs font-bold px-5 py-2.5 rounded-xl hover:border-[#f97316] hover:text-[#f97316] transition-colors"
              >
                {lang === "ar" ? "تابع الشخص" : "Follow Person"}
              </a>
            </div>

            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#095c56]/40 mb-3">
              {lang === "ar" ? "معرض الصور" : "Photo Gallery"}
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {activeStory.gallery.map((_, idx) => (
                <div key={idx} className="aspect-video bg-[rgba(9,92,86,0.06)] border border-dashed border-[#095c56]/15 rounded-lg flex items-center justify-center">
                  <span className="text-[#095c56]/25 text-2xl">🖼️</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
