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
        "Combine immersive simulator training with real-world inroad evaluations for a comprehensive driver assessment.",
      content2:
        "Our dual approach ensures drivers gain practical experience while refining critical skills, delivering a thorough evaluation that promotes safer, more confident driving on every journey.",
      image: Value1,
    },
    {
      icon: <Solution2 />,
      title: "Learning Management System",
      content1:
        "Our comprehensive driver development suite includes digital training with Veer LMS, immersive simulator sessions, and in-depth evaluations. Equip drivers with the skills and insights needed for safer, more efficient journeys.",
      content2:
        "This includes digital driver training using Veer LMS, Simulator driver training and evaluation",
      image: Value2,
    },
    {
      icon: <Solution3 />,
      title: "Veer simulators",
      content1:
        "This includes Digital driver training using Veer LMS, Simulator driver training, inroad Driver behaviour Tracking, Evaluation & Analytics.",
      content2:
        "Our all-in-one solution combines digital training on Veer LMS, hands-on simulator sessions, inroad driver behavior tracking, and comprehensive evaluation analytics. Enhance driver skills, safety, and performance with real-time insights and continuous improvement tools.",
      image: Value3,
    },
    {
      icon: <Solution4 />,
      title: "Telemetry solutions",
      content1:
        "This includes Digital driver training using Veer LMS, Simulator driver training, inroad Driver behaviour Tracking, Evaluation & Analytics.",
      content2:
        "Our all-in-one solution combines digital training on Veer LMS, hands-on simulator sessions, inroad driver behavior tracking, and comprehensive evaluation analytics. Enhance driver skills, safety, and performance with real-time insights and continuous improvement tools.",
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
