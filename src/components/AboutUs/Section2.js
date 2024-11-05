import LogoIcon from "assets/icons/logo-vector-color.svg";

const Section2 = () => {
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
            {/* <div className="border-b border-b-[#DEDEDE] mb-[3rem] flex justify-between">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
