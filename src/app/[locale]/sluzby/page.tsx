import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import CtaSection from "@/components/sections/CtaSection";

type ServiceItem = {
  title: string;
  description: string;
  bullets: string[];
  conclusion: string;
};

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
  const items = t.raw("items") as ServiceItem[];

  return (
    <>
      {/* Page header */}
      <section className="bg-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-white/80 text-xl max-w-2xl">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-offwhite py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 md:p-10 border border-slate/10 border-l-4"
                style={{ borderLeftColor: "#4A8B8B" }}
              >
                {/* Number + title */}
                <div className="flex items-baseline gap-3 mb-3">
                  <span
                    className="text-xl font-bold leading-none"
                    style={{ color: "#4A8B8B" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl font-bold text-[#4A8B8B]">{item.title}</h2>
                </div>

                <p className="text-slate/75 mb-5">{item.description}</p>

                <ul className="flex flex-col gap-2 mb-5">
                  {item.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate/70">
                      <span className="text-[#4A8B8B] mt-0.5 font-bold">–</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <p
                  className="text-base font-bold border-t border-slate/10 pt-4"
                  style={{ color: "#4A8B8B" }}
                >
                  {item.conclusion}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xl font-semibold text-[#1E293B]">
            {t("footer")}
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
