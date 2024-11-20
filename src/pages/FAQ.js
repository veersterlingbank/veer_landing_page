import { useState } from "react";
import { ReactComponent as ArrowUp } from "assets/icons/faq-arrow-up.svg";
import { ReactComponent as ArrowDown } from "assets/icons/faq-arrow-down.svg";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of vehicles are simulated in VEER's training?",
      answer:
        "Our platform uses advanced simulators that mimic real-world driving conditions, from city traffic to extreme weather, allowing drivers to practice risk-free. Combined with real-time telemetry tracking, we provide feedback on driving behaviors, helping correct unsafe habits and significantly reducing accident rates over time",
    },
    {
      question: "How long does the training take?",
      answer:
        "Our platform uses advanced simulators that mimic real-world driving conditions, from city traffic to extreme weather, allowing drivers to practice risk-free. Combined with real-time telemetry tracking, we provide feedback on driving behaviors, helping correct unsafe habits and significantly reducing accident rates over time",
    },
    {
      question: "Can I track individual driver performance?",
      answer:
        "Our platform uses advanced simulators that mimic real-world driving conditions, from city traffic to extreme weather, allowing drivers to practice risk-free. Combined with real-time telemetry tracking, we provide feedback on driving behaviors, helping correct unsafe habits and significantly reducing accident rates over time",
    },
    {
      question: "Is the training compliant with regulations?",
      answer:
        "Our platform uses advanced simulators that mimic real-world driving conditions, from city traffic to extreme weather, allowing drivers to practice risk-free. Combined with real-time telemetry tracking, we provide feedback on driving behaviors, helping correct unsafe habits and significantly reducing accident rates over time",
    },
    {
      question: "Can our training be customized for different industries?",
      answer:
        "Our platform uses advanced simulators that mimic real-world driving conditions, from city traffic to extreme weather, allowing drivers to practice risk-free. Combined with real-time telemetry tracking, we provide feedback on driving behaviors, helping correct unsafe habits and significantly reducing accident rates over time",
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
          <h1 className="font-qanelas_b text-[36px] lg:text-[56px] leading-[43px] lg:leading-[69px] text-[#0D0E13]">
            Got questions? <br />
            We’ve got answers too
          </h1>
          <div className="mt-[4rem]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b-2 border-gray-200 p-4 mb-2 rounded-[10px] bg-white"
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
                  <p className="mt-3 text-black w-[90%] lg:w-[70%]">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
