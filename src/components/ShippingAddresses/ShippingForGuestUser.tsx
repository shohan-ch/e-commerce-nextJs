import BaseInput from "@/utils/Forms/BaseInput";
import BaseTextArea from "@/utils/Forms/BaseTextArea";
import React, { useState } from "react";

type Props = {};

const ShippingForGuestUser = (props: Props) => {
  const [form, setForm] = useState<any>({});

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  console.log(form, "data");

  return (
    <div className="px-4 py-2 mb-5">
      <h2 className="font-semibold text-xl mb-5">Shipping & Billing</h2>
      <BaseInput
        name="name"
        handleChange={handleFormChange}
        label="Name (আপনার নাম)"
        placeHolder="Name (আপনার নাম)"
        style="focus:border-primary"
      />
      <BaseInput
        name="mobile"
        handleChange={handleFormChange}
        label="Mobile Number (মোবাইল নাম্বার)"
        placeHolder="Mobile Number (মোবাইল নাম্বার)"
        style="focus:border-primary"
      />
      <BaseInput
        name="address"
        handleChange={handleFormChange}
        label="Full Address (সম্পূর্ণ ঠিকানা)"
        placeHolder="House, Road, Area and Thana"
        style="focus:border-primary"
      />
      <BaseInput
        name="email"
        handleChange={handleFormChange}
        label="E-mail (ই-মেইল)"
        placeHolder="E-mail"
        style="focus:border-primary"
      />

      <BaseTextArea
        handleChange={handleFormChange}
        name="comments"
        placeHolder="Order Comments (মন্তব্য)"
        label="Additional Comments"
        style="focus:border-primary"
      />
    </div>
  );
};

export default ShippingForGuestUser;
