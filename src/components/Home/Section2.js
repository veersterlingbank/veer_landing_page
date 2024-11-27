import TopBg from "assets/images/section-2-bg.webp";
import { ReactComponent as Service1 } from "assets/icons/services-icon-1.svg";
import { ReactComponent as Service2 } from "assets/icons/services-icon-2.svg";
import { ReactComponent as Service3 } from "assets/icons/services-icon-3.svg";
import { ReactComponent as Service4 } from "assets/icons/services-icon-4.svg";
import Button from "components/Inputs/Button";

import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const Section2 = () => {
  const services = [
    {
      icon: <Service1 />,
      title: "LMS for Driver Training",
      content:
        "Personalized learning paths tailored to each driver’s skill level and goals for impactful, targeted training.",
    },
    {
      icon: <Service2 />,
      title: "Driver proficiency test",
      content:
        "Experience real-world driving conditions without the risk—urban, rural, and extreme weather environments.",
    },
    {
      icon: <Service3 />,
      title: "Veer Simulators",
      content:
        "VEER minimizes the carbon footprint of driver training by using eco-friendly simulators in place of traditional in-vehicle lessons",
    },
    {
      icon: <Service4 />,
      title: "Telemetry solution",
      content:
        "Track driver behavior in real time to proactively prevent unsafe practices and enhance safety.",
    },
  ];
  return (
    <div className="relative z-20">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="w-full md:w-[97%] px-[1rem] xl:px-[5rem] md:px-[3rem] py-[7rem] lg:mt-[-3rem]"
        style={{
          height: "100%",
          // width: "97%",
          backgroundImage: `url(${TopBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1350px] m-auto">
          <h3 className="text-28 xl:text-32 font-qanelas_b w-full xl:w-[70%] leading-[40px] md:leading-[44px] mb-8">
            Our company aims to enhance driver safety and efficiency with
            immersive, risk-free training. Our platform empowers commercial
            drivers to sharpen their skills in a controlled environment,
            ensuring top performance on every journey.
          </h3>
          <Button name={"Learn more"} theme={"transparent"} />
        </div>
      </motion.div>
      <div className="max-w-[1350px] m-auto md:flex justify-between mt-[5rem]">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="basis-[30%] px-[1rem] md:pl-[3rem] 2xl:p-0 mb-[3rem] md:m-0"
        >
          <p className="text-light_brand_primary font-qanelas_m">
            WHAT WE OFFER
          </p>
          <h3 className="font-qanelas_b text-[30px] leading-[38px] xl:text-[36px] xl:leading-[44px] mt-[1rem] mb-[1.5rem] text-[#222222]">
            A Comprehensive Suite for drivers training.
          </h3>
          <p className="text-[16px] text-[#222222] mb-8">
            We Solve the biggest challenges in drivers training. Everything you
            need to train, track, and certify your drivers— all in one platform.
          </p>
          <Button
            name={"Learn more"}
            theme={"transparent"}
            className={"border-[#191C24] text-[#191C24]"}
          />
        </motion.div>
        <div className="md:basis-[65%] xl:basis-[60%] md:flex justify-between flex-wrap px-[1rem] py-[3rem] md:p-[3rem]">
          {services.map((item, index) => (
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              key={index}
              className="basis-[43%] mb-[4rem]"
            >
              {item.icon}
              <h5 className="font-qanelas_b text-[24px] text-[#222222] mt-[1.5rem] mb-[0.5rem]">
                {item.title}
              </h5>
              <p className="font-qanelas_m text-[#191C24]">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
