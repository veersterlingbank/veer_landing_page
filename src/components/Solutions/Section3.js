import LogoIcon from "assets/icons/logo-vector-color.svg";
import { ReactComponent as Service1 } from "assets/icons/services-icon-1.svg";
// import { ReactComponent as Service2 } from "assets/icons/services-icon-2.svg";
// import { ReactComponent as Service3 } from "assets/icons/services-icon-3.svg";
// import { ReactComponent as Service4 } from "assets/icons/services-icon-4.svg";
import Value1 from "assets/images/about-sec-2-a.webp";
import Value2 from "assets/images/about-sec-2-b.webp";
import Value3 from "assets/images/about-sec-2-c.webp";
import Value4 from "assets/images/about-sec-2-d.webp";

const Section3 = () => {
  const values = [
    {
      icon: <Service1 />,
      title: "Driver Proficiency Test",
      content1:
        "Combine immersive simulator training with real-world inroad evaluations for a comprehensive driver assessment.",
      content2:
        "Our dual approach ensures drivers gain practical experience while refining critical skills, delivering a thorough evaluation that promotes safer, more confident driving on every journey.",
      image: Value1,
    },
    {
      icon: <Service1 />,
      title: "LMS",
      content1:
        "Our comprehensive driver development suite includes digital training with Veer LMS, immersive simulator sessions, and in-depth evaluations. Equip drivers with the skills and insights needed for safer, more efficient journeys.",
      content2:
        "This includes digital driver training using Veer LMS, Simulator driver training and evaluation",
      image: Value2,
    },
    {
      icon: <Service1 />,
      title: "Veer simulators",
      content1:
        "This includes Digital driver training using Veer LMS, Simulator driver training, inroad Driver behaviour Tracking, Evaluation & Analytics.",
      content2:
        "Our all-in-one solution combines digital training on Veer LMS, hands-on simulator sessions, inroad driver behavior tracking, and comprehensive evaluation analytics. Enhance driver skills, safety, and performance with real-time insights and continuous improvement tools.",
      image: Value3,
    },
    {
      icon: <Service1 />,
      title: "Telemetry solutions",
      content1:
        "This includes Digital driver training using Veer LMS, Simulator driver training, inroad Driver behaviour Tracking, Evaluation & Analytics.",
      content2:
        "Our all-in-one solution combines digital training on Veer LMS, hands-on simulator sessions, inroad driver behavior tracking, and comprehensive evaluation analytics. Enhance driver skills, safety, and performance with real-time insights and continuous improvement tools.",
      image: Value4,
    },
  ];
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
            OUR SOLUTIONS
          </p>
          <h3 className="font-qanelas_b text-[36px] leading-[44px] mt-[1rem] mb-[1.5rem] text-[#222222]">
            Tailored Solutions for <br />
            Safer, Smarter Driving
          </h3>
        </div>
        <div className="basis-[30%]">
          <p className="text-[16px] font-qanelas_m text-[#191C24] mb-8">
            Explore our range of innovative products designed to enhance driver
            safety, boost operational efficiency, and foster skill development.
          </p>
        </div>
      </div>
      {values.map((item, index) => (
        <div key={index} className="flex flex-col items-end">
          <div className="bg-white rounded-tl-[50px] py-[4rem] mb-[3rem] w-[90%]">
            <div className="max-w-[1350px] m-auto ">
              <div className={`flex justify-between items-center`}>
                <div className="basis-[40%] flex gap-[1.3rem]">
                  <div>{item.icon}</div>
                  <div>
                    <h5 className="font-qanelas_b text-[24px] text-[#222222] mb-[1rem]">
                      {item.title}
                    </h5>
                    <p className="text-[#191C24] font-qanelas_m">
                      {item.content1}
                    </p>
                    <p className="text-[#191C24] font-qanelas_m mt-[15px]">
                      {item?.content2}
                    </p>
                  </div>
                </div>
                <div className="basis-[40%]">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section3;
