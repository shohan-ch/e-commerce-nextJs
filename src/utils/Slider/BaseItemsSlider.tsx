"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import IconSvg from "@/icons/IconSvg";
import style from "./BaseItemsSlider.module.css";

type Props = {
  data: any[];
  title: string;
};

const BaseItemsSlider = (props: Props) => {
  const { title, data } = props;
  const [isButtonVisible, setIsButtonVisible] = useState<Boolean>(false);
  const [screenSize, setScreenSize] = useState<any>(window.innerWidth);
  const scrollRef = useRef<any>(null);

  function handleResize() {
    setScreenSize(window.innerWidth);
  }
  const handleScroll = (scrollType: string) => () => {
    let offset: number;
    window.addEventListener("resize", handleResize);
    if (screenSize >= 1024) {
      offset = 1700;
    } else if (screenSize >= 800) {
      offset = 790;
    } else {
      offset = 500;
    }
    if (scrollType == "increment") {
      scrollRef.current.scrollLeft += offset;
    } else {
      scrollRef.current.scrollLeft -= offset;
    }
    // scrollRef.current.scrollLeft += scrollOffset;
  };

  const handleScrollToggle = () => {
    setTimeout(() => {
      scrollRef.current.classList.toggle(style.scrollHide);
    }, 300);
    setIsButtonVisible(!isButtonVisible);
  };

  return (
    <div
      onMouseLeave={handleScrollToggle}
      onMouseEnter={handleScrollToggle}
      className={`shadow-sm border rounded-md p-4 relative hover:cursor-pointer my-8`}
    >
      <h2 className="font-bold text-2xl mt-3">{title}</h2>
      <div
        ref={scrollRef}
        className={`${style.scrollHide} md:h-[17vh] h-[13vh] flex justify-evenly overflow-x-auto scroll-smooth`}
      >
        {data &&
          data.slice(0, 17).map((product, index) => (
            <div key={index}>
              <div className="flex items-center justify-center lg:w-[180px] xl:w-[270px] w-[110px] md:w-[140px] ">
                <Image
                  src={product.coverImage}
                  alt={product.title}
                  width={140}
                  height={140}
                />
              </div>
            </div>
          ))}
      </div>
      {/* Next Prev Buttons */}
      <div
        className={`${
          !isButtonVisible ? "hidden" : ""
        } cursor-pointer absolute top-[55%] hover:border-primary transition-colors duration-300 -left-4 border shadow-md transform -translate-y-1/2  bg-white size-10 rounded-full`}
        onClick={handleScroll("decrement")}
      >
        <div className="h-full flex justify-center items-center ">
          <IconSvg name="prev" />
        </div>
      </div>

      <div
        className={`${
          !isButtonVisible ? "hidden" : ""
        } cursor-pointer absolute top-[55%]  -right-4 border hover:border-primary transition-colors duration-300 shadow-md transform -translate-y-1/2 bg-white size-10 rounded-full`}
        onClick={handleScroll("increment")}
      >
        <div className="h-full flex justify-center items-center">
          <IconSvg name="next" />
        </div>
      </div>
    </div>
  );
};

export default BaseItemsSlider;
