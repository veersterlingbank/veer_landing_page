import { useState } from "react";
import { ReactComponent as ArrowUp } from "assets/icons/faq-arrow-up.svg";
import { ReactComponent as ArrowDown } from "assets/icons/faq-arrow-down.svg";

import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "variants.js";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of vehicles are simulated in VEER's training?",
      answer:
        "We offer simulations for various vehicle types, including cars, trucks, and buses.",
    },
    {
      question: "How long does the training take?",
      answer:
        "The duration varies depending on the modules selected but typically ranges from 2 to 6 weeks.",
    },
    {
      question: "Can I track individual driver performance?",
      answer:
        "Yes, VEER provides detailed reports and real-time data on each driver’s progress and behavior.",
    },
    {
      question: "Is the training compliant with regulations?",
      answer:
        "Yes, VEER is designed to comply with all Federal Road Safety Commision (FRSC) regulations and standards.",
    },
    {
      question: "Can our training be customized for different industries?",
      answer:
        "Yes, we offer industry-specific training modules tailored to various sectors, including logistics, public transport, and corporate fleets.",
    },
    {
      question: "What kind of assessments are included in the training?",
      answer:
        "Our training includes theoretical assessments, practical simulator tests, and behavior analysis to ensure comprehensive driver evaluation.",
    },
    {
      question:
        "Can the training be integrated with existing fleet management systems?",
      answer:
        "Yes, our platform works seamlessly with your fleet management system, allowing you to train your drivers while you manage your fleets.",
    },
    {
      question: "How realistic are the simulations?",
      answer:
        "Our simulators replicate real-world driving conditions, including diverse weather, road types, and traffic scenarios, ensuring drivers are well-prepared for various situations.",
    },
    {
      question: "Do you offer certification upon completion?",
      answer:
        "Yes, drivers who successfully complete our training receive certification that can be used for compliance and skill verification, we also offer recertification for your drivers who have been previously trained.",
    },
    {
      question: "Is the training available online or only on-site?",
      answer:
        "We offer both on-site and online learning modules through our Learning Management System (LMS), providing flexibility and convenience for trainees.",
    },
    {
      question: "What kind of data analytics do you provide?",
      answer:
        "We offer in-depth analytics on driver behavior, performance trends, data on driver training from the Learning platform & simulators and many more, giving fleet managers actionable insights for improvement. ",
    },
    {
      question:
        "Can drivers who are already certified benefit from our training?",
      answer:
        "Yes, we offer refresher courses and advanced training modules that help certified drivers enhance their skills and maintain compliance with regulations.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-[#FFEDED] to-[#FFFFFF]">
      <div className="max-w-[1350px] w-[90%] xl:w-[55%] m-auto pt-[10rem] xl:pt-[13rem]">
        <div className="pb-[5rem]">
          <motion.h1
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="font-qanelas_b text-[36px] lg:text-[56px] leading-[43px] lg:leading-[69px] text-[#0D0E13]"
          >
            Got questions? <br />
            We’ve got answers too
          </motion.h1>
          <div className="mt-[4rem]">
            <AnimatePresence>
              {faqs.map((faq, index) => (
                <motion.div
                  variants={fadeIn("right", 0.2 + index * 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                  key={index}
                  className="transition-all border-b-2 border-gray-200 p-4 mb-2 rounded-[10px] bg-white"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between text-left items-center lg:text-[20px] font-qanelas_b text-[#0D0E13] hover:text-gray-900 focus:outline-none"
                  >
                    {faq.question}
                    <span className="">
                      {openIndex === index ? <ArrowUp /> : <ArrowDown />}
                    </span>
                  </button>
                  {openIndex === index && (
                    <p className="mt-3 text-black w-[90%] lg:w-[70%]">
                      {faq.answer}
                    </p>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
