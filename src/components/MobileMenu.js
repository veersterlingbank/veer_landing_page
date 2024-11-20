import { ReactComponent as LogoBlack } from "assets/icons/veer-logo-black.svg";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CloseMenu } from "assets/icons/close-menu.svg";
import { useModal } from "layouts/MainLayout";
import Button from "./Inputs/Button";

const MobileMenu = () => {
  const navigate = useNavigate();
  const { closeMenu } = useModal();
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
  return (
    <div className="bg-white absolute top-0 left-0 w-full h-[100vh] p-[2rem]">
      <div className="flex justify-between h-[60px] px-[1rem]">
        <LogoBlack
          className="w-[6.5rem] cursor-pointer"
          onClick={() => {
            closeMenu();
            navigate("/");
          }}
        />
        <CloseMenu onClick={() => closeMenu()} />
      </div>
      <div className="mt-[5rem] pb-[1rem] border-b border-b-[#DEDEDE]">
        <p className="text-light_brand_primary font-qanelas_m mb-[1rem]">
          MENU
        </p>
        {menuOptions.map((item, index) => (
          <p
            key={index}
            className="font-qanelas_m text-[32px] mb-[2.5rem] text-[#222222] cursor-pointer"
            onClick={() => {
              closeMenu();
              navigate(item.link);
            }}
          >
            {item.name}
          </p>
        ))}
      </div>
      <div className="flex space-x-4 mt-[2rem]">
        <Button
          name={"Log in"}
          theme={"transparent"}
          className={"border-[#191C24] text-[#191C24] w-full"}
        />
        <Button name={"Get Started"} theme={"primary"} className={"w-full"} />
      </div>
    </div>
  );
};

export default MobileMenu;
