import Button from "components/Inputs/Button";
import HeroImgA from "assets/images/solutions-hero-a.webp";
import HeroImgB from "assets/images/solutions-hero-b.webp";
import HeroImgC from "assets/images/solutions-hero-c.webp";


const HeroSection = () => {
  return (
    <div className="h-[100vh] bg-gradient-to-b from-[#FFEDED] to-[#FFFFFF]">
      <div className="max-w-[1350px] m-auto pt-[13rem] flex justify-between">
        <div className="pt-[3rem] basis-[45%]">
          <h1 className="font-qanelas_b text-[56px] leading-[69px] text-[#0D0E13]">
            Revolutionizing driver <br />
            training for safer roads
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
            className="w-[60%] absolute top-[50%] left-[-20%]"
            src={HeroImgB}
            alt="An Happy Driver"
          />
          <img
            className="w-[60%] absolute top-[70%] right-[15%]"
            src={HeroImgC}
            alt="An Happy Driver"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;