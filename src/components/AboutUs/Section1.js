import { TypeAnimation } from "react-type-animation";
import Section1BG from "assets/images/about-sec-1-bg.webp";
import Section1BGMobile from "assets/images/about-sec-1-bg-mobile.webp";

import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const Section1 = () => {
  return (
    <div className="bg-[#12131A]">
      <div className="max-w-[1350px] m-auto px-[2rem] pt-[13rem] pb-[6rem]">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="font-qanelas_b text-[36px] lg:text-[56px] leading-[44px] lg:leading-[69px] text-white"
        >
          <TypeAnimation
            sequence={[
              "Our mission is to empower drivers with the skills, knowledge, and confidence to navigate real-world driving scenarios effectively. By enhancing driving literacy and competence, we strive to foster safer roads and contribute to a culture of responsible and skilled driving.",
            ]}
            wrapper="h1"
            speed={60}
            className="font-qanelas_b text-[36px] lg:text-[56px] leading-[44px] lg:leading-[69px] text-white"
            // style={{
            //   fontFamily: "Qanelas",
            //   fontSize: "56px",
            //   lineHeight: "69px",
            //   color: "white",
            //   fontWeight: "bold",
            // }}
            repeat={0}
            cursor={false}
            preRenderFirstString={false}
          />
        </motion.div>
      </div>
      <div>
        <img
          src={Section1BG}
          alt="cars on highway"
          className="hidden md:block"
        />
        <img
          src={Section1BGMobile}
          alt="cars on highway"
          className="md:hidden"
        />
      </div>
    </div>
  );
};

export default Section1;
