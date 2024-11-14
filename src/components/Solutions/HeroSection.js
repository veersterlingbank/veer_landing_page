import Button from "components/Inputs/Button";
import HeroImgA from "assets/images/solutions-hero-a.webp";
import HeroImgB from "assets/images/solutions-hero-b.webp";
import HeroImgC from "assets/images/solutions-hero-c.webp";


const HeroSection = () => {
  return (
    <div className="md:h-[70vh] lg:h-[100vh] bg-gradient-to-b from-[#FFEDED] to-[#FFFFFF] pb-[18rem] md:pb-[50rem] 2xl:pb-0">
      <div className="max-w-[1350px] md:w-[90%] 2xl:w-full  m-auto pt-[13rem] md:flex justify-between">
        <div className="md:pt-[3rem] w-[90%] md:w-full mx-auto mb-[4rem] md:m-0 basis-[45%]">
          <h1 className="font-qanelas_b text-[36px] md:text-[46px] lg:text-[56px] leading-[44px] md:leading-[59px] lg:leading-[69px] text-[#0D0E13]">
            Revolutionizing driver training for safer roads
          </h1>
          <p className="text-black font-qanelas_m w-[80%] mt-[1rem] mb-[3rem]">
            VEER is an innovative digital driving solution dedicated to
            improving road safety through state-of-the-art technology. 
          </p>
          <Button
            name={"Schedule a demo"}
            theme={"transparent"}
            className={"border-[#191C24] text-[#191C24]"}
          />
        </div>
        <div className="relative basis-[45%]">
          <img className="" src={HeroImgA} alt="An Happy Driver" />
          <img
            className="w-[80%] md:w-[60%] absolute top-[70%] md:top-[30%] lg:top-[50%] left-[3%] md:left-[-10%] lg:left-[-20%]"
            src={HeroImgB}
            alt="Driver Training Courses"
          />
          <img
            className="w-[80%] md:w-[60%] absolute top-[90%] md:top-[50%] lg:top-[70%] right-[3%] md:right-[10%] lg:right-[15%]"
            src={HeroImgC}
            alt="Overall Performance Score"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;