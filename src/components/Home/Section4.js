import ImageA from "assets/images/section-4-a.webp";
import ImageB from "assets/images/section-4-b.webp";
import ImageC from "assets/images/section-4-c.webp";

const Section4 = () => {
  return (
    <div className="bg-[#12131A]">
      <div className=" max-w-[1350px] m-auto pb-[8rem]">
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
            <img src={ImageB} alt="Veer staffs tracking and analyzing driver's behaviour in real time" />
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
    </div>
  );
};

export default Section4;
