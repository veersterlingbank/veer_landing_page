import HeroSection from "components/Solutions/HeroSection";
import Section2 from "components/Solutions/Section2";
import Section3 from "components/Solutions/Section3";
import SEO from "components/SEO";
import { useEffect } from "react";

const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO
        title="Veer Solutions - Revolutionizing Driver Training For Safer Roads"
        description="VEER is an innovative digital driving solution dedicated to improving road safety through state-of-the-art technology."
        name="Veer - World-Class Driver Training Platform"
        type="website"
      />
      <HeroSection />
      <Section2 />
      <Section3 />
    </>
  );
};

export default Solutions;
