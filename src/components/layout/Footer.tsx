import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";

export default async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");

  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-3">
              <span className="text-gold font-bold text-xl tracking-tight">Next Change</span>
              <span className="text-teal font-bold text-xl ml-1">AI</span>
            </div>
            <p className="text-white/50 text-sm max-w-xs">
              AI transformace finančních týmů. Od odborníků, kteří procesy znají zevnitř.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-3">
            <Link href={`/${locale}/sluzby`} className="text-white/60 hover:text-gold text-sm transition-colors">
              {tNav("services")}
            </Link>
            <Link href={`/${locale}/o-nas`} className="text-white/60 hover:text-gold text-sm transition-colors">
              {tNav("about")}
            </Link>
            <Link href={`/${locale}/kontakt`} className="text-white/60 hover:text-gold text-sm transition-colors">
              {tNav("contact")}
            </Link>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Next Change AI. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
