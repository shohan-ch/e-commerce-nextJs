"use client";
import IconSvg from "@/icons/IconSvg";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";

type ArrayObject = {
  image: string;
  title: string;
  subTitle?: string;
  link: string;
  bgColor?: string;
};

type Props = {
  data: ArrayObject[];
};

const BaseSlider = (props: Props) => {
  const { data } = props;
  const [screenSize, setScreenSize] = useState<any>(window.innerWidth);
  const [length, setLength] = useState<number>(3);
  const [minLength, setMinLength] = useState<number>(3);
  const [startFrom, setStartFrom] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    if (screenSize >= 1380) {
      setLength(4);
      setMinLength(4);
    } else if (screenSize >= 1024) {
      setLength(3);
      setMinLength(3);
    } else if (screenSize >= 768) {
      setLength(2);
      setMinLength(2);
    } else {
      setLength(1);
      setMinLength(1);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  const handleIncrement = () => {
    if (data.length != length) {
      setLength(length + 1);
      setStartFrom(startFrom + 1);
    } else {
      setLength(length);
      setStartFrom(startFrom);
    }
  };
  const handleDecremt = () => {
    if (length > minLength) {
      setLength(length - 1);
      setStartFrom(startFrom - 1);
    } else {
      setLength(length);
      setStartFrom(startFrom);
    }
  };

  return (
    <div className="flex gap-x-4 relative w-full">
      {data &&
        data.slice(startFrom, length).map((slider, index) => (
          <div
            key={index}
            className="w-full hover:shadow transition-all duration-150 group"
          >
            <Link href={slider.link}>
              <div
                className="p-4 "
                style={{
                  background: slider.bgColor,
                }}
              >
                <div className="flex gap-x-5 items-center">
                  <div>
                    <Image
                      src={slider.image}
                      alt={`slider_${index + 1}`}
                      width={180}
                      height={150}
                      className="group-hover:scale-110 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <h2 className="font-semibold mb-5 text-lg">
                      {slider.title}
                    </h2>
                    <p className="text-gray-800">{slider.subTitle}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      {/* Button */}

      {screenSize <= 1380 && (
        <>
          <div
            className="cursor-pointer absolute top-[50%] hover:border-primary transition-colors duration-300 -left-4 border shadow-md transform -translate-y-1/2  bg-white size-10 rounded-full  "
            onClick={handleDecremt}
          >
            <div className="h-full flex justify-center items-center ">
              <IconSvg name="prev" />
            </div>
          </div>

          <div
            className="cursor-pointer absolute -right-4 border hover:border-primary transition-colors duration-300 shadow-md top-[50%] transform -translate-y-1/2 bg-white size-10 rounded-full"
            onClick={handleIncrement}
          >
            <div className="h-full flex justify-center items-center">
              <IconSvg name="next" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BaseSlider;
