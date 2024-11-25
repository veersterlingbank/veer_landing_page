import HeroBG from "assets/images/hero-image.webp";
import HeroImgA from "assets/images/home-hero-a.webp";
import HeroImgB from "assets/images/home-hero-b.webp";
import HeroImgC from "assets/images/home-hero-c.webp";
import HeroImgD from "assets/images/home-hero-d.webp";
import Button from "components/Inputs/Button";
import { useModal } from "layouts/MainLayout";

const HeroSection = () => {
  const { toggleModal } = useModal();
  return (
    <div
      className="lg:h-[100vh]"
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${HeroBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1350px] md:w-[90%] 2xl:w-full m-auto pt-[13rem] md:flex justify-between">
        <div className="md:pt-[3rem] w-[90%] md:w-full mx-auto mb-[4rem] md:m-0 basis-[45%]">
          <h1 className="font-qanelas_b text-[36px] md:text-[46px] lg:text-[56px] leading-[44px] md:leading-[59px] lg:leading-[69px] text-white">
            Empower Your Drivers. Master Every Mile.
          </h1>
          <p className="text-white font-qanelas_m lg:w-[80%] w-full mt-[1rem] mb-[3rem]">
            Revolutionize driver training with digital learning solutions,
            cutting-edge simulators, real time driver behaviour tracking, and
            automated certification — driving safer, smarter, and compliant
            fleets.
          </p>
          <Button
            name={"Schedule a demo"}
            theme={"transparent"}
            className={"border-white text-white"}
            onClick={() => toggleModal()}
          />
        </div>
        <div className="relative z-10 basis-[45%] px-[20px] lg:px-0">
          <img className="rounded-lg" src={HeroImgA} alt="An Happy Driver" />
          <div className="px-[30px] lg:px-0 w-[100%] md:w-[60%] absolute top-[70%] md:top-[30%] lg:top-[40%] left-[0] md:left-[-10%] lg:left-[-35%]">
            <img className="" src={HeroImgB} alt="Driver Progress Tracking" />
            <img
              className="mt-2"
              src={HeroImgC}
              alt="Overall Performance Score"
            />
            <img
              className="mt-2 hidden lg:block"
              src={HeroImgD}
              alt="Traffic Laws and Regulations"
            />
          </div>
        </div>
      </div>
      {/* <div className="h-full max-w-[1350px] m-auto flex flex-col items-center justify-center">
        <div className="w-[80%] lg:w-[60%]">
          <h1 className="font-qanelas_b xl:font-qanelas_eb text-[56px] xl:text-[70px] leading-[69px] xl:leading-[90px]">
            Empower Your Drivers. Master Every Mile.
          </h1>
          <p className="w-full md:w-[80%] xl:w-[60%] font-qanelas_m mt-3 mb-8">
            Revolutionize driver training with digital learning solutions,
            cutting-edge simulators, real time driver behaviour tracking, and
            automated certification — driving safer, smarter, and compliant
            fleets.
          </p>
          <Button
            name={"Schedule a demo"}
            theme={"transparent"}
            onClick={() => toggleModal()}
          />
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
