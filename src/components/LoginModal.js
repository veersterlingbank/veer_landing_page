import Button from "./Inputs/Button";
import { ReactComponent as BackArrow } from "assets/icons/back-arrow-left.svg";
import { useState } from "react";
import { useModal } from "layouts/MainLayout";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const LoginModal = () => {
  const { closeLoginModal } = useModal();
  const [selectedRole, setSelectedRole] = useState("admin"); 

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  const submit = () => {
    if (selectedRole === 'driver') {
      window.location.href = "https://app.veer.ng/driver/auth/login";
    } else {
      window.location.href ="https://app.veer.ng/auth/login";
    }
  }



  return (
    <div className="bg-[#00000046] h-[100vh] w-[100vw] fixed top-0 left-0 z-20">
      <div className="py-[3rem] xl:py-[5rem] px-[3rem] xl:px-[8rem] h-[100vh] w-full md:w-[70%] bg-white absolute right-0">
        <div className="lg:flex lg:space-x-[4rem]">
          <div className="">
            <Button
              children={
                <div className="flex space-x-4">
                  <BackArrow />
                  <p className="text-[#191C24]">Back</p>
                </div>
              }
              theme={""}
              className={"lg:w-full bg-[#EEEEEE]"}
              onClick={() => closeLoginModal()}
            />
          </div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="h-[80vh] lg:h-[85vh] pb-[6rem] overflow-y-auto w-full lg:w-[60%]"
          >
            <h3 className="text-32 font-qanelas_b w-full text-[#0D0E13] leading-[40px] mb-2">
              Continue to Veer
            </h3>
            <p className="font-qanelas_m text-[#191C24] mb-8">
              Select your preferred option below
            </p>
            <div>
              {/* Admin Option */}
              <div
                className={`w-full mb-[1rem] px-4 py-6 rounded-lg cursor-pointer flex items-center justify-between bg-[#F2F2F2] ${
                  selectedRole === "admin"
                    ? "border border-[#3E3B3B] bg-white"
                    : "border border-gray-300 bg-gray-100"
                }`}
                onClick={() => handleRoleChange("admin")}
              >
                <input
                  type="radio"
                  id="admin"
                  name="role"
                  value="admin"
                  checked={selectedRole === "admin"}
                  onChange={() => handleRoleChange("admin")}
                  className="hidden"
                />
                <label
                  htmlFor="admin"
                  className="text-lg font-qanelas_b text-black"
                >
                  Login as admin
                </label>
                <div
                  className={`w-5 h-5 rounded-full border-2 border-[#C8C8C8] ${
                    selectedRole === "admin" ? "bg-black" : "border-[#C8C8C8]"
                  }`}
                ></div>
              </div>

              {/* Driver Option */}
              <div
                className={`w-full px-4 py-6 rounded-lg cursor-pointer flex items-center justify-between bg-[#F2F2F2] ${
                  selectedRole === "driver"
                    ? "border border-[#3E3B3B] bg-white"
                    : "border border-gray-300 bg-gray-100"
                }`}
                onClick={() => handleRoleChange("driver")}
              >
                <input
                  type="radio"
                  id="driver"
                  name="role"
                  value="driver"
                  checked={selectedRole === "driver"}
                  onChange={() => handleRoleChange("driver")}
                  className="hidden"
                />
                <label
                  htmlFor="driver"
                  className="text-lg font-qanelas_b text-black"
                >
                  Login as a driver
                </label>
                <div
                  className={`w-5 h-5 rounded-full border-2 border-[#C8C8C8] ${
                    selectedRole === "driver" ? "bg-black" : "border-[#C8C8C8]"
                  }`}
                ></div>
              </div>
              <Button
                name={"Continue"}
                theme={"primary"}
                className={"w-full mt-[3rem]"}
                disabled={false}
                onClick={() => submit()}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
