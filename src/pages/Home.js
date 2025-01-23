import HeroSection from "components/Home/HeroSection";
import Section2 from "components/Home/Section2";
import Section3 from "components/Home/Section3";
import Section4 from "components/Home/Section4";
import Section5 from "components/Home/Section5";
import Section6 from "components/Home/Section6";
import SEO from "components/SEO";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO
        title="Veer - World-Class Driver Training Platform"
        description="Revolutionizing driver training through digital learning solutions, cutting-edge simulators, real-time driver behaviour tracking, and automated driver certifications to create safer roads for all."
        name="Veer - World-Class Driver Training Platform"
        type="website"
      />
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </>
  );
};

export default Home;
