import Button from "components/Inputs/Button";
import CheckBox from "components/Inputs/CheckBox";
import Input from "components/Inputs/Input";
import TextArea from "components/Inputs/TextArea";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "variants.js";
import SuccessModal from "components/SuccessModal";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    companyName: "",
    message: "",
  });
  const [agreedToProductUpdates, setAgreedToProductUpdates] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const disabled =
    !formData.firstName ||
    !formData.lastName ||
    !formData.emailAddress ||
    !formData.phoneNumber ||
    !formData.companyName ||
    !formData.message ||
    !agreedToProductUpdates ||
    !agreedToTerms;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (responseMessage !== "") {
      setTimeout(() => {
        setResponseMessage("");
      }, 3000);
    }
  }, [responseMessage]);

  const submit = (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    fetch("https://veer-niq4.onrender.com/api/v1/landing/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json().then((data) => {
          if (response.ok) {
            return data;
          } else {
            throw new Error(data.message || "Failed to send message.");
          }
        });
      })
      .then((data) => {
        if (data.code === 201) {
          setFormData({
            firstName: "",
            lastName: "",
            emailAddress: "",
            phoneNumber: "",
            companyName: "",
            message: "",
          });
          setShowSuccessModal(true);
        }
      })
      .catch((error) => {
        setResponseMessage(
          error.message || "An error occurred. Please try again later."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-gradient-to-b from-[#FFEDED] to-[#FFFFFF] pb-[5rem]">
      <div className="max-w-[1350px] w-full md:w-[90%] m-auto pt-[10rem] xl:pt-[13rem] md:flex justify-between">
        <div className="px-[2rem] md:px-0 basis-[35%] pt-[2rem]">
          <motion.h1
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="font-qanelas_b text-[36px] lg:text-[56px] leading-[43px] lg:leading-[69px] text-[#0D0E13] mb-[2rem]"
          >
            Get in touch
          </motion.h1>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="mb-[1.5rem] xl:mb-[3rem]"
          >
            <p className="text-light_brand_primary font-qanelas_m mb-[0.5rem]">
              HEAD OFFICE
            </p>
            <p className="font-qanelas_m text-[#222222]">
              Sterling Towers, <br />
              20 Marina, Lagos Island, Lagos. <br />
              017003270
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="mb-[3rem] xl:mb-0"
          >
            <p className="text-light_brand_primary font-qanelas_m mb-[0.5rem]">
              CONTACT LINKS
            </p>
            <p className="font-qanelas_m text-[#222222]">info@veer.ng</p>
            <p className="font-qanelas_m text-[#222222]">+234 7066158264</p>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="basis-[60%] xl:basis-[55%]"
        >
          <div className="bg-white py-[3rem] px-[2rem] xl:px-[4rem] rounded-[20px]">
            {showSuccessModal ? (
              <SuccessModal setShowSuccessModal={setShowSuccessModal} />
            ) : (
              <div>
                <h5 className="text-black font-qanelas_b text-[24px] mb-[2rem]">
                  Write us a message
                </h5>
                <form onSubmit={submit}>
                  <div className="lg:flex justify-between ">
                    <div className="basis-[47%]">
                      <Input
                        label="First Name"
                        type="text"
                        id="firstName"
                        name="firstName"
                        readOnly={loading}
                        value={formData?.firstName}
                        onChange={handleChange}
                        showError={false}
                      />
                    </div>
                    <div className="basis-[47%]">
                      <Input
                        label="Last Name"
                        type="text"
                        id="lastName"
                        name="lastName"
                        readOnly={loading}
                        value={formData?.lastName}
                        onChange={handleChange}
                        showError={false}
                      />
                    </div>
                  </div>
                  <div className="lg:flex justify-between ">
                    <div className="basis-[47%]">
                      <Input
                        label="Email address"
                        type="text"
                        id="emailAddress"
                        name="emailAddress"
                        readOnly={loading}
                        value={formData?.emailAddress}
                        onChange={handleChange}
                        showError={false}
                      />
                    </div>
                    <div className="basis-[47%]">
                      <Input
                        label="Phone number"
                        type="number"
                        id="phoneNumber"
                        name="phoneNumber"
                        readOnly={loading}
                        value={formData?.phoneNumber}
                        onChange={handleChange}
                        showError={false}
                      />
                    </div>
                  </div>
                  <div className="">
                    <Input
                      label="Company name"
                      type="text"
                      id="companyName"
                      name="companyName"
                      readOnly={loading}
                      value={formData?.companyName}
                      onChange={handleChange}
                      showError={false}
                    />
                  </div>
                  <div className="">
                    <TextArea
                      label={"Your message"}
                      placeholder="Start writing here"
                      id="message"
                      name="message"
                      readOnly={loading}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={3}
                    />
                  </div>
                  <div className="mt-[1rem] mb-[3rem]">
                    <CheckBox
                      status={agreedToProductUpdates}
                      onClick={() =>
                        setAgreedToProductUpdates(!agreedToProductUpdates)
                      }
                      label="I agree to receive communications about the demo and product updates."
                      className={"mb-2"}
                    />
                    <CheckBox
                      status={agreedToTerms}
                      onClick={() => setAgreedToTerms(!agreedToTerms)}
                      label="I agree to Veer’s Privacy policy and Terms of use"
                    />
                  </div>
                  {responseMessage && (
                    <motion.p
                      variants={fadeIn("right", 0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.7 }}
                      className="py-2 px-4 text-error bg-[#fff1f1] text-14 font-qanelas_sb rounded-lg mb-6"
                    >
                      {responseMessage}
                    </motion.p>
                  )}
                  <Button
                    name={"Submit"}
                    theme={"primary"}
                    className={"w-full"}
                    disabled={disabled}
                    loading={loading}
                  />
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
