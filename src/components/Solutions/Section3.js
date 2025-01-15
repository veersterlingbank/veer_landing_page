import LogoIcon from "assets/icons/logo-vector-color.svg";
import { ReactComponent as Solution1 } from "assets/icons/solution-icon-1.svg";
import { ReactComponent as Solution2 } from "assets/icons/solution-icon-2.svg";
import { ReactComponent as Solution3 } from "assets/icons/solution-icon-3.svg";
import { ReactComponent as Solution4 } from "assets/icons/solution-icon-4.svg";
import Value1 from "assets/images/solution-sec-2-a.webp";
import Value2 from "assets/images/solution-sec-2-b.webp";
import Value3 from "assets/images/solution-sec-2-c.webp";
import Value4 from "assets/images/solution-sec-2-d.webp";

import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const Section3 = () => {
  const values = [
    {
      icon: <Solution1 />,
      title: "Driver Proficiency Test",
      content1:
        "Veer uses multiple-choice questions to assess drivers theoretical knowledge on road signs, traffic laws, vehicle operation, and safety protocols, offering standardized testing, real-time feedback, customizable content, performance tracking, and integration with the LMS to ensure comprehensive driver training, compliance, and certification for enhanced safety and performance.",
      content2:
        "",
      image: Value1,
    },
    {
      icon: <Solution2 />,
      title: "Learning Management System",
      content1:
        "With our LMS, learners can train at their own pace and on their own time, making it convenient for those with tight schedules or those who prefer to learn in the comfort of their own home.",
      content2:
        "VEER’s curriculum is designed to cover all aspects of driver education, including road safety, defensive driving techniques, and vehicle maintenance. The holistic approach ensures that drivers are not only skilled but also knowledgeable about road rules and regulations.",
      image: Value2,
    },
    {
      icon: <Solution3 />,
      title: "Veer simulators",
      content1:
        "VEER uses advanced driving simulators that provide a risk-free environment for learners. This allows drivers to gain hands-on experience without the dangers associated with real-world driving, especially in high-traffic or hazardous conditions. ",
      content2:
        "The simulators replicate real-world driving scenarios, including various weather conditions, traffic situations, and emergency responses, helping drivers develop the skills needed to handle any situation on the road.",
      image: Value3,
    },
    {
      icon: <Solution4 />,
      title: "Telemetry solutions",
      content1:
        "VEER provides advanced tools for tracking and analyzing driver behavior and performance in real-time. This feature allows companies to monitor driver progress, identify areas for improvement, and make data-driven decisions to enhance safety and efficiency.",
      content2:
        "Unlike traditional training methods, VEER's continuous tracking ensures that drivers are consistently evaluated and supported throughout their careers, leading to better long-term performance and reduced accident rates.",
      image: Value4,
    },
  ];
  return (
    <div
      className="pt-[6rem]"
      style={{
        // height: "100%",
        // width: "100%",
        backgroundImage: `url(${LogoIcon})`,
        backgroundSize: "25%",
        backgroundPosition: "top 2rem right 3rem",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="max-w-[1350px] m-auto md:flex gap-[3rem] items-end mb-[3rem] px-[1rem] md:pl-[3rem] 2xl:p-0"
      >
        <div className="md:basis-[47%] xl:basis-[30%]">
          <p className="text-light_brand_primary font-qanelas_m">
            OUR SOLUTIONS
          </p>
          <h3 className="font-qanelas_b text-[36px] leading-[44px] mt-[1rem] mb-[1.5rem] text-[#222222]">
            Tailored Solutions for Safer, Smarter Driving
          </h3>
        </div>
        <div className="md:basis-[47%] xl:basis-[30%]">
          <p className="text-[16px] font-qanelas_m text-[#191C24] mb-8">
            Explore our range of innovative products designed to enhance driver
            safety, boost operational efficiency, and foster skill development.
          </p>
        </div>
      </motion.div>
      {values.map((item, index) => (
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          key={index}
          className="flex flex-col items-end"
        >
          <div className="bg-white rounded-tl-[50px] py-[4rem] px-[2rem] md:px-[4rem] lg:px-[2rem] 2xl:px-0 mb-[3rem] w-full lg:w-[90%]">
            <div className="max-w-[1350px] m-auto ">
              <div className="lg:flex justify-between items-center">
                <div className="basis-[40%] lg:flex gap-[1.3rem]">
                  <div>{item.icon}</div>
                  <div>
                    <h5 className="font-qanelas_b text-[24px] text-[#222222] mt-[1rem] lg:mt-0 mb-[1rem]">
                      {item.title}
                    </h5>
                    <p className="text-[#191C24] font-qanelas_m">
                      {item.content1}
                    </p>
                    <p className="text-[#191C24] font-qanelas_m mt-[15px]">
                      {item?.content2}
                    </p>
                  </div>
                </div>
                <div className="basis-[40%] mt-[1.5rem] lg:mt-0">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Section3;
