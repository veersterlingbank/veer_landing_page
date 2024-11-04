import React from "react";
import { ReactComponent as LogoWhite } from "assets/icons/veer-logo-white.svg";
import Button from "./Button";

const Header = () => {
  return (
    <div className="absolute w-full py-[20px]">
      <div className="flex justify-between items-center h-[80px] max-w-[1350px] m-auto rounded-[50px] px-[2rem] backdrop-blur-sm bg-white/10">
        <LogoWhite className="w-[6.5rem]"/>
        <div className="flex items-center gap-10">
          <p className="cursor-pointer font-qanelas_m text-14">Veer solutions</p>
          <p className="cursor-pointer font-qanelas_m text-14">About us</p>
          <p className="cursor-pointer font-qanelas_m text-14">FAQ</p>
          <p className="cursor-pointer font-qanelas_m text-14">Contact us</p>
        </div>
        <div className="flex items-center gap-6">
          <p className="font-qanelas_m text-14 cursor-pointer">Log in</p>
          <Button name={"Get Started"} theme={"primary"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
