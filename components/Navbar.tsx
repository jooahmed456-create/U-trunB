"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about",      labelAr: "من نحن",      labelEn: "About" },
  { href: "#fields",     labelAr: "المجالات",     labelEn: "Fields" },
  { href: "#quiz",       labelAr: "اعرف مجالك",   labelEn: "Quiz" },
  { href: "#stories",    labelAr: "قصص نجاح",    labelEn: "Stories" },
  { href: "#faq",        labelAr: "أسئلة شائعة",  labelEn: "FAQ" },
  { href: "#activities", labelAr: "أنشطتنا",      labelEn: "Activities" },
  { href: "#resources",  labelAr: "مصادر",        labelEn: "Resources" },
  { href: "#media",      labelAr: "تغطية إعلامية", labelEn: "Media" },
  { href: "#contact",    labelAr: "تواصل معنا",   labelEn: "Contact" },
];

export default function Navbar({ lang, setLang }: { lang: "ar" | "en"; setLang: (l: "ar" | "en") => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (ar: string, en: string) => lang === "ar" ? ar : en;

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md border-b" : "bg-transparent"}`}
      style={scrolled ? { backgroundColor: "var(--nav-bg)", borderColor: "var(--border)" } : {}}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#hero" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-7 h-7">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 8 L32 22 Q32 32 22 32 L8 32" stroke="#095c56" strokeWidth="4" strokeLinecap="round"/>
              <path d="M14 26 L8 32 L14 38" stroke="#f97316" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-black text-lg" style={{ color: "var(--text-primary)" }}>
            U-TURN <span style={{ color: "#f97316" }}>B</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-4">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link text-xs font-medium">{t(l.labelAr, l.labelEn)}</a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <div className="lang-pill" onClick={() => setLang(lang === "ar" ? "en" : "ar")} role="button" aria-label="Switch language">
            <span className={lang === "ar" ? "active-lang" : ""}>AR</span>
            <span className={lang === "en" ? "active-lang" : ""}>EN</span>
          </div>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden flex flex-col gap-1 p-2" aria-label="Toggle menu">
          <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} style={{ background: "var(--text-primary)" }} />
          <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} style={{ background: "var(--text-primary)" }} />
          <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} style={{ background: "var(--text-primary)" }} />
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden border-t" style={{ backgroundColor: "var(--nav-bg)", borderColor: "var(--border)" }}>
          <div className="flex items-center justify-center gap-3 px-6 pt-3 pb-2">
            <div className="lang-pill" onClick={() => setLang(lang === "ar" ? "en" : "ar")} role="button">
              <span className={lang === "ar" ? "active-lang" : ""}>AR</span>
              <span className={lang === "en" ? "active-lang" : ""}>EN</span>
            </div>
          </div>
          <hr style={{ borderColor: "var(--border)" }} className="mx-6" />
          <div className="px-6 py-2">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="block py-2.5 font-medium border-b last:border-0 transition-colors text-xs"
                style={{ color: "var(--text-secondary)", borderColor: "var(--border)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f97316")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {t(l.labelAr, l.labelEn)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
