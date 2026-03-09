import { getTranslations } from "next-intl/server";

const icons = ["🔍", "💡", "🗺️", "🚀", "🛠️"];

export default async function Services() {
  const t = await getTranslations("services");

  const items = [
    { icon: icons[0], title: t("items.0.title"), description: t("items.0.description") },
    { icon: icons[1], title: t("items.1.title"), description: t("items.1.description") },
    { icon: icons[2], title: t("items.2.title"), description: t("items.2.description") },
    { icon: icons[3], title: t("items.3.title"), description: t("items.3.description") },
    { icon: icons[4], title: t("items.4.title"), description: t("items.4.description") },
  ];

  return (
    <section className="bg-offwhite py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate mb-4">
            {t("title")}
          </h2>
          <p className="text-slate/80 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate/10 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all group"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-slate mb-3 group-hover:text-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-slate/80 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
