import ImageA from "assets/images/section-4-a.webp";
import ImageB from "assets/images/section-4-b.webp";
import ImageC from "assets/images/section-4-c.webp";
import { ReactComponent as Next } from "assets/icons/carousel-next-arrow.svg";
import { ReactComponent as Prev } from "assets/icons/carousel-prev-arrow.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Section4 = () => {
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

  const mobileContent = [
    {
      title: "Safe Learning Environment",
      content:
        "VEER provides advanced driving simulators that offer a safe, risk-free space for drivers to build real-world skills, tackling high-traffic and hazardous scenarios without exposure to danger.",
      image: ImageA,
    },
    {
      title: "Driver Behaviour Tracking",
      content:
        "VEER offers real-time tracking and analysis of driver behaviour, empowering companies to pinpoint improvement areas, boost safety, and make data-driven decisions for lasting performance and reduced accidents.",
      image: ImageB,
    },
    {
      title: "Customise Training Schedule",
      content:
        "VEER LMS enables flexible, self-paced training, perfect for learners with tight schedules or those preferring home-based study. It supports all levels, from first-time drivers to seasoned professionals seeking advanced skills or certification.",
      image: ImageC,
    },
  ];

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
      <div className="absolute top-[3.2rem] right-[1rem] flex space-x-1">
        <Prev
          className={currentSlide === 0 ? "opacity-25" : ""}
          onClick={() => previous()}
        />
        <Next
          className={currentSlide === 2 ? "opacity-25" : ""}
          onClick={() => next()}
        />
      </div>
    );
  };

  return (
    <div className="bg-[#12131A]">
      <div className="hidden xl:block max-w-[1350px] w-[90%] 2xl:w-full m-auto pb-[8rem]">
        <div className="flex gap-[10%] pt-[7rem]">
          <div className="basis-[40%]">
            <p className="text-light_brand_primary font-qanelas_m">WHY VEER?</p>
            <h3 className="font-qanelas_b text-[36px] leading-[44px] mt-[3rem] mb-[1.5rem]">
              Safe Learning <br />
              Environment
            </h3>
            <p className="text-[18px]">
              VEER provides advanced driving simulators that offer a safe,
              risk-free space for drivers to build real-world skills, tackling
              high-traffic and hazardous scenarios without exposure to danger.
            </p>
          </div>
          <div className="">
            <img src={ImageA} alt="A person using the driving simulator" />
          </div>
        </div>
        <div className="flex gap-[10%] pt-[7rem]">
          <div className="">
            <img
              src={ImageB}
              alt="Veer staffs tracking and analyzing driver's behaviour in real time"
            />
          </div>
          <div className="basis-[40%]">
            <h3 className="font-qanelas_b text-[36px] leading-[44px] mt-[4rem] mb-[1.5rem]">
              Driver Behaviour <br />
              Tracking
            </h3>
            <p className="text-[18px]">
              VEER offers real-time tracking and analysis of driver behaviour,
              empowering companies to pinpoint improvement areas, boost safety,
              and make data-driven decisions for lasting performance and reduced
              accidents.
            </p>
          </div>
        </div>
        <div className="flex gap-[10%] pt-[7rem]">
          <div className="basis-[40%]">
            <h3 className="font-qanelas_b text-[36px] leading-[44px] mt-[4rem] mb-[1.5rem]">
              Customise Training <br />
              Schedule
            </h3>
            <p className="text-[18px]">
              VEER LMS enables flexible, self-paced training, perfect for
              learners with tight schedules or those preferring home-based
              study. It supports all levels, from first-time drivers to seasoned
              professionals seeking advanced skills or certification.
            </p>
          </div>
          <div className="">
            <img src={ImageC} alt="A person using the Veer dashboard" />
          </div>
        </div>
      </div>
      <div className="xl:hidden pt-[4rem] pb-[3rem] md:px-[1rem] relative">
        <div className="flex px-[1rem]">
          <p className="text-light_brand_primary font-qanelas_m">WHY VEER?</p>
          {/* <CustomButtonGroupAsArrows /> */}
        </div>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-padding-bottom"
          customButtonGroup={<CustomButtonGroupAsArrows />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
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
          {mobileContent.map((item, index) => (
            <div key={index} className="pt-[3rem] pb-[6rem] px-[1rem]">
              <div className="">
                <h3 className="font-qanelas_b text-[24px] leading-[28px] mb-[1.5rem]">
                  {item.title}
                </h3>
                <p className="text-[16px]">{item.content}</p>
              </div>
              <div className="mt-[2rem]">
                <img
                  src={item.image}
                  alt="A person using the driving simulator"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Section4;
