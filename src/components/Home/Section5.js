import SectionBG from "assets/images/section-5-bg.webp";
import SectionBGMobile from "assets/images/section-5-bg-mobile.webp";

import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const Section5 = () => {
  return (
    <>
      <div
        className="h-[100vh] hidden lg:block"
        style={{
          height: "100%",
          width: "100%",
          backgroundImage: `url(${SectionBG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1350px] w-[90%] 2xl:w-full m-auto h-full py-[5rem]">
          <div className="h-full flex flex-col justify-between">
            <motion.h3
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-[56px] leading-[69px] font-qanelas_b"
            >
              Safer Roads Powered <br />
              by Technology
            </motion.h3>
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex justify-between"
            >
              <div></div>
              <p className="basis-[36%]">
                We Solve the biggest challenges in Driver Training, with our
                cutting-edge simulators, real-time behavior tracking, and
                flexible trainings.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className="h-[100vh] lg:hidden"
        style={{
          height: "100%",
          width: "100%",
          backgroundImage: `url(${SectionBGMobile})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1350px] m-auto h-full py-[5rem]">
          <div className="h-full flex flex-col justify-between px-[2rem] py-[1rem]">
            <motion.h3
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-[32px] leading-[39px] font-qanelas_b"
            >
              Safer Roads Powered <br />
              by Technology
            </motion.h3>
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className=""
            >
              <p className="font-qanelas_m leading-[20px]">
                We Solve the biggest challenges in fleet management. Everything
                you need to train, track, and certify your drivers— all in one
                platform. Revolutionize driver training with cutting-edge
                simulators, real-time tracking, and automated
                certification—driving safer, smarter, and compliant fleets.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
