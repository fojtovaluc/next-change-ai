import { getTranslations } from "next-intl/server";

export default async function Stats() {
  const t = await getTranslations("stats");

  const stats = [
    { value: t("big4.value"), label: t("big4.label") },
    { value: t("ssc.value"), label: t("ssc.label") },
    { value: t("countries.value"), label: t("countries.label") },
  ];

  return (
    <section className="bg-teal py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-white/20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center sm:px-8">
              <div className="text-4xl sm:text-5xl font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
