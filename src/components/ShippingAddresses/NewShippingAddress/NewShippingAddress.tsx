import BaseInput from "@/utils/Forms/BaseInput";
import BaseSelect from "@/utils/Forms/BaseSelect";
import React, { useEffect, useState } from "react";
import addresses from "../../../data/addresses.json";
import BaseLabelRadio from "@/utils/Forms/BaseLabelRadio";
import IconSvg from "@/icons/IconSvg";
import IconSvgFunction from "@/icons/IconSvgFunction";
type Props = {};

const NewShippingAddress = (props: Props) => {
  const [form, setForm] = useState<any>({});
  const [city, setCity] = useState<any[]>(addresses.city);
  const [cachedCity, setCachedCity] = useState<any[]>(addresses.city);
  const [area, setArea] = useState<any[]>(addresses.area);
  const [cachedArea, setCachedArea] = useState<any[]>(addresses.area);

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    if (form.regionId) {
      let filterCity = cachedCity.filter(
        (c: any) => c.regionId == parseInt(form.regionId)
      );
      setCity(filterCity);
      setCachedCity(addresses.city);
    }
    if (form.cityId) {
      let filterArea = cachedArea.filter(
        (a: any) => a.cityId == parseInt(form.cityId)
      );
      setArea(filterArea);
      setCachedArea(addresses.area);
    }
  }, [form]);

  const containerStyle = {
    display: "flex",
    columnGap: "20px",
    margin: "0px",
  };
  console.log(form, "formData");

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
            name="regionId"
            label="Region"
            handelChange={handleFormChange}
            isAllowSearch
            options={addresses.region}
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
          <BaseSelect
            name="cityId"
            label="City"
            handelChange={handleFormChange}
            isAllowSearch
            options={city}
            disable={!form.regionId}
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
          <BaseSelect
            name="areaId"
            label="Area"
            handelChange={handleFormChange}
            isAllowSearch
            options={area}
            disable={!form.cityId}
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

      <div className="flex justify-center">
        <div className="flex gap-x-4">
          <BaseLabelRadio
            name="addressType"
            value={"home"}
            label="Home"
            handleChange={handleFormChange}
            icon={IconSvgFunction("home")}
          />
          <BaseLabelRadio
            name="addressType"
            value={"office"}
            label="Office"
            handleChange={handleFormChange}
            icon={IconSvgFunction("briefCase")}
          />
        </div>
      </div>

      <div className="button-container flex justify-end">
        <button className="bg-gray-200 text-gray-600 p-2 text-center w-[90px]">
          Cancel
        </button>
        <button className="bg-primary p-2 text-white shadow text-center w-[90px] ml-4">
          Remove
        </button>
      </div>
    </>
  );
};

export default NewShippingAddress;
