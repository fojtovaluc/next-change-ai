import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import CtaSection from "@/components/sections/CtaSection";

const icons = ["🔍", "💡", "🗺️", "🚀", "🛠️"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metaServices" });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nextchange.cz";
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `${siteUrl}/${locale}/sluzby` },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${siteUrl}/${locale}/sluzby`,
    },
  };
}

export default async function ServicesPage() {
  const locale = await getLocale();
  const t = await getTranslations("services");
  const tp = await getTranslations("servicesPage");

  const items = [
    { icon: icons[0], title: t("items.0.title"), description: t("items.0.description"), detail: t("items.0.detail") },
    { icon: icons[1], title: t("items.1.title"), description: t("items.1.description"), detail: t("items.1.detail") },
    { icon: icons[2], title: t("items.2.title"), description: t("items.2.description"), detail: t("items.2.detail") },
    { icon: icons[3], title: t("items.3.title"), description: t("items.3.description"), detail: t("items.3.detail") },
    { icon: icons[4], title: t("items.4.title"), description: t("items.4.description"), detail: t("items.4.detail") },
  ];

  return (
    <>
      {/* Page header */}
      <section className="bg-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8">
            <span className="text-gold text-sm font-medium">{tp("badge")}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {tp("title")}
          </h1>
          <p className="text-white/60 text-xl max-w-2xl">
            {tp("subtitle")}
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-offwhite py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 md:p-10 border border-slate/10 hover:border-gold/20 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="text-4xl md:mt-1">{item.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate mb-2">{item.title}</h2>
                    <p className="text-slate/60 font-medium mb-4">{item.description}</p>
                    <p className="text-slate/70 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={`/${locale}/kontakt`}
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-dark text-base font-bold rounded-xl hover:bg-gold/90 transition-colors shadow-lg shadow-gold/20"
            >
              {tp("ctaLabel")}
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
