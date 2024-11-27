import React, { useCallback } from "react";
import { ReactComponent as LogoWhite } from "assets/icons/veer-logo-white.svg";
import { ReactComponent as LogoBlack } from "assets/icons/veer-logo-black.svg";
import { ReactComponent as LightHamburger } from "assets/icons/hamburger.svg";
import { ReactComponent as DarkHamburger } from "assets/icons/hamburger-black.svg";
import Button from "./Inputs/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useModal } from "layouts/MainLayout";

import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const Header = () => {
  const { toggleMenu } = useModal();
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

  const test = useCallback(
    (item) => {
      const regex = new RegExp(item?.toLowerCase());
      // console.log("Got here", regex.exec(pathname));

      return regex.exec(pathname);
    },
    [pathname]
  );

  const lightTheme =
    pathname.toLowerCase().includes("faq") ||
    pathname.toLowerCase().includes("contact-us") ||
    pathname.toLowerCase().includes("solutions") ||
    pathname.toLowerCase().includes("privacy-policy");

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className="absolute w-full py-[20px]"
    >
      <div
        className={`flex justify-between items-center h-[60px] lg:h-[80px] max-w-[1350px] w-[90%] 2xl:w-full m-auto rounded-[50px] px-[2rem] ${
          lightTheme ? "bg-white" : "backdrop-blur-sm bg-white/10"
        }`}
      >
        {lightTheme ? (
          <LogoBlack
            className="w-[5rem] xl:w-[6.5rem] cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        ) : (
          <LogoWhite
            className="w-[5rem] xl:w-[6.5rem] cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        )}
        <div className="hidden lg:flex items-center gap-10">
          {menuOptions.map((item, index) => (
            <p
              key={index}
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
        <div className="hidden lg:flex items-center gap-6">
          <p
            className={`font-qanelas_m text-14 cursor-pointer ${
              lightTheme ? "text-black" : ""
            }`}
          >
            Log in
          </p>
          <Button name={"Get Started"} theme={"primary"} />
        </div>
        <div className="lg:hidden">
          {lightTheme ? (
            <DarkHamburger onClick={() => toggleMenu()} />
          ) : (
            <LightHamburger onClick={() => toggleMenu()} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
