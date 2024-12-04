import HeroSection from "components/Solutions/HeroSection";
import Section2 from "components/Solutions/Section2";
import Section3 from "components/Solutions/Section3";
import { useEffect } from "react";

const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection />
      <Section2 />
      <Section3 />
    </>
  );
};

export default Solutions;
