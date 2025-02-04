import Section3Img from "assets/images/section-3-img.webp";
import Section3ImgMobile from "assets/images/section-3-img-mobile.webp";

import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const Section3 = () => {
  return (
    <div className="bg-[#12131A]">
      <div className=" max-w-[1350px] m-auto py-[6rem] px-[1rem] md:px-0 border-b-[#ffffff2d]">
        <motion.img
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          src={Section3Img}
          alt="Driving simulator"
          className="hidden md:block"
        />
        <motion.img
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          src={Section3ImgMobile}
          alt="Driving simulator"
          className="md:hidden"
        />
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="font-qanelas_sb md:font-qanelas_b text-[32px] leading-[39px] md:text-[35px] md:leading-[44px] w-full md:w-[80%] mx-auto mt-[5rem]"
        >
          In today’s fast-paced transportation world, your drivers are the
          backbone of your business. But keeping them skilled, safe, and
          compliant with ever-changing regulations can be a challenge. That’s
          where we come in.
        </motion.h2>
      </div>
    </div>
  );
};

export default Section3;