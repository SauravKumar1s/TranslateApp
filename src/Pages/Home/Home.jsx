import FeatureSection from "./FeatureSection";

import React from "react";
import Translate from "../../components/Translate";
import AboutSection from "./AboutSection";
import FAQSection from "./FAQSection";
import PhrasesSection from "./PhrasesSection";
export default function Home() {
  return (
    <main>
      <Translate />
      <AboutSection />
      <FeatureSection />
      <PhrasesSection />
      <FAQSection />
    </main>
  );
}
