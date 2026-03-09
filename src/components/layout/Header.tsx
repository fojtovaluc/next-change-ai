"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: string) {
    // Replace /cs/ or /en/ prefix
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  }

  const navLinks = [
    { href: `/${locale}/sluzby`, label: t("services") },
    { href: `/${locale}/o-nas`, label: t("about") },
    { href: `/${locale}/kontakt`, label: t("contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-gold font-bold text-xl tracking-tight">Next Change</span>
              <span className="text-teal font-bold text-xl ml-1">AI</span>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: language switcher + CTA */}
          <div className="flex items-center gap-4">
            {/* Language switcher */}
            <div className="flex items-center gap-1 text-sm">
              <button
                onClick={() => switchLocale("cs")}
                className={`px-2 py-1 rounded transition-colors ${
                  locale === "cs"
                    ? "text-gold font-semibold"
                    : "text-white/70 hover:text-white/90"
                }`}
              >
                CS
              </button>
              <span className="text-white/50" aria-hidden="true">|</span>
              <button
                onClick={() => switchLocale("en")}
                className={`px-2 py-1 rounded transition-colors ${
                  locale === "en"
                    ? "text-gold font-semibold"
                    : "text-white/70 hover:text-white/90"
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA button */}
            <Link
              href={`/${locale}/kontakt`}
              className="hidden md:inline-flex items-center px-4 py-2 bg-gold text-dark text-sm font-semibold rounded-lg hover:bg-gold/90 transition-colors"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
