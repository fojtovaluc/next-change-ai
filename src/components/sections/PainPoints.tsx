import { getTranslations } from "next-intl/server";

type PainPointItem = { title: string; description: string };


export default async function PainPoints() {
  const t = await getTranslations("painPoints");
  const items = t.raw("items") as PainPointItem[];

  return (
    <section className="bg-[#FAFAF7] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="mb-12 max-w-3xl">
          <div className="w-10 h-1 rounded-full bg-[#EAB308] mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E293B] leading-snug">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 bg-white border border-gray-200 shadow-sm flex flex-col gap-3"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-lg font-bold text-[#4A8B8B] tracking-widest flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-[#4A8B8B] leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-[#1E293B]/65 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-lg font-semibold text-[#4A8B8B]">
          {t("footer")}
        </p>
      </div>
    </section>
  );
}
