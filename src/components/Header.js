import React from "react";
import { ReactComponent as LogoWhite } from "assets/icons/veer-logo-white.svg";
import Button from "./Button";

const Header = () => {
  return (
    <div className="absolute w-full">
      <div className="flex justify-between items-center h-[90px] max-w-[1350px] m-auto backdrop-blur-sm">
        <LogoWhite />
        <div className="flex items-center gap-10 font-qanelas_m text-14">
          <p className="cursor-pointer">Veer solutions</p>
          <p className="cursor-pointer">About us</p>
          <p className="cursor-pointer">FAQ</p>
          <p className="cursor-pointer">Contact us</p>
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
