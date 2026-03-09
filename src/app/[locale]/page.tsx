import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import HowWeHelp from "@/components/sections/HowWeHelp";
import Stats from "@/components/sections/Stats";
import CtaSection from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <HowWeHelp />
      <Stats />
      <CtaSection />
    </>
  );
}
