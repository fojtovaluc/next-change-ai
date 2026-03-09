import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";

export default async function Hero() {
  const locale = await getLocale();
  const t = await getTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-2xl" style={{ willChange: "auto" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-teal/5 rounded-full blur-2xl" style={{ willChange: "auto" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-medium">{t("badge")}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gold leading-tight mb-4">
            {t("headline")}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl">
            {t("subheadline")}
          </p>

          {/* Value points */}
          <ul className="flex flex-col gap-3 mb-10">
            {(t.raw("valuePoints") as string[]).map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-white/85">
                <span className="text-gold mt-0.5">✔</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${locale}/sluzby`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white text-base font-semibold rounded-xl border border-white/20 hover:bg-white/10 transition-colors"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
