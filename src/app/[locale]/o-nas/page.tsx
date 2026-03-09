import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metaAbout" });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nextchange.cz";
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `${siteUrl}/${locale}/o-nas` },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${siteUrl}/${locale}/o-nas`,
    },
  };
}

export default async function AboutPage() {
  const locale = await getLocale();
  const t = await getTranslations("aboutPage");

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
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-white/75 text-xl max-w-2xl">
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
              <div className="w-36 h-36 rounded-full overflow-hidden mb-6 border-2 border-teal/30">
                <Image src="/lucie.png" alt="Lucie Fojtová" width={144} height={144} className="object-cover w-full h-full" />
              </div>
              <h2 className="text-xl font-bold text-slate mb-1">{t("founder1.name")}</h2>
              <p className="text-[#EAB308] text-sm font-semibold mb-4">{t("founder1.subtitle")}</p>
              <div className="flex flex-col gap-3">
                {t("founder1.bio").split("\n\n").map((para, i) => (
                  <p key={i} className="text-slate/80 leading-relaxed text-sm">
                    {para.split(/\*\*(.*?)\*\*/g).map((part, j) =>
                      j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                    )}
                  </p>
                ))}
              </div>
            </div>

            {/* Founder 2 */}
            <div className="bg-white rounded-2xl p-8 border border-slate/10">
              <div className="w-36 h-36 rounded-full overflow-hidden mb-6 border-2 border-gold/20">
                <Image src="/renata.png" alt="Renáta Kuchařová" width={144} height={144} className="object-cover w-full h-full" />
              </div>
              <h2 className="text-xl font-bold text-slate mb-1">{t("founder2.name")}</h2>
              <p className="text-[#EAB308] text-sm font-semibold mb-4">{t("founder2.subtitle")}</p>
              <div className="flex flex-col gap-3">
                {t("founder2.bio").split("\n\n").map((para, i) => (
                  <p key={i} className="text-slate/80 leading-relaxed text-sm">{para}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Why us */}
          <div className="bg-dark rounded-2xl p-10">
            <h2 className="text-2xl font-bold text-white mb-8">
              {t("whyUs.title")}
            </h2>
            <ul className="flex flex-col gap-4">
              {whyItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gold mt-1">✓</span>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
