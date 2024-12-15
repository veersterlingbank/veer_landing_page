import Button from "./Inputs/Button";
import { ReactComponent as BackArrow } from "assets/icons/back-arrow-left.svg";
import Input from "./Inputs/Input";
import TextArea from "./Inputs/TextArea";
import Checkbox from "./Inputs/CheckBox";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "layouts/MainLayout";
import { DefaultDatepicker } from "./Inputs/DefaultDatepicker";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";
import SuccessModal from "./SuccessModal";

const ScheduleDemo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    companyName: "",
    companySize: "",
    role: "",
    preferredDemoDate: "",
    preferredDemoTime: "",
    additionalNote: "",
  });
  const { closeModal } = useModal();
  const navigate = useNavigate();
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
    !formData.companySize ||
    !formData.role ||
    !formData.preferredDemoDate ||
    !formData.preferredDemoTime ||
    !formData.additionalNote ||
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
    fetch("https://veer-niq4.onrender.com/api/v1/landing/schedule-demo", {
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
            throw new Error(data.message || "Failed to schedule demo.");
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
            companySize: "",
            role: "",
            preferredDemoDate: "",
            preferredDemoTime: "",
            additionalNote: "",
          });
          setShowSuccessModal(true)
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
              onClick={() => closeModal()}
            />
          </div>

          {showSuccessModal ? (
            <SuccessModal setShowSuccessModal={setShowSuccessModal} />
          ) : (
            <div className="h-[80vh] lg:h-[85vh] mt-[3rem] pb-[6rem] overflow-y-auto">
              <h3 className="text-32 font-qanelas_b w-full lg:w-[70%] text-[#0D0E13] leading-[40px] mb-2">
                Let us show you the future of drivers management.
              </h3>
              <p className="font-qanelas_m text-[#191C24] mb-8">
                Schedule your personalized demo today.
              </p>

              <form onSubmit={submit}>
                <div className="md:flex justify-between ">
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
                <div className="md:flex justify-between ">
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
                <div className="md:flex justify-between ">
                  <div className="basis-[47%]">
                    <div>
                      <label
                        htmlFor="companySize"
                        className="text-black mb-2 font-qanelas_m pt-2 cursor-text"
                      >
                        Company size
                      </label>
                      <select
                        id="companySize"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        required
                        className="h-[50px] px-4 mt-2 text-brand_secondary text-14 w-full outline-0 border font-qanelas_r hide_tap rounded-[5px] border-border_stroke_1 focus:border-brand_secondary focus:border"
                      >
                        <option disabled value="">
                          Select Company Size
                        </option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="501-1000">501-1000</option>
                        <option value="1000+">1000+</option>
                      </select>
                    </div>
                  </div>
                  {/* <div className="basis-[47%]">
                  <Input
                    label="Company size"
                    type="number"
                    id="companySize"
                    name="companySize"
                    readOnly={loading}
                    value={formData?.companySize}
                    onChange={handleChange}
                    showError={false}
                  />
                </div> */}
                  <div className="basis-[47%]">
                    <Input
                      label="Role/Position"
                      type="text"
                      id="role"
                      name="role"
                      readOnly={loading}
                      value={formData?.role}
                      onChange={handleChange}
                      showError={false}
                    />
                  </div>
                </div>
                <div className="md:flex justify-between ">
                  <div className="basis-[47%]">
                    <DefaultDatepicker
                      label="Preferred demo date"
                      containerVariant=""
                      minDate={new Date()}
                      maxDate={new Date("2030-12-31")}
                      onSelect={(e) =>
                        setFormData({ ...formData, preferredDemoDate: e })
                      }
                      name="date"
                      startDate={formData.preferredDemoDate}
                      showCalender={true}
                    />
                  </div>
                  <div className="basis-[47%]">
                    <DefaultDatepicker
                      label="Preferred demo time"
                      showTimeSelectOnly={true}
                      dateFormat="h:mm aa"
                      showTimeSelect={true}
                      timeCaption="Select Start time"
                      onSelect={(e) =>
                        setFormData({ ...formData, preferredDemoTime: e })
                      }
                      name="startTime"
                      value={formData.preferredDemoTime}
                      timeIntervals={30}
                      showTimeIcon={true}
                    />
                  </div>
                </div>
                <div className="">
                  <TextArea
                    label="Additional note (optional)"
                    placeholder="Start writing here"
                    id="message"
                    name="message"
                    readOnly={loading}
                    value={formData.additionalNote}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        additionalNote: e.target.value,
                      })
                    }
                    rows={3}
                  />
                </div>
                <div className="mt-[1rem] mb-[3rem]">
                  <Checkbox
                    status={agreedToProductUpdates}
                    onClick={() =>
                      setAgreedToProductUpdates(!agreedToProductUpdates)
                    }
                    label="I agree to receive communications about the demo and product updates."
                    className={"mb-2"}
                  />
                  <Checkbox
                    status={agreedToTerms}
                    onClick={() => setAgreedToTerms(!agreedToTerms)}
                    label={
                      <p className="font-qanelas_m text-brand_secondary text-14">
                        I agree to Veer’s{" "}
                        <span
                          className="text-brand_primary underline text-14 cursor-pointer"
                          onClick={() => {
                            closeModal();
                            navigate("/privacy-policy");
                          }}
                        >
                          Privacy policy
                        </span>{" "}
                        and
                        <span className="text-brand_primary underline text-14 cursor-pointer">
                          {" "}
                          Terms of use
                        </span>
                      </p>
                    }
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
                  // onClick={() => submit()}
                />
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleDemo;
