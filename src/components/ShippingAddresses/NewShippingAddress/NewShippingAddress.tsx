import BaseInput from "@/utils/Forms/BaseInput";
import BaseSelect from "@/utils/Forms/BaseSelect";
import { Fahkwang } from "next/font/google";
import React, { useState } from "react";
type Props = {};

const NewShippingAddress = (props: Props) => {
  const [form, setForm] = useState<any>({});

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  console.log(form, "data");

  const containerStyle = {
    display: "flex",
    columnGap: "20px",
    margin: "0px",
  };

  return (
    <>
      <div style={containerStyle}>
        <div className="flex-[5]">
          <BaseInput
            name="fullName"
            handleChange={handleFormChange}
            label="Full Name"
            placeHolder="Enter your first and last name"
            style="focus:border-primary !mb-0"
          />
        </div>

        <div className="flex-[5]">
          <BaseSelect
            name="region"
            label="Region"
            handelChange={handleFormChange}
            // disable={true}
            isAllowSearch
            options={[
              { name: "first", value: "1" },
              { name: "second", value: "2" },
            ]}
          />
        </div>
      </div>
      <div style={containerStyle}>
        <div className="flex-[5]">
          <BaseInput
            name="phone"
            handleChange={handleFormChange}
            label="Phone Number"
            placeHolder="Please enter your phone number"
            style="focus:border-primary"
          />
        </div>

        <div className="flex-[5]">
          <BaseInput
            name="Region"
            handleChange={handleFormChange}
            label="City"
            placeHolder="Enter your first and last name"
            style="focus:border-primary"
          />
        </div>
      </div>
      <div style={containerStyle}>
        <div className="flex-[5]">
          <BaseInput
            name="fullName"
            handleChange={handleFormChange}
            label="Building / House No / Floor / Street"
            placeHolder="Enter your first and last name"
            style="focus:border-primary"
          />
        </div>

        <div className="flex-[5]">
          <BaseInput
            name="Region"
            handleChange={handleFormChange}
            label="Area"
            placeHolder="Enter your first and last name"
            style="focus:border-primary"
          />
        </div>
      </div>
      <div style={containerStyle}>
        <div className="flex-[5]">
          <BaseInput
            name="fullName"
            handleChange={handleFormChange}
            label="Colony / Suburb / Locality / Landmark"
            placeHolder="Please enter"
            style="focus:border-primary"
          />
        </div>

        <div className="flex-[5]">
          <BaseInput
            name="address"
            handleChange={handleFormChange}
            label="Address"
            placeHolder="For Example: House# 123, Street# 123, ABC Road"
            style="focus:border-primary"
          />
        </div>
      </div>
    </>
  );
};

export default NewShippingAddress;
