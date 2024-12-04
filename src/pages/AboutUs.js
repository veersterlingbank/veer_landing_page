import Section1 from "components/AboutUs/Section1";
import Section2 from "components/AboutUs/Section2";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Section1 />
      <Section2 />
    </>
  );
};

export default AboutUs;
