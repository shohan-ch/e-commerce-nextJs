import BaseInput from "@/utils/Forms/BaseInput";
import BaseSelect from "@/utils/Forms/BaseSelect";
import React, { useEffect, useState } from "react";
import addresses from "../../../data/addresses.json";
import BaseLabelRadio from "@/utils/Forms/BaseLabelRadio";
import IconSvg from "@/icons/IconSvg";
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
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                className="bi bi-briefcase-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
              </svg>
            }
          />
          <BaseLabelRadio
            name="addressType"
            value={"office"}
            label="Office"
            handleChange={handleFormChange}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                className="bi bi-briefcase-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
              </svg>
            }
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
