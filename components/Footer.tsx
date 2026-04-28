"use client";

const dictionary = {
  ar: {
    desc: "حملة توعوية طلابية من كلية الإعلام، جامعة القاهرة. نهدف إلى نشر ثقافة العمل الحر بين شباب مصر.",
    quickLinksTitle: "روابط سريعة",
    followUsTitle: "تابعنا",
    rights: "© ٢٠٢٦ U-TURN B — كلية الإعلام، جامعة القاهرة",
    hashtag: "#يوتيرن_أول_عند_كاريرك",
    links: [
      { name: "من نحن", href: "#about" },
      { name: "المجالات", href: "#fields" },
      { name: "اعرف مجالك", href: "#quiz" },
      { name: "قصص نجاح", href: "#stories" },
      { name: "الأنشطة", href: "#activities" },
      { name: "تواصل معنا", href: "#contact" },
    ],
    socials: [
      { name: "فيسبوك", href: "https://www.facebook.com/share/1DsBwyJMG1/" },
      { name: "إنستجرام", href: "https://www.instagram.com/u.turn.b" },
      { name: "تيك توك", href: "https://www.tiktok.com/@uturnnb" },
    ]
  },
  en: {
    desc: "A student awareness campaign from the Faculty of Mass Communication, Cairo University. We aim to spread freelance culture among Egyptian youth.",
    quickLinksTitle: "Quick Links",
    followUsTitle: "Follow Us",
    rights: "© 2026 U-TURN B — Faculty of Mass Comm, Cairo University",
    hashtag: "#UTURN_B",
    links: [
      { name: "About", href: "#about" },
      { name: "Fields", href: "#fields" },
      { name: "Quiz", href: "#quiz" },
      { name: "Stories", href: "#stories" },
      { name: "Activities", href: "#activities" },
      { name: "Contact", href: "#contact" },
    ],
    socials: [
      { name: "Facebook", href: "https://www.facebook.com/share/1DsBwyJMG1/" },
      { name: "Instagram", href: "https://www.instagram.com/u.turn.b" },
      { name: "TikTok", href: "https://www.tiktok.com/@uturnnb" },
    ]
  }
};

const Icons = {
  fb: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  ),
  ig: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  ),
  tk: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31.036 2.512.335 3.6.895a7.443 7.443 0 0 1-1.34 2.898c-1.12.202-2.147.288-3.147.234a.14.14 0 0 0-.154.141v12.284c0 2.45-1.748 4.613-4.17 4.95a5.016 5.016 0 0 1-5.69-4.887c-.01-1.758 1.15-3.325 2.82-3.805a4.98 4.98 0 0 1 2.21-.085c.13.025.26-.06.26-.195V13.3c0-.115-.08-.21-.19-.234a9.145 9.145 0 0 0-1.96-.217 9.04 9.04 0 0 0-9.04 9.04c0 4.993 4.047 9.04 9.04 9.04a9.04 9.04 0 0 0 9.04-8.815V7.126a11.144 11.144 0 0 0 4.79 1.488c.11.008.204-.08.204-.19V5.04c0-.1-.08-.184-.176-.19a7.065 7.065 0 0 1-4.717-2.137c-.125-.13-.25-.268-.364-.413a.14.14 0 0 0-.21-.019l-1.93 1.94a.14.14 0 0 0-.012.186 9.42 9.42 0 0 0 1.25 1.411c-.13-.004-.26-.008-.39-.008h-2.185a.14.14 0 0 1-.14-.14V.16a.14.14 0 0 0-.14-.14h-2.18a.14.14 0 0 0-.14.14v.02z"/></svg>
  )
};

export default function Footer({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const current = dictionary[lang] || dictionary["ar"];

  return (
    <footer className="bg-[#095c56] border-t border-white/10 pt-14 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <span className="text-xl font-black text-white">U-TURN <span className="text-[#f97316]">B</span></span>
            </div>
            <p className="text-white/60 text-xs leading-relaxed mb-4">{current.desc}</p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">{current.quickLinksTitle}</h4>
            <div className="grid grid-cols-2 gap-3">
              {current.links.map((link) => (
                <a key={link.name} href={link.href} className="text-white/50 hover:text-[#f97316] text-xs transition-colors">{link.name}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">{current.followUsTitle}</h4>
            <div className="space-y-3">
              {current.socials.map((social, i) => {
                const Icon = i === 0 ? Icons.fb : i === 1 ? Icons.ig : Icons.tk;
                return (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group">
                    <span className="text-[#f97316] opacity-70 group-hover:opacity-100 transition-opacity"><Icon /></span>
                    <span className="text-xs font-bold">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-[10px] font-medium">{current.rights}</p>
          <span className="text-[#f97316] text-[10px] font-black tracking-tighter">{current.hashtag}</span>
        </div>
      </div>
    </footer>
  );
}
