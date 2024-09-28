import IconSvg from "@/icons/IconSvg";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  data: any;
};

const BaseProductDetailsSlider = (props: Props) => {
  const { data, title } = props;

  const handleScroll = (type: string) => () => {
    alert(type);
  };

  return (
    <>
      <div className="mt-12 relative">
        <h3 className="font-bold text-xl mb-5">{title}</h3>
        <div className=" flex justify-evenly gap-4 overflow-x-auto h-[380px] scroll-smooth">
          {data &&
            data.map((product: any, index: number) => {
              return (
                <div
                  key={index}
                  className="w-[250px] flex-none  border rounded-lg shadow-sm p-4 cursor-pointer group hover:shadow-md transition-all duration-200"
                >
                  <div className="imageSection relative h-[50%]">
                    <Image
                      src={product.coverImage}
                      alt={"image_" + index}
                      width={170}
                      height={150}
                      className="text-center mx-auto group-hover:scale-110 transition-all duration-200"
                    />
                    <button className="absolute right-0 bottom-0 bg-primary size-10 rounded-full  flex justify-center items-center">
                      <IconSvg name="plus" />
                    </button>
                  </div>
                  <div className="space-y-3 mt-5">
                    <p className="font-semibold">
                      <span className="text-lg">TK.{product.salePrice}</span>
                      <sub className="p-2 text-xs line-through">
                        TK. {product.price}
                      </sub>
                    </p>
                    <p className="text-lg">{product.title}</p>
                    <p className="text-base text-gray-700">
                      {product.quantity}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        {/* Next Prev Buttons */}
        <div
          className={`cursor-pointer absolute top-[55%] hover:border-primary transition-colors duration-300 -left-4 border shadow-md transform -translate-y-1/2  bg-white size-10 rounded-full`}
          onClick={handleScroll("decrement")}
        >
          <div className="h-full flex justify-center items-center ">
            <IconSvg name="prev" />
          </div>
        </div>

        <div
          className={`cursor-pointer absolute top-[55%]  -right-4 border hover:border-primary transition-colors duration-300 shadow-md transform -translate-y-1/2 bg-white size-10 rounded-full`}
          onClick={handleScroll("increment")}
        >
          <div className="h-full flex justify-center items-center">
            <IconSvg name="next" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BaseProductDetailsSlider;
