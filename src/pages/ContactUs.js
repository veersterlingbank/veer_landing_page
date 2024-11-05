import Button from "components/Inputs/Button";
import CheckBox from "components/Inputs/CheckBox";
import Input from "components/Inputs/Input";
import TextArea from "components/Inputs/TextArea";
import { useState } from "react";

const ContactUs = () => {
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

  const loading = false;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gradient-to-b from-[#FFEDED] to-[#FFFFFF] pb-[5rem]">
      <div className="max-w-[1350px] m-auto pt-[13rem] px-[4rem] flex justify-between">
        <div className="basis-[35%]">
          <h1 className="font-qanelas_b text-[56px] leading-[69px] text-[#0D0E13] mb-[2rem]">
            Get in touch
          </h1>
          <div className="mb-[3rem]">
            <p className="text-light_brand_primary font-qanelas_m mb-[0.5rem]">
              HEAD OFFICE
            </p>
            <p className="font-qanelas_m text-[#222222]">
              Sterling Towers, <br />
              20 Marina, Lagos Island, Lagos. <br />
              017003270
            </p>
          </div>
          <div className="">
            <p className="text-light_brand_primary font-qanelas_m mb-[0.5rem]">
              CONTACT LINKS
            </p>
            <p className="font-qanelas_m text-[#222222]">info@veer.ng</p>
            <p className="font-qanelas_m text-[#222222]">+234 7066158264</p>
          </div>
        </div>
        <div className="basis-[55%]">
          <div className="bg-white py-[3rem] px-[4rem] rounded-[20px]">
            <h5 className="text-black font-qanelas_b text-[24px] mb-[2rem]">
              Write us a message
            </h5>
            <form action="">
              <div className="flex justify-between ">
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
              <div className="flex justify-between ">
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
              <Button name={"Submit"} theme={"primary"} className={"w-full"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
