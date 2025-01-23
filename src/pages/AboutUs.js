import Section1 from "components/AboutUs/Section1";
import Section2 from "components/AboutUs/Section2";
import SEO from "components/SEO";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO
        title="About Us - Veer"
        description="Our mission is to empower drivers with the skills, knowledge, and confidence to navigate real-world driving scenarios effectively. By enhancing driving literacy and competence, we strive to foster safer roads and contribute to a culture of responsible and skilled driving."
        name="Veer - World-Class Driver Training Platform"
        type="website"
      />
      <Section1 />
      <Section2 />
    </>
  );
};

export default AboutUs;
