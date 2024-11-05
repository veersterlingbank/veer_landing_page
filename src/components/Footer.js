import FooterTopBG from "assets/images/footer-top-bg.webp";
import FooterBG from "assets/images/fulll-vector-logo.webp";
import Button from "./Inputs/Button";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const menu = [
    {
      name: "Veer solutions",
      link: "/solutions",
    },
    {
      name: "About us",
      link: "/about-us",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
    {
      name: "Contact us",
      link: "/contact-us",
    },
  ];

  const enterprise = [
    {
      name: "LMS for Driver Training",
      link: "/lms-driver-training",
    },
    {
      name: "Telemetry & Real-Time Tracking",
      link: "/telemetry-real-time-tracking",
    },
    {
      name: "Simulators",
      link: "/simulators",
    },
  ];

  const legal = [
    {
      name: "Privacy policy",
      link: "/privacy-policy",
    },
    {
      name: "Cookies policy",
      link: "/cookies-policy",
    },
    {
      name: "Terms & conditions",
      link: "/terms-conditions",
    },
  ];

  const inTouch = [
    {
      name: "Instagram",
      link: "",
    },
    {
      name: "Facebook",
      link: "",
    },
    {
      name: "LinkedIn",
      link: "",
    },
    {
      name: "X (Twitter)",
      link: "",
    },
  ];

  return (
    <div
      className="pb-[4rem] bg-[#12131A]"
      style={{
        // height: "100%",
        width: "100%",
        backgroundImage: `url(${FooterBG})`,
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="w-[100%] mb-[4rem]"
        style={{
          height: "100%",
          width: "85%",
          backgroundImage: `url(${FooterTopBG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "0 0 100px 0",
          paddingLeft: "6rem",
        }}
      >
        <div className="max-w-[1350px] m-auto flex justify-between p-[3rem]">
          <div className="basis-[40%]">
            <h3 className="text-[56px] font-qanelas_b leading-[69px] mb-8">
              Do you need more <br />
              information?
            </h3>
          </div>
          <div className="basis-[40%]">
            <p className="font-qanelas_m w-[70%] mb-5">
              Ready to enhance driver performance and make the roads safer for
              everyone? Reach out to us today and take the first step!
            </p>
            <Button name={"Schedule a demo"} theme={"transparent"} />
          </div>
        </div>
      </div>
      <div className="max-w-[1350px] m-auto flex">
        <div className="basis-[17%]">
          <h6 className="text-[#94A3B8] text-[14px] mb-[15px]">MENU</h6>
          {menu.map((item, index) => (
            <p
              key={index}
              className="text-[14px] mb-[15px] cursor-pointer"
              onClick={() => {
                navigate(item.link);
              }}
            >
              {item.name}
            </p>
          ))}
        </div>
        <div className="basis-[20%]">
          <h6 className="text-[#94A3B8] text-[14px] mb-[15px]">ENTERPRISE</h6>
          {enterprise.map((item, index) => (
            <p
              key={index}
              className="text-[14px] mb-[15px] cursor-pointer"
              onClick={() => {
                navigate(item.link);
              }}
            >
              {item.name}
            </p>
          ))}
        </div>
        <div className="basis-[20%]">
          <h6 className="text-[#94A3B8] text-[14px] mb-[15px]">LEGAL</h6>
          {legal.map((item, index) => (
            <p
              key={index}
              className="text-[14px] mb-[15px] cursor-pointer"
              onClick={() => {
                navigate(item.link);
              }}
            >
              {item.name}
            </p>
          ))}
        </div>
        <div className="basis-[20%]">
          <h6 className="text-[#94A3B8] text-[14px] mb-[15px]">
            STAY IN TOUCH
          </h6>
          {inTouch.map((item, index) => (
            <p key={index} className="text-[14px] mb-[15px] cursor-pointer">
              {item.name}
            </p>
          ))}
        </div>
        <div className="basis-[23%]">
          <p className="text-[#94A3B8] text-[14px] mb-[15px]">
            Veers provides a comprehensive digital driver training platform
            utilising an LMS (Learning Management System), simulators, and
            telemetry systems for driver behaviour tracking, training,
            evaluation, and certification to improve the safety and efficiency
            of commercial motor vehicles.
          </p>
        </div>
      </div>
      <div className="h-[13rem]"></div>
    </div>
  );
};

export default Footer;
