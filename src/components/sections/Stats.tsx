import { getTranslations } from "next-intl/server";

export default async function Stats() {
  const t = await getTranslations("stats");

  const stats = [
    { value: t("item1.value"), label: t("item1.label") },
    { value: t("item2.value"), label: t("item2.label") },
    { value: t("item3.value"), label: t("item3.label") },
  ];

  return (
    <section className="bg-teal py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-white/20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center sm:px-8">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
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
