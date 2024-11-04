import SectionBG from "assets/images/section-5-bg.webp";

const Section5 = () => {
  return (
    <div
      className="h-[100vh]"
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${SectionBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1350px] m-auto h-full py-[5rem]">
        <div className="h-full flex flex-col justify-between">
          <h3 className="text-[56px] leading-[69px] font-qanelas_b">
            From Accidents to <br />
            Excellence
          </h3>
          <div className="flex justify-between">
            <div></div>
            <p className="basis-[36%]">
              We Solve the biggest challenges in fleet management. Everything
              you need to train, track, and certify your drivers— all in one
              platform. Revolutionize driver training with cutting-edge
              simulators, real-time tracking, and automated
              certification—driving safer, smarter, and compliant fleets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
