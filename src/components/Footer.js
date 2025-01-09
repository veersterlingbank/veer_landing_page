import FooterTopBG from "assets/images/footer-top-bg.webp";
import FooterBG from "assets/images/fulll-vector-logo.webp";
import Button from "./Inputs/Button";
import { useNavigate } from "react-router-dom";
import { useModal } from "layouts/MainLayout";

import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const Footer = () => {
  const navigate = useNavigate();
  const { toggleModal } = useModal();
  const menu = [
    {
      name: "Veer solutions",
      link: "/solutions",
    },
    {
      name: "About us",
      link: "/about-us",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
    {
      name: "Contact us",
      link: "/contact-us",
    },
  ];

  // const enterprise = [
  //   {
  //     name: "LMS for Driver Training",
  //     link: "/lms-driver-training",
  //   },
  //   {
  //     name: "Telemetry & Real-Time Tracking",
  //     link: "/telemetry-real-time-tracking",
  //   },
  //   {
  //     name: "Simulators",
  //     link: "/simulators",
  //   },
  // ];

  const legal = [
    {
      name: "Privacy policy",
      link: "/privacy-policy",
    },
    {
      name: "Cookies policy",
      link: "/cookies-policy",
    },
    {
      name: "Terms & conditions",
      link: "/terms-conditions",
    },
  ];

  const inTouch = [
    {
      name: "Instagram",
      link: "",
    },
    {
      name: "Facebook",
      link: "",
    },
    {
      name: "LinkedIn",
      link: "",
    },
    {
      name: "X (Twitter)",
      link: "",
    },
  ];

  return (
    <div
      className="pb-[4rem] bg-[#12131A]"
      style={{
        // height: "100%",
        width: "100%",
        backgroundImage: `url(${FooterBG})`,
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="lg:w-[95%] 2xl:w-[85%] mb-[4rem] md:pl-[3rem] lg:pl-[2rem] 2xl:pl-[6rem]"
        style={{
          height: "100%",
          // width: "85%",
          backgroundImage: `url(${FooterTopBG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "0 0 100px 0",
          // paddingLeft: "6rem",
        }}
      >
        <div className="max-w-[1350px] m-auto md:flex justify-between p-[2rem] 2xl:p-[3rem]">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="basis-[47%]"
          >
            <h3 className="text-[45px] 2xl:text-[56px] font-qanelas_b leading-[55px] 2xl:leading-[69px] mb-8">
              Do you need more information?
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="basis-[40%]"
          >
            <p className="font-qanelas_m w-full xl:w-[70%] mb-5">
              Ready to enhance driver performance and make the roads safer for
              everyone? Reach out to us today and take the first step!
            </p>
            <Button
              name={"Schedule a demo"}
              theme={"transparent"}
              onClick={() => toggleModal()}
            />
          </motion.div>
        </div>
      </div>
      <div className="max-w-[1350px]  w-[90%] 2xl:w-full m-auto flex flex-wrap">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="basis-[47%] md:basis-[30%] lg:basis-[17%] mb-[3rem]"
        >
          <h6 className="text-[#94A3B8] text-[14px] mb-[15px]">MENU</h6>
          {menu.map((item, index) => (
            <p
              key={index}
              className="text-[14px] mb-[15px] cursor-pointer"
              onClick={() => {
                navigate(item.link);
              }}
            >
              {item.name}
            </p>
          ))}
        </motion.div>
        {/* <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="basis-[47%] md:basis-[30%] lg:basis-[20%] mb-[3rem]"
        >
          <h6 className="text-[#94A3B8] text-[14px] mb-[15px]">ENTERPRISE</h6>
          {enterprise.map((item, index) => (
            <p
              key={index}
              className="text-[14px] mb-[15px] cursor-pointer"
              onClick={() => {
                navigate(item.link);
              }}
            >
              {item.name}
            </p>
          ))}
        </motion.div> */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="basis-[47%] md:basis-[30%] lg:basis-[20%] mb-[3rem]"
        >
          <h6 className="text-[#94A3B8] text-[14px] mb-[15px]">LEGAL</h6>
          {legal.map((item, index) => (
            <p
              key={index}
              className="text-[14px] mb-[15px] cursor-pointer"
              onClick={() => {
                navigate(item.link);
              }}
            >
              {item.name}
            </p>
          ))}
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="basis-[47%] md:basis-[30%] lg:basis-[20%] mb-[3rem]"
        >
          <h6 className="text-[#94A3B8] text-[14px] mb-[15px]">
            STAY IN TOUCH
          </h6>
          {inTouch.map((item, index) => (
            <p key={index} className="text-[14px] mb-[15px] cursor-pointer">
              {item.name}
            </p>
          ))}
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="basis-[100%] md:basis-[60%] lg:basis-[23%] mt-[2rem] md:m-0"
        >
          <p className="text-[#94A3B8] text-[14px] mb-[15px]">
            Veers provides a comprehensive digital driver training platform
            utilising an LMS (Learning Management System), simulators, and
            telemetry systems for driver behaviour tracking, training,
            evaluation, and certification to improve the safety and efficiency
            of commercial motor vehicles.
          </p>
        </motion.div>
      </div>
      <div className="h-[3rem] lg:h-[13rem]"></div>
    </div>
  );
};

export default Footer;
