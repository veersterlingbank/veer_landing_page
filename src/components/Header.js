import React, { useCallback } from "react";
import { ReactComponent as LogoWhite } from "assets/icons/veer-logo-white.svg";
import { ReactComponent as LogoBlack } from "assets/icons/veer-logo-black.svg";
import Button from "./Inputs/Button";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const menuOptions = [
    {
      name: "Veer solutions",
      link: "/solutions",
    },
    {
      name: "About us",
      link: "about-us",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
    {
      name: "Contact us",
      link: "contact-us",
    },
  ];
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  const test = useCallback(
    (item) => {
      const regex = new RegExp(item?.toLowerCase());
      console.log("Got here", regex.exec(pathname));

      return regex.exec(pathname);
    },
    [pathname]
  );

  const lightTheme =
    pathname.toLowerCase().includes("faq") ||
    pathname.toLowerCase().includes("contact-us");
  return (
    <div className="absolute w-full py-[20px]">
      <div
        className={`flex justify-between items-center h-[80px] max-w-[1350px] m-auto rounded-[50px] px-[2rem] ${
          lightTheme ? "bg-white" : "backdrop-blur-sm bg-white/10"
        }`}
      >
        {lightTheme ? (
          <LogoBlack
            className="w-[6.5rem] cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        ) : (
          <LogoWhite
            className="w-[6.5rem] cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        )}
        <div className="flex items-center gap-10">
          {menuOptions.map((item) => (
            <p
              className={`cursor-pointer font-qanelas_m text-14 pb-[5px]] ${
                lightTheme ? "text-black" : ""
              } ${
                test(item.name) ? "border-b-[1.5px border-brand_primary" : ""
              }`}
              onClick={() => {
                navigate(item.link);
              }}
            >
              {item.name}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <p
            className={`font-qanelas_m text-14 cursor-pointer ${
              lightTheme ? "text-black" : ""
            }`}
          >
            Log in
          </p>
          <Button name={"Get Started"} theme={"primary"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
