import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";

export default async function CtaSection() {
  const locale = await getLocale();
  const t = await getTranslations("cta");

  return (
    <section className="bg-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto">
          {t("headline")}
        </h2>
        <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
          {t("subheadline")}
        </p>
        <Link
          href={`/${locale}/kontakt`}
          className="inline-flex items-center justify-center px-10 py-4 bg-gold text-dark text-base font-bold rounded-xl hover:bg-gold/90 transition-colors shadow-lg shadow-gold/20"
        >
          {t("button")}
        </Link>
      </div>
    </section>
  );
}
