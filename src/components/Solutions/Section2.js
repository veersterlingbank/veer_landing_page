import SectionBG from "assets/images/solutions-sec-2-bg.webp";

const Section2 = () => {
  return (
    <>
      <div
        className="h-[100vh]  hidden lg:block"
        style={{
          height: "100%",
          width: "100%",
          backgroundImage: `url(${SectionBG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1350px] w-[90%] 2xl:w-full m-auto h-full py-[5rem]">
          <div className="h-full flex flex-col justify-between">
            <h3 className="text-[56px] leading-[69px] font-qanelas_b">
              Transforming risk <br />
              into remarkable <br />
              performance
            </h3>
            <div className="flex justify-between">
              <div></div>
              <p className="basis-[36%]">
                Embrace a future where safety and skill go hand in hand, and
                join us in transforming the driving experience into one of
                remarkable achievement. At Veer, we redefine driver training by
                turning potential hazards into unparalleled opportunities for
                excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-[100vh] lg:hidden"
        style={{
          height: "100%",
          width: "100%",
          backgroundImage: `url(${SectionBG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1350px] m-auto h-full py-[5rem]">
          <div className="h-full flex flex-col justify-between px-[2rem] py-[1rem]">
            <h3 className="text-[32px] leading-[39px] font-qanelas_b">
              Transforming risk <br />
              into remarkable <br />
              performance
            </h3>
            <div className="">
              <p className="font-qanelas_m leading-[20px]">
                Embrace a future where safety and skill go hand in hand, and
                join us in transforming the driving experience into one of
                remarkable achievement. At Veer, we redefine driver training by
                turning potential hazards into unparalleled opportunities for
                excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
