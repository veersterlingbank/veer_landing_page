import HeroBG from "assets/images/hero-image.webp";
import Button from "components/Inputs/Button";
import { useModal } from "layouts/MainLayout";

const HeroSection = () => {
  const { toggleModal } = useModal();
  return (
    <div
      className="h-[100vh]"
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${HeroBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-full max-w-[1350px] m-auto flex flex-col items-center justify-center">
        <div className="w-[60%]">
          <h1 className="font-qanelas_eb text-[70px] leading-[90px]">
            Empower Your Drivers. Master Every Mile.
          </h1>
          <p className="w-[60%] font-qanelas_m mt-3 mb-8">
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
      </div>
    </div>
  );
};

export default HeroSection;
