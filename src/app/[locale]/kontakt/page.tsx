import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metaContact" });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nextchange.cz";
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `${siteUrl}/${locale}/kontakt` },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${siteUrl}/${locale}/kontakt`,
    },
  };
}

export default async function ContactPage() {
  const t = await getTranslations("contactPage");

  return (
    <section className="min-h-screen bg-dark pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          {t("title")}
        </h1>
        <div className="text-white/75 text-xl max-w-2xl mb-16 flex flex-col gap-4">
          {t("subtitle").split("\n\n").map((block, i) => (
            <p key={i}>
              {block.split("\n").map((line, j, arr) => (
                <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
              ))}
            </p>
          ))}
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email */}
          <a
            href={`mailto:${t("email")}`}
            className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/30 hover:bg-white/10 transition-all"
          >
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="text-white/70 text-sm uppercase tracking-wider mb-2">{t("emailLabel")}</div>
            <div className="text-white font-bold group-hover:underline">{t("email")}</div>
          </a>

          {/* Founder 1 LinkedIn */}
          <a
            href={t("founder1LinkedIn")}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/30 hover:bg-white/10 transition-all"
          >
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#EAB308">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <div className="text-white/70 text-sm uppercase tracking-wider mb-2">{t("linkedinLabel")}</div>
            <div className="text-white font-bold group-hover:underline">{t("founder1Name")}</div>
          </a>

          {/* Founder 2 LinkedIn */}
          <a
            href={t("founder2LinkedIn")}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/30 hover:bg-white/10 transition-all"
          >
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#EAB308">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <div className="text-white/70 text-sm uppercase tracking-wider mb-2">{t("linkedinLabel")}</div>
            <div className="text-white font-bold group-hover:underline">{t("founder2Name")}</div>
          </a>
        </div>
      </div>
    </section>
  );
}
