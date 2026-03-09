import { getTranslations } from "next-intl/server";

type Step = {
  number: string;
  title: string;
  headline: string;
  description: string;
  items: string[];
  conclusion: string;
};

export default async function HowWeHelp() {
  const t = await getTranslations("howWeHelp");
  const steps = t.raw("steps") as Step[];

  return (
    <section className="bg-[#FAFAF7] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-6 max-w-3xl">
          <div className="w-10 h-1 rounded-full bg-[#EAB308] mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E293B] mb-6">
            {t("title")}
          </h2>
          <p className="text-[#1E293B]/65 text-base leading-relaxed whitespace-pre-line">
            {t("subtitle")}
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl p-6 bg-white border border-gray-200 shadow-sm flex flex-col gap-4"
            >
              {/* Number + title */}
              <div className="flex items-baseline gap-3 whitespace-nowrap">
                <span className="text-xl font-bold text-[#EAB308] leading-none">
                  {step.number}
                </span>
                <span className="text-xl font-bold text-[#EAB308] leading-none">
                  {step.title}
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-[#1E293B] font-semibold text-base leading-snug">
                {step.headline}
              </h3>

              {/* Bullet items */}
              <ul className="flex flex-col gap-1.5">
                {step.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-[#1E293B]/70">
                    <span className="text-[#4A8B8B] mt-0.5">–</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Conclusion */}
              <p className="text-sm text-[#1E293B]/50 leading-relaxed border-t border-gray-200 pt-4 mt-auto">
                {step.conclusion}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-lg font-semibold text-[#EAB308]">
          {t("footer")}
        </p>
      </div>
    </section>
  );
}
