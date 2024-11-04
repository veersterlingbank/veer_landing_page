import LogoIcon from "assets/icons/logo-vector-color.svg";
import Step1 from "assets/images/step-1-img.webp";
import Step2 from "assets/images/step-2-img.webp";
import Step3 from "assets/images/step-3-img.webp";
import Step4 from "assets/images/step-4-img.webp";
import Step5 from "assets/images/step-5-img.webp";
import Step6 from "assets/images/step-6-img.webp";

const Section6 = () => {
  const stepsTop = [
    {
      step: "STEP ONE",
      title: "Sign up as a company",
      image: Step1,
    },
    {
      step: "STEP TWO",
      title: "Drivers take lessons and quiz",
      image: Step2,
    },
    {
      step: "STEP THREE",
      title: "Drivers take simulator exercise",
      image: Step3,
    },
  ];

  const stepsBottom = [
    {
      step: "STEP FOUR",
      title: "Drivers earn certificates",
      image: Step4,
    },
    {
      step: "STEP FIVE",
      title: "Track real-time driver behaviour with our telemetry solution",
      image: Step5,
    },
    {
      step: "STEP SIX",
      title: "Appraise driver performance all year long",
      image: Step6,
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
      <div className="max-w-[1350px] m-auto flex gap-[3rem] items-end mb-[3rem]">
        <div className="basis-[30%]">
          <p className="text-light_brand_primary font-qanelas_m">
            WHAT WE OFFER
          </p>
          <h3 className="font-qanelas_b text-[36px] leading-[44px] mt-[1rem] mb-[1.5rem] text-[#222222]">
            A Comprehensive Suite <br />
            for drivers training.
          </h3>
        </div>
        <div className="basis-[30%]">
          <p className="text-[16px] font-qanelas_m text-[#191C24] mb-8">
            We Solve the biggest challenges in drivers training. Everything you
            need to train, track, and certify your drivers— all in one platform.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="bg-white rounded-tl-[50px] pt-[4rem] w-[90%]">
          <div className="max-w-[1350px] m-auto ">
            <div className="border-b border-b-[#DEDEDE] mb-[3rem] flex justify-between">
              {stepsTop.map((item, index) => (
                <div key={index} className="basis-[30%] mb-[4rem]">
                  <p className="text-light_brand_primary font-qanelas_m text-[14px]">
                    {item.step}
                  </p>
                  <h5 className="font-qanelas_b text-[18px] text-[#222222] mt-[1rem] mb-[1rem]">
                    {item.title}
                  </h5>
                  <img src={item.image} alt={item.title} />
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              {stepsBottom.map((item, index) => (
                <div key={index} className="basis-[30%]">
                  <p className="text-light_brand_primary font-qanelas_m text-[14px]">
                    {item.step}
                  </p>
                  <h5 className="font-qanelas_b text-[18px] leading-[22px] text-[#222222] mt-[1rem] mb-[1rem]">
                    {item.title}
                  </h5>
                  <img src={item.image} alt={item.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;