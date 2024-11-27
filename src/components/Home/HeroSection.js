import HeroBG from "assets/images/hero-image.webp";
import HeroImgA from "assets/images/home-hero-a.webp";
import HeroImgB from "assets/images/home-hero-b.webp";
import HeroImgC from "assets/images/home-hero-c.webp";
import HeroImgD from "assets/images/home-hero-d.webp";
import Button from "components/Inputs/Button";
import { useModal } from "layouts/MainLayout";

import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const HeroSection = () => {
  const { toggleModal } = useModal();
  return (
    <div
      className="md:h-[70vh] lg:h-[100vh] pb-[18rem] md:pb-[50rem]"
      style={{
        // height: "100%",
        width: "100%",
        backgroundImage: `url(${HeroBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1350px] md:w-[90%] 2xl:w-full m-auto pt-[13rem] md:flex justify-between">
        <div className="w-[90%] md:w-full mx-auto mb-[4rem] md:m-0 basis-[50%]">
          <motion.h1
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="font-qanelas_b text-[36px] md:text-[46px] xl:text-[56px] leading-[44px] md:leading-[59px] xl:leading-[69px] text-white"
          >
            Empower Your Drivers. Master Every Mile.
          </motion.h1>
          <motion.p
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="text-white font-qanelas_m lg:w-[70%] w-full mt-[1rem] mb-[3rem]"
          >
            Revolutionize driver training with digital learning solutions,
            cutting-edge simulators, real time driver behaviour tracking, and
            automated certification — driving safer, smarter, and compliant
            fleets.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <Button
              name={"Schedule a demo"}
              theme={"transparent"}
              className={"border-white text-white"}
              onClick={() => toggleModal()}
            />
          </motion.div>
        </div>
        <div className="relative z-10 basis-[45%] px-[20px] lg:px-0">
          <motion.img
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="rounded-lg"
            src={HeroImgA}
            alt="An Happy Driver"
          />
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="px-[30px] lg:px-0 w-[100%] md:w-[60%] absolute top-[70%] md:top-[30%] lg:top-[40%] left-[0] md:left-[-10%] lg:left-[-35%]"
          >
            <img className="" src={HeroImgB} alt="Driver Progress Tracking" />
            <img
              className="mt-2"
              src={HeroImgC}
              alt="Overall Performance Score"
            />
            <img
              className="mt-2 md:block"
              src={HeroImgD}
              alt="Traffic Laws and Regulations"
            />
          </motion.div>
        </div>
      </div>
      {/* <div className="h-full max-w-[1350px] m-auto flex flex-col items-center justify-center">
        <div className="w-[80%] lg:w-[60%]">
          <h1 className="font-qanelas_b xl:font-qanelas_eb text-[56px] xl:text-[70px] leading-[69px] xl:leading-[90px]">
            Empower Your Drivers. Master Every Mile.
          </h1>
          <p className="w-full md:w-[80%] xl:w-[60%] font-qanelas_m mt-3 mb-8">
            Revolutionize driver training with digital learning solutions,
            cutting-edge simulators, real time driver behaviour tracking, and
            automated certification — driving safer, smarter, and compliant
            fleets.
          </p>
          <Button
            name={"Schedule a demo"}
            theme={"transparent"}
            onClick={() => toggleModal()}
          />
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
