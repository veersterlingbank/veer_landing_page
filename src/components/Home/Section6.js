import LogoIcon from "assets/icons/logo-vector-color.svg";
import Step1 from "assets/images/step-1-img.webp";
import Step2 from "assets/images/step-2-img.webp";
import Step3 from "assets/images/step-3-img.webp";
import Step4 from "assets/images/step-4-img.webp";
import Step5 from "assets/images/step-5-img.webp";
import Step6 from "assets/images/step-6-img.webp";
import { ReactComponent as Next } from "assets/icons/carousel-next-arrow.svg";
import { ReactComponent as Prev } from "assets/icons/carousel-prev-arrow.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const Section6 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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

  const stepsMobile = [
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
    const onSlideChanged = ({ currentSlide, slidesToShow, totalItems }) => {
      // const totalItems = stepsMobile.length;
      // const lastSlideIndex = Math.ceil(totalItems / slidesToShow) - 1;
      // console.log(totalItems);
      // console.log(slidesToShow);
      // console.log(currentSlide);
      // console.log(lastSlideIndex);

      if (currentSlide + 1 === slidesToShow) {
        console.log("You are on the last slide!");
      }
    };
    const CustomButtonGroupAsArrows = ({
      next,
      previous,
      goToSlide,
      ...rest
    }) => {
      const {
        carouselState: { currentSlide },
      } = rest;
      return (
        <div className="absolute top-[1rem] right-[1rem] flex space-x-1">
          <Prev
            className={currentSlide === 0 ? "opacity-25" : ""}
            onClick={() => previous()}
          />
          <Next
            className={currentSlide === 5 ? "opacity-25" : ""}
            onClick={() => next()}
          />
        </div>
      );
    };

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
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="max-w-[1350px] m-auto md:flex gap-[3rem] items-end mb-[3rem] px-[1rem] md:pl-[3rem] 2xl:p-0"
      >
        <div className="md:basis-[47%] xl:basis-[30%]">
          <p className="text-light_brand_primary font-qanelas_m">
            HOW IT WORKS
          </p>
          <h3 className="font-qanelas_b text-[36px] leading-[44px] mt-[1rem] mb-[1.5rem] text-[#222222]">
            Simplified. Efficient. Effective.
          </h3>
        </div>
        <div className="md:basis-[47%] xl:basis-[30%]">
          <p className="text-[16px] font-qanelas_m text-[#191C24] mb-8">
            We Solve the biggest challenges in drivers training. Everything you
            need to train, track, and certify your drivers— all in one platform.
          </p>
        </div>
      </motion.div>
      <div className="lg:flex flex-col items-end">
        <div className="bg-white rounded-tl-[50px] pt-[4rem] lg:w-[90%] relative">
          {/* <div className="hidden xl:block max-w-[1350px] m-auto pl-[3rem]">
            <div className="border-b border-b-[#DEDEDE] mb-[3rem] flex justify-between">
              {stepsTop.map((item, index) => (
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                  key={index}
                  className="basis-[30%] mb-[4rem]"
                >
                  <p className="text-light_brand_primary font-qanelas_m text-[14px]">
                    {item.step}
                  </p>
                  <h5 className="font-qanelas_b text-[18px] text-[#222222] mt-[1rem] mb-[1rem]">
                    {item.title}
                  </h5>
                  <img src={item.image} alt={item.title} />
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between">
              {stepsBottom.map((item, index) => (
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                  key={index}
                  className="basis-[30%]"
                >
                  <p className="text-light_brand_primary font-qanelas_m text-[14px]">
                    {item.step}
                  </p>
                  <h5 className="font-qanelas_b text-[18px] leading-[22px] text-[#222222] mt-[1rem] mb-[1rem]">
                    {item.title}
                  </h5>
                  <img src={item.image} alt={item.title} />
                </motion.div>
              ))}
            </div>
          </div> */}
          <div className="pb-[2rem]">
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlay={true}
              autoPlaySpeed={5000}
              afterChange={(previousSlide, state) => {
                const { currentSlide, slidesToShow, totalItems } = state; // State object
                onSlideChanged({ currentSlide, slidesToShow, totalItems });
              }}
              centerMode={false}
              className=""
              containerClass="container-padding-bottom"
              customButtonGroup={<CustomButtonGroupAsArrows />}
              dotListClass="text-brand_primary"
              draggable
              focusOnSelect={false}
              infinite={true}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside
              renderDotsOutside={false}
              responsive={responsive}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={true}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {stepsMobile.map((item, index) => (
                <div key={index} className="px-[2rem] mb-[4rem]">
                  <p className="text-light_brand_primary font-qanelas_m text-[14px]">
                    {item.step}
                  </p>
                  <h5 className="font-qanelas_b text-[18px] text-[#222222] mt-[1rem] mb-[1rem]">
                    {item.title}
                  </h5>
                  <img src={item.image} alt={item.title} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
