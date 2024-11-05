import LogoIcon from "assets/icons/logo-vector-color.svg";
import { ReactComponent as Service5 } from "assets/icons/services-icon-5.svg";
import { ReactComponent as Service2 } from "assets/icons/services-icon-2.svg";
import { ReactComponent as Service3 } from "assets/icons/services-icon-3.svg";
import { ReactComponent as Service4 } from "assets/icons/services-icon-4.svg";
import Value1 from "assets/images/about-sec-2-a.webp";
import Value2 from "assets/images/about-sec-2-b.webp";
import Value3 from "assets/images/about-sec-2-c.webp";
import Value4 from "assets/images/about-sec-2-d.webp";

const Section2 = () => {
  const values = [
    {
      icon: <Service5 />,
      title: "Safety First",
      content1:
        "We prioritize safety above all else. Our training programs are designed to instill safe driving practices, ensuring that drivers are equipped to handle any situation on the road.",
      content2:
        "Our training programs reflect our appreciation for the drivers hard work, dedication, and the challenges they face every day.",
      image: Value1,
    },
    {
      icon: <Service2 />,
      title: "Continuous Improvement",
      content1:
        "VEER is committed to staying at the forefront of driving education technology, regularly updating its simulators and curriculum to reflect the latest advancements and best practices in driver training.",
      image: Value2,
    },
    {
      icon: <Service3 />,
      title: "Integrity and Transparency",
      content1:
        "We operate with honesty and openness. Our feedback processes are transparent, and we hold ourselves accountable to our mission and our drivers.",
      content2:
        "We honour the vital role of commercial drivers in our economy.",
      image: Value3,
    },
    {
      icon: <Service4 />,
      title: "Community Engagement",
      content1:
        "We recognize the importance of community. We foster relationships with local organizations, government bodies, and other stakeholders to promote safe driving practices and contribute positively to the communities we serve.",
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
          <p className="text-light_brand_primary font-qanelas_m">OUR VALUES</p>
          <h3 className="font-qanelas_b text-[36px] leading-[44px] mt-[1rem] mb-[1.5rem] text-[#222222]">
            Powering safer journeys <br />
            for commercial drivers
          </h3>
        </div>
        <div className="basis-[30%]">
          <p className="text-[16px] font-qanelas_m text-[#191C24] mb-8">
            By focusing on realistic training scenarios and comprehensive
            feedback, we empower drivers to improve their performance, reduce
            risks, and ensure safer roads for everyone.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="bg-white rounded-tl-[50px] pt-[4rem] w-[90%]">
          <div className="max-w-[1350px] m-auto ">
            <div className="mb-[3rem]">
              {values.map((item, index) => (
                <div
                  key={index}
                  className={`py-[3rem] flex justify-between items-center ${
                    values.length - 1 === index
                      ? ""
                      : "border-b border-b-[#DEDEDE]"
                  } ${(index + 1) % 2 === 0 ? "flex-row-reverse" : ""}`}
                >
                  <div className="basis-[40%] flex gap-[1.3rem]">
                    <div>{item.icon}</div>
                    <div>
                      <h5 className="font-qanelas_b text-[24px] text-[#222222] mb-[1rem]">
                        {item.title} {index}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
