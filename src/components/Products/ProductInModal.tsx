"use client";
import IconSvg from "@/icons/IconSvg";
import Image from "next/image";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";

type Props = {
  data: any;
};

const ProductInModal = (props: Props) => {
  const { data } = props;
  const allImages = data && [data.coverImage, ...data.images];
  const [previewImage, setPreviewImage] = useState<any>();
  const [imageIndex, setImageIndex] = useState<number>(0);
  useLayoutEffect(() => {
    if (allImages) {
      setPreviewImage(allImages[imageIndex]);
    }
  }, [data, imageIndex]);

  const handleSinglePreviewImage =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageIndex(index);
      setPreviewImage(e.target.value);
    };

  return (
    <div>
      <div className="grid grid-cols-5 gap-14">
        <div className="col-span-3 flex flex-col-reverse lg:flex-row gap-x-5 ">
          <div className="lg:w-[17%] rounded-md border p-4 h-[61.5vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {allImages &&
              allImages.map((image: any, index: number) => (
                <div key={index} className="mb-3 last:mb-0 size-[72px] mx-auto">
                  <input
                    className="appearance-none peer"
                    type="radio"
                    id={index + image}
                    name="productSliderimage"
                    value={image}
                    checked={image == previewImage ? true : false}
                    onChange={handleSinglePreviewImage(index)}
                  />
                  <label
                    htmlFor={index + image}
                    className="inline-block border rounded-md p-3 peer-checked:border peer-checked:border-primary cursor-pointer"
                  >
                    <Image
                      src={image}
                      alt={"image_" + index}
                      width={50}
                      height={50}
                    />
                  </label>
                </div>
              ))}
          </div>
          <div
            id="pereviewImageSection"
            className="relative w-[80%] border rounded-md flex justify-center items-center "
          >
            <Image
              src={previewImage}
              alt={previewImage}
              width={300}
              height={300}
              className="transition-all duration-300 ease-in"
            />

            {/* Next Prev Buttons */}

            {imageIndex != 0 && (
              <div
                className={`cursor-pointer absolute top-[50%] left-5 hover:border-primary transition-colors duration-300  border shadow-md transform -translate-y-1/2  bg-white size-10 rounded-full`}
                onClick={() => setImageIndex(imageIndex - 1)}
              >
                <div className="h-full flex justify-center items-center ">
                  <IconSvg name="prev" />
                </div>
              </div>
            )}

            {imageIndex != allImages?.length - 1 && (
              <div
                className={`cursor-pointer absolute top-[50%]  right-5 border hover:border-primary transition-colors duration-300 shadow-md transform -translate-y-1/2 bg-white size-10 rounded-full`}
                onClick={() => setImageIndex(imageIndex + 1)}
              >
                <div className="h-full flex justify-center items-center">
                  <IconSvg name="next" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-green-300 col-span-2">Details</div>
      </div>
    </div>
  );
};

export default ProductInModal;
