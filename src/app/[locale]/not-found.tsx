import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations("notFound");

  return (
    <section className="min-h-screen bg-dark flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-gold/20 mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">{t("title")}</h1>
        <p className="text-white/75 mb-10 max-w-md mx-auto">{t("description")}</p>
        <Link
          href={`/${locale}`}
          className="inline-flex items-center justify-center px-8 py-4 bg-gold text-dark text-base font-bold rounded-xl hover:bg-gold/90 transition-colors"
        >
          {t("button")}
        </Link>
      </div>
    </section>
  );
}
