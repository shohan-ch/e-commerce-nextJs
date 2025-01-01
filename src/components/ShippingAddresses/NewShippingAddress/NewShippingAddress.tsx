import BaseInput from "@/utils/Forms/BaseInput";
import BaseSelect from "@/utils/Forms/BaseSelect";
import React, { useEffect, useState } from "react";
import addresses from "../../../data/addresses.json";
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
    if (form.region) {
      let filterCity = cachedCity.filter(
        (c: any) => c.regionId == parseInt(form.region)
      );
      setCity(filterCity);
      setCachedCity(addresses.city);
    }

    if (form.city) {
      let filterArea = cachedArea.filter(
        (a: any) => a.cityId == parseInt(form.city)
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
            name="region"
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
            name="city"
            label="City"
            handelChange={handleFormChange}
            isAllowSearch
            options={city}
            disable={!form.region}
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
            name="area"
            label="Area"
            handelChange={handleFormChange}
            isAllowSearch
            options={area}
            disable={!form.city}
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
