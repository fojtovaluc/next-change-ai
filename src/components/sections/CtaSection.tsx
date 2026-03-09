import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

export default async function CtaSection() {
  const t = await getTranslations("cta");
  const locale = await getLocale();

  return (
    <section className="bg-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto">
          {t("headline")}
        </h2>
        <p className="text-[#EAB308] text-lg max-w-xl mx-auto mb-8">
          {t("subheadline")}
        </p>
        <Link
          href={`/${locale}/kontakt`}
          className="inline-block bg-[#EAB308] text-[#0F172A] font-semibold px-8 py-3 rounded-lg hover:bg-[#EAB308]/90 transition-colors"
        >
          {t("button")}
        </Link>
      </div>
    </section>
  );
}
