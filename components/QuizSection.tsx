"use client";
import { useState } from "react";
import { useReveal } from "@/lib/useReveal";

const dictionary = {
  ar: {
    badge: "اكتشف نفسك",
    title1: "اعرف مجالك في",
    title2: "الفريلانس",
    subtitle: "أجب على 6 أسئلة واكتشف المجال الأنسب لشخصيتك",
    resultHeader: "نتيجتك:",
    restartBtn: "أعد الاختبار",
    viewResult: "عرض النتيجة",
    nextBtn: "التالي ←",
    prevBtn: "← السابق",
    firstStepLabel: "خطواتك الأولى:",
    questions: [
      {
        q: "بتحب تقضي وقتك في إيه أكتر؟",
        options: [
          { letter: "A", icon: "🎨", text: "تصميم أو تعديل صور وفيديوهات" },
          { letter: "B", icon: "✍️", text: "كتابة أفكار أو محتوى" },
          { letter: "C", icon: "💻", text: "حل مشاكل أو تفكير منطقي" },
          { letter: "D", icon: "📣", text: "متابعة السوشيال ميديا والتريندات" },
        ],
      },
      {
        q: "لما حد يطلب منك تساعده، بتكون أقوى في؟",
        options: [
          { letter: "A", icon: "🎨", text: "تعمله شكل حلو وجذاب" },
          { letter: "B", icon: "✍️", text: "أكتبله كلام مقنع" },
          { letter: "C", icon: "💻", text: "أحلله المشكلة او أطلبله حاجة تقنية" },
          { letter: "D", icon: "📣", text: "أساعده يوصل لناس أكتر" },
        ],
      },
      {
        q: "أي جملة قريبة ليك؟",
        options: [
          { letter: "A", icon: "🎨", text: "بحب الإبداع والشغل البصري" },
          { letter: "B", icon: "✍️", text: "بعرف أعبر بالكلام كويس" },
          { letter: "C", icon: "💻", text: "بحب التكنولوجيا والبرامج" },
          { letter: "D", icon: "📣", text: "بحب الإقناع والتأثير في الناس" },
        ],
      },
      {
        q: "لو اتعلمت حاجة جديدة، تختار؟",
        options: [
          { letter: "A", icon: "🎨", text: "برنامج تصميم زي Photoshop" },
          { letter: "B", icon: "✍️", text: "كتابة المحتوى أو الترجمة" },
          { letter: "C", icon: "💻", text: "برمجة أو تطوير مواقع" },
          { letter: "D", icon: "📣", text: "التسويق الإلكتروني والإعلانات" },
        ],
      },
      {
        q: "مشروعك المثالي يكون عن؟",
        options: [
          { letter: "A", icon: "🎨", text: "تصميم هوية بصرية لبراند" },
          { letter: "B", icon: "✍️", text: "كتابة مقالات أو سيناريوهات" },
          { letter: "C", icon: "💻", text: "تطوير تطبيق أو موقع" },
          { letter: "D", icon: "📣", text: "إدارة حملة إعلانية" },
        ],
      },
      {
        q: "لما بتتصفح الإنترنت، بتبقى مهتم أكتر بـ؟",
        options: [
          { letter: "A", icon: "🎨", text: "أعمال التصميم الجميلة" },
          { letter: "B", icon: "✍️", text: "المقالات والمحتوى المكتوب" },
          { letter: "C", icon: "💻", text: "التطبيقات والأدوات التقنية الجديدة" },
          { letter: "D", icon: "📣", text: "الحملات التسويقية والإعلانات الإبداعية" },
        ],
      },
    ],
    results: {
      design: {
        title: "مجال التصميم 🎨",
        desc: "عندك حس بصري وإبداعي قوي! بتحب التفاصيل والشكل الجذاب، وده بيخليك مناسب جداً لمجالات زي الجرافيك ديزاين، المونتاج، وتصميم السوشيال ميديا.",
        tips: ["ابدأ بـ Canva أو Photoshop", "اعمل portfolio بأعمالك", "انضم لمجتمعات التصميم"],
        emoji: "🎨"
      },
      writing: {
        title: "مجال الكتابة ✍️",
        desc: "عندك قدرة مميزة على التعبير بالكلام! بتعرف توصل أفكارك بشكل واضح ومقنع، وده مناسب لمجالات زي كتابة المحتوى، الترجمة، والكوبي رايتينج.",
        tips: ["ابدأ بالتدريب على الكتابة يومياً", "ابني Portfolio من نماذج أعمالك", "جرب منصات المستقلين"],
        emoji: "✍️"
      },
      programming: {
        title: "مجال البرمجة 💻",
        desc: "عندك تفكير منطقي وحب للتكنولوجيا! بتستمتع بحل المشاكل وفهم الأنظمة، وده يخليك مناسب لمجالات زي تطوير المواقع والتطبيقات.",
        tips: ["ابدأ بـ HTML وCSS وJavaScript", "أكمل دورات برمجة مجانية", "اعمل مشاريع صغيرة ونزلها على GitHub"],
        emoji: "💻"
      },
      marketing: {
        title: "مجال التسويق 📣",
        desc: "عندك مهارة في التأثير على الناس وفهمهم! بتحب التريندات والتفاعل، وده مناسب لمجالات زي التسويق الرقمي وإدارة السوشيال ميديا والإعلانات.",
        tips: ["احصل على شهادة في التسويق الرقمي", "ابدأ بإدارة صفحة خاصة بك", "تعلم إعلانات Meta وGoogle"],
        emoji: "📣"
      },
    }
  },
  en: {
    badge: "Discover Yourself",
    title1: "Know Your",
    title2: "Freelance Field",
    subtitle: "Answer 6 questions and discover the best field for your personality",
    resultHeader: "Your Result:",
    restartBtn: "Restart Quiz",
    viewResult: "View Result",
    nextBtn: "Next →",
    prevBtn: "← Previous",
    firstStepLabel: "Your First Steps:",
    questions: [
      {
        q: "How do you prefer to spend your time?",
        options: [
          { letter: "A", icon: "🎨", text: "Designing or editing photos/videos" },
          { letter: "B", icon: "✍️", text: "Writing ideas or content" },
          { letter: "C", icon: "💻", text: "Solving problems or logical thinking" },
          { letter: "D", icon: "📣", text: "Following social media and trends" },
        ],
      },
      {
        q: "When someone asks for help, you excel in?",
        options: [
          { letter: "A", icon: "🎨", text: "Making it look beautiful/attractive" },
          { letter: "B", icon: "✍️", text: "Writing persuasive words" },
          { letter: "C", icon: "💻", text: "Analyzing problems or technical tasks" },
          { letter: "D", icon: "📣", text: "Helping them reach more people" },
        ],
      },
      {
        q: "Which sentence describes you best?",
        options: [
          { letter: "A", icon: "🎨", text: "I love creativity and visual work" },
          { letter: "B", icon: "✍️", text: "I can express myself well with words" },
          { letter: "C", icon: "💻", text: "I love technology and software" },
          { letter: "D", icon: "📣", text: "I love persuasion and influencing people" },
        ],
      },
      {
        q: "If you decided to learn something new, you'd choose?",
        options: [
          { letter: "A", icon: "🎨", text: "Design software like Photoshop" },
          { letter: "B", icon: "✍️", text: "Content writing or translation" },
          { letter: "C", icon: "💻", text: "Programming or web development" },
          { letter: "D", icon: "📣", text: "Digital marketing and advertising" },
        ],
      },
      {
        q: "Your ideal project would be about?",
        options: [
          { letter: "A", icon: "🎨", text: "Designing a brand identity" },
          { letter: "B", icon: "✍️", text: "Writing articles or scripts" },
          { letter: "C", icon: "💻", text: "Developing an app or website" },
          { letter: "D", icon: "📣", text: "Managing an advertising campaign" },
        ],
      },
      {
        q: "When browsing the internet, you are most interested in?",
        options: [
          { letter: "A", icon: "🎨", text: "Beautiful design works" },
          { letter: "B", icon: "✍️", text: "Articles and written content" },
          { letter: "C", icon: "💻", text: "New apps and technical tools" },
          { letter: "D", icon: "📣", text: "Marketing campaigns and creative ads" },
        ],
      },
    ],
    results: {
      design: {
        title: "Design Field 🎨",
        desc: "You have a strong visual and creative sense! You love details and attractive aesthetics, making you perfect for Graphic Design and Montage.",
        tips: ["Start with Canva or Photoshop", "Create a portfolio of your work", "Join design communities"],
        emoji: "🎨"
      },
      writing: {
        title: "Writing Field ✍️",
        desc: "You have a unique ability to express through words! You know how to communicate ideas clearly and persuasively.",
        tips: ["Practice writing daily", "Build a portfolio of samples", "Try freelance platforms"],
        emoji: "✍️"
      },
      programming: {
        title: "Programming Field 💻",
        desc: "You are a logical thinker with a love for technology! You enjoy problem-solving and understanding systems.",
        tips: ["Start with HTML, CSS, and JS", "Complete free coding courses", "Build small projects on GitHub"],
        emoji: "💻"
      },
      marketing: {
        title: "Marketing Field 📣",
        desc: "You are skilled in influencing and understanding people! You love digital trends and engagement.",
        tips: ["Get a digital marketing certificate", "Start managing your own page", "Learn Meta and Google Ads"],
        emoji: "📣"
      },
    }
  }
};

const FIELD_MAP: Record<string, string> = { A: "design", B: "writing", C: "programming", D: "marketing" };

export default function QuizSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const ref = useReveal();
  const currentDict = dictionary[lang] || dictionary["ar"];
  
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(Array(6).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [resultKey, setResultKey] = useState<string | null>(null);

  const select = (letter: string) => {
    const next = [...answers];
    next[current] = letter;
    setAnswers(next);
  };

  const nextStep = () => {
    if (current < 5) setCurrent(current + 1);
  };

  const prevStep = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const computeResult = () => {
    const tally: Record<string, number> = { design: 0, writing: 0, programming: 0, marketing: 0 };
    answers.forEach((a) => { if (a) tally[FIELD_MAP[a]]++; });
    const top = Object.keys(tally).reduce((a, b) => tally[b] > tally[a] ? b : a);
    setResultKey(top);
    setSubmitted(true);
  };

  const reset = () => {
    setAnswers(Array(6).fill(null));
    setCurrent(0);
    setResultKey(null);
    setSubmitted(false);
  };

  if (submitted && resultKey) {
    const r = (currentDict.results as any)[resultKey];
    return (
      <section id="quiz" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white border border-[#f97316]/40 rounded-2xl p-8 shadow-xl shadow-orange-500/10">
            <div className="text-6xl mb-5 animate-bounce">{r.emoji}</div>
            <h2 className="text-2xl font-black text-[#095c56] mb-2">{currentDict.resultHeader}</h2>
            <h3 className="text-3xl font-black gradient-text mb-5">{r.title}</h3>
            <p className="text-[#095c56]/70 leading-relaxed mb-6 text-base">{r.desc}</p>
            
            <div className="bg-[rgba(9,92,86,0.04)] rounded-xl p-5 mb-6 text-right border border-[#095c56]/15">
              <p className="text-[#f97316] font-bold mb-3 text-sm">{currentDict.firstStepLabel}</p>
              {r.tips.map((t: string, i: number) => (
                <div key={i} className="flex items-center gap-3 text-[#095c56]/70 text-sm mb-2">
                  <span className="text-[#f97316] font-bold">✓</span> {t}
                </div>
              ))}
            </div>
            
            <button onClick={reset} className="border border-[#095c56]/15 text-[#095c56]/70 font-bold px-6 py-2.5 rounded-xl hover:border-[#f97316] hover:text-[#f97316] transition-all text-sm">
              {currentDict.restartBtn}
            </button>
          </div>
        </div>
      </section>
    );
  }

  const q = currentDict.questions[current];

  return (
    <section id="quiz" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-8">
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-2 block">
            {currentDict.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#095c56] mb-3 leading-tight">
            {currentDict.title1} <span className="gradient-text">{currentDict.title2}</span>
          </h2>
          <p className="text-[#095c56]/65 text-base md:text-lg font-medium">{currentDict.subtitle}</p>
        </div>

        <div className="flex justify-center items-center gap-2 mb-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-[#f97316]" : i < current ? "w-4 bg-[#f97316]/40" : "w-4 bg-[#095c56]/15"}`} />
          ))}
        </div>

        <div className="bg-white border border-[#095c56]/15 rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-[#f97316] text-white text-base font-black w-9 h-9 rounded-full flex items-center justify-center shadow-md shadow-orange-500/20">
              {current + 1}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-[#095c56] leading-tight">{q.q}</h3>
          </div>
          
          <div className="grid gap-3">
            {q.options.map((opt) => (
              <button
                key={opt.letter}
                onClick={() => select(opt.letter)}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all text-right group ${answers[current] === opt.letter ? "bg-[#f97316]/8 border-[#f97316] shadow-md shadow-orange-500/5" : "bg-[rgba(9,92,86,0.04)] border-[#095c56]/15 hover:border-[#f97316]/40"}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{opt.icon}</span>
                  <span className={`text-base font-bold ${answers[current] === opt.letter ? "text-[#095c56]" : "text-[#095c56]/60 group-hover:text-[#095c56]/90"}`}>
                    {opt.text}
                  </span>
                </div>
                <span className={`w-7 h-7 rounded-full border flex items-center justify-center text-[10px] font-black transition-all ${answers[current] === opt.letter ? "bg-[#f97316] border-[#f97316] text-white" : "border-[#095c56]/15 text-[#095c56]/40 group-hover:border-[#f97316]/40"}`}>
                  {opt.letter}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <button onClick={prevStep} disabled={current === 0}
            className="border border-[#095c56]/15 text-[#095c56]/60 px-6 py-2.5 rounded-xl disabled:opacity-20 hover:border-[#f97316] hover:text-[#f97316] transition-all font-bold text-sm">
            {currentDict.prevBtn}
          </button>
          
          <span className="text-[#095c56]/40 font-mono font-bold text-sm">{current + 1} / 6</span>

          {current < 5 ? (
            <button onClick={nextStep} disabled={!answers[current]}
              className="bg-[#f97316] disabled:opacity-30 text-white px-8 py-2.5 rounded-xl font-black shadow-lg shadow-orange-500/15 hover:bg-[#ea580c] transition-all text-sm">
              {currentDict.nextBtn}
            </button>
          ) : (
            <button onClick={computeResult} disabled={!answers.every(Boolean)}
              className="bg-[#f97316] disabled:opacity-30 text-white px-8 py-2.5 rounded-xl font-black shadow-lg shadow-orange-500/15 hover:bg-[#ea580c] transition-all text-sm">
              🎯 {currentDict.viewResult}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
