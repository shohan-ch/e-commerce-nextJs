"use client";
import React, { useRef, useState } from "react";
import data from "../../data/products.json";
import Image from "next/image";
import IconSvg from "@/icons/IconSvg";

type Props = {
  title?: string;
};

const ProductSlider = (props: Props) => {
  const [isButtonVisible, setIsButtonVisible] = useState<Boolean>(false);
  const [screenSize, setScreenSize] = useState<any>(window.innerWidth);
  const scrollRef = useRef<any>(null);
  const { title } = props;

  function handleResize() {
    setScreenSize(window.innerWidth);
  }
  const handleScroll = (scrollType: string) => () => {
    let offset: number;
    window.addEventListener("resize", handleResize);
    console.log(screenSize);
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
    scrollRef.current.classList.toggle("scrollHide");
    setIsButtonVisible(!isButtonVisible);
  };

  return (
    <div
      onMouseLeave={handleScrollToggle}
      onMouseEnter={handleScrollToggle}
      className="border shadow-sm p-4 relative hover:cursor-pointer my-10"
    >
      <h2 className="font-bold text-2xl mb-5 mt-3">{title}</h2>
      <div
        ref={scrollRef}
        className="scrollHide md:h-[16vh] h-[13vh] flex justify-evenly overflow-x-auto scroll-smooth"
      >
        {data &&
          data.slice(0, 17).map((product, index) => (
            <div>
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
        } cursor-pointer absolute top-[62%] hover:border-primary transition-colors duration-300 -left-4 border shadow-md transform -translate-y-1/2  bg-white size-10 rounded-full`}
        onClick={handleScroll("decrement")}
      >
        <div className="h-full flex justify-center items-center ">
          <IconSvg name="prev" />
        </div>
      </div>

      <div
        className={`${
          !isButtonVisible ? "hidden" : ""
        } cursor-pointer absolute top-[62%]  -right-4 border hover:border-primary transition-colors duration-300 shadow-md transform -translate-y-1/2 bg-white size-10 rounded-full`}
        onClick={handleScroll("increment")}
      >
        <div className="h-full flex justify-center items-center">
          <IconSvg name="next" />
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
