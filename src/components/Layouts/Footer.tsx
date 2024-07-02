"use client";
import IconSvg from "@/icons/IconSvg";
import BaseInput from "@/utils/Forms/BaseInput";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import paymentImage from "../../../public/uploads/images/payment.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="px-10 py-4 bg-gray-50 shadow">
      <div className="grid xl:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 gap-8 my-5 border-b pb-3">
        <div className="space-y-5 ">
          <div className="logo flex items-center gap-x-4">
            <span>
              <IconSvg name="logo" />
            </span>
            <h3 className="font-bold text-xl">E-Commerce</h3>
          </div>
          <p>
            We offer high-quality foods and the best delivery service, and the
            food market you can blindly trust
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="font-bold text-xl">About Us</h2>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Customer Support</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="space-y-5">
          <h2 className="font-bold text-xl">Social</h2>
          <ul>
            <li>Facebook</li>
            <li>X</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div className="space-y-5">
          <h2 className="font-bold text-xl">Help</h2>
          <ul>
            <li>Payment</li>
            <li>Shipping</li>
            <li>Return And Replacement</li>
            <li>Chat With Us</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="space-y-5">
          <h2 className="font-bold text-xl">Subscribe Now</h2>
          <p>
            Subscribe your email for newsletter and featured news based on your
            interest
          </p>
          <BaseInput
            type="text"
            name="subscribeEmail"
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              console.log(e.target.value)
            }
          />
        </div>
      </div>
      <div className="flex gap-6 flex-col-reverse sm:flex-row sm:justify-between sm:items-center">
        <p>© Copyright 2024 E-Commerce All rights reserved</p>
        <div className="flex gap-x-4 items-center">
          <p className="text-sm">Payment Methods</p>
          <Image
            // src="/uploads/images/payment.png"
            src={paymentImage}
            alt="payment"
            className="border-2 border-black rounded-md w-[250px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
