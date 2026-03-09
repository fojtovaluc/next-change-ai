import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const t = await getTranslations("contactPage");

  return (
    <section className="min-h-screen bg-dark pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8">
          <span className="text-gold text-sm font-medium">{t("badge")}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          {t("title")}
        </h1>
        <p className="text-white/60 text-xl max-w-2xl mb-16">
          {t("subtitle")}
        </p>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email */}
          <a
            href={`mailto:${t("email")}`}
            className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/30 hover:bg-white/10 transition-all"
          >
            <div className="text-3xl mb-4">✉️</div>
            <div className="text-white/50 text-sm uppercase tracking-wider mb-2">{t("emailLabel")}</div>
            <div className="text-gold font-semibold group-hover:underline">{t("email")}</div>
          </a>

          {/* Founder 1 LinkedIn */}
          <a
            href={t("founder1LinkedIn")}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/30 hover:bg-white/10 transition-all"
          >
            <div className="text-3xl mb-4">💼</div>
            <div className="text-white/50 text-sm uppercase tracking-wider mb-2">{t("linkedinLabel")}</div>
            <div className="text-gold font-semibold group-hover:underline">{t("founder1Name")}</div>
          </a>

          {/* Founder 2 LinkedIn */}
          <a
            href={t("founder2LinkedIn")}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/30 hover:bg-white/10 transition-all"
          >
            <div className="text-3xl mb-4">💼</div>
            <div className="text-white/50 text-sm uppercase tracking-wider mb-2">{t("linkedinLabel")}</div>
            <div className="text-gold font-semibold group-hover:underline">{t("founder2Name")}</div>
          </a>
        </div>
      </div>
    </section>
  );
}
