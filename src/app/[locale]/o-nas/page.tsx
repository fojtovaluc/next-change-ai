import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";

export default async function AboutPage() {
  const locale = await getLocale();
  const t = await getTranslations("aboutPage");
  const tNav = await getTranslations("nav");

  const whyItems = [
    t("whyUs.items.0"),
    t("whyUs.items.1"),
    t("whyUs.items.2"),
    t("whyUs.items.3"),
  ];

  return (
    <>
      {/* Page header */}
      <section className="bg-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8">
            <span className="text-gold text-sm font-medium">{t("badge")}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-white/60 text-xl max-w-2xl">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-offwhite py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Founder 1 */}
            <div className="bg-white rounded-2xl p-8 border border-slate/10">
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-teal/20 border-2 border-teal/30 flex items-center justify-center mb-6">
                <span className="text-3xl">👩</span>
              </div>
              <h2 className="text-xl font-bold text-slate mb-1">{t("founder1.name")}</h2>
              <p className="text-gold text-sm font-semibold mb-4">{t("founder1.role")}</p>
              <div className="flex flex-col gap-3">
                {t("founder1.bio").split("\n\n").map((para, i) => (
                  <p key={i} className="text-slate/60 leading-relaxed text-sm">{para}</p>
                ))}
              </div>
            </div>

            {/* Founder 2 */}
            <div className="bg-white rounded-2xl p-8 border border-slate/10">
              <div className="w-20 h-20 rounded-full bg-gold/10 border-2 border-gold/20 flex items-center justify-center mb-6">
                <span className="text-3xl">👩</span>
              </div>
              <h2 className="text-xl font-bold text-slate mb-1">{t("founder2.name")}</h2>
              <p className="text-gold text-sm font-semibold mb-4">{t("founder2.role")}</p>
              <div className="flex flex-col gap-3">
                {t("founder2.bio").split("\n\n").map((para, i) => (
                  <p key={i} className="text-slate/60 leading-relaxed text-sm">{para}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Why us */}
          <div className="bg-dark rounded-2xl p-10">
            <h2 className="text-2xl font-bold text-white mb-8">{t("whyUs.title")}</h2>
            <ul className="flex flex-col gap-4">
              {whyItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gold mt-1">✓</span>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-center">
            <Link
              href={`/${locale}/kontakt`}
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-dark text-base font-bold rounded-xl hover:bg-gold/90 transition-colors shadow-lg shadow-gold/20"
            >
              {tNav("cta")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
