import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const SuccessModal = ({ setShowSuccessModal }) => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setShowSuccessModal(false)
    }
  }, [count]);

  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className="max-w-[25rem]"
    >
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.0365 38.0208L42.1896 56.4328C42.7311 57.1908 43.4391 57.8146 44.2593 58.2562C45.0795 58.6978 45.9901 58.9455 46.921 58.9802C47.8519 59.0149 48.7783 58.8357 49.6291 58.4564C50.4799 58.0771 51.2325 57.5078 51.8289 56.7922L94.9219 5.0741"
          stroke="black"
          stroke-width="4.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M69.0988 17.3528C60.5577 12.0671 50.4012 10.0275 40.4817 11.606C30.5622 13.1845 21.5405 18.2759 15.062 25.9517C8.58351 33.6274 5.0798 43.3761 5.1899 53.4198C5.29999 63.4635 9.01654 73.1331 15.6618 80.665C22.307 88.1969 31.4381 93.0893 41.3898 94.45C51.3415 95.8107 61.4508 93.549 69.874 88.0773C78.2972 82.6057 84.473 74.2887 87.2751 64.6432C90.0773 54.9977 89.3191 44.6662 85.1389 35.5331"
          stroke="black"
          stroke-width="4.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <h3 className="text-32 font-qanelas_b w-full lg:w-[70%] text-[#0D0E13] leading-[40px] mb-2 mt-8">
        You’re all set!
      </h3>
      <p className="font-qanelas_m text-[#191C24] mb-8">
        Please check your inbox for an invite from our team. We look forward to
        talking to you soon.
      </p>
      <p className="font-qanelas_m text-[#191C24] mb-8">
        Redirecting in{" "}
        <span className="text-brand_primary font-qanelas_sb">0.0{count}</span>
      </p>
    </motion.div>
  );
};

export default SuccessModal;
