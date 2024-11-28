import Button from "./Inputs/Button";
import { ReactComponent as BackArrow } from "assets/icons/back-arrow-left.svg";
import Input from "./Inputs/Input";
import TextArea from "./Inputs/TextArea";
import Checkbox from "./Inputs/CheckBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "layouts/MainLayout";
import { DefaultDatepicker } from "./Inputs/DefaultDatepicker";

const ScheduleDemo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    companyName: "",
    companySize: "",
    role: "",
    demoDate: "",
    demoTime: "",
    note: "",
  });
  const { closeModal } = useModal();
  const navigate = useNavigate();
  const [agreedToProductUpdates, setAgreedToProductUpdates] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const loading = false;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formData);
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
                </div>
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
                    onSelect={(e) => setFormData({ ...formData, demoDate: e })}
                    name="date"
                    startDate={formData.demoDate}
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
                    onSelect={(e) => setFormData({ ...formData, demoTime: e })}
                    name="startTime"
                    value={formData.demoTime}
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
                  value={formData.note}
                  onChange={(e) =>
                    setFormData({ ...formData, note: e.target.value })
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
              <Button
                name={"Submit"}
                theme={"primary"}
                className={"w-full"}
                // onClick={() => submit()}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDemo;
