"use client";
import React, { useRef } from "react";
import data from "../../data/products.json";
import Image from "next/image";
import IconSvg from "@/icons/IconSvg";

type Props = {
  title?: string;
};

const ProductSlider = (props: Props) => {
  const scrollRef = useRef<any>(null);
  const { title } = props;
  const handleScroll = (scrollOffset: number) => () => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="border shadow-sm p-4 relative">
      <h2 className="font-bold text-lg mb-3">{title}</h2>
      <div
        ref={scrollRef}
        className="scrollHide flex justify-evenly relative overflow-x-auto scroll-smooth "
      >
        {data &&
          data.slice(0, 17).map((product, index) => (
            <div>
              <div className="flex items-center justify-center lg:w-[180px] w-[90px]">
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
        className="cursor-pointer absolute top-[50%] hover:border-primary transition-colors duration-300 -left-4 border shadow-md transform -translate-y-1/2  bg-white size-10 rounded-full  "
        onClick={handleScroll(-1000)}
      >
        <div className="h-full flex justify-center items-center ">
          <IconSvg name="prev" />
        </div>
      </div>

      <div
        className=" cursor-pointer absolute -right-4 border hover:border-primary transition-colors duration-300 shadow-md top-[50%] transform -translate-y-1/2 bg-white size-10 rounded-full"
        onClick={handleScroll(1000)}
      >
        <div className="h-full flex justify-center items-center">
          <IconSvg name="next" />
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
