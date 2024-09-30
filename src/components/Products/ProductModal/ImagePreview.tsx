"use client";
import IconSvg from "@/icons/IconSvg";
import ImgaeMagnifier from "@/utils/Ui/ImgaeMagnifier";
import Image from "next/image";
import React, { useEffect, useState } from "react";
type Props = {
  data: any[];
};

const ImagePreview = (props: Props) => {
  const { data } = props;
  const [previewImage, setPreviewImage] = useState<any>("");
  const [imageIndex, setImageIndex] = useState<number>(0);
  useEffect(() => {
    if (data) {
      setPreviewImage(data[imageIndex]);
    }
  }, [data, imageIndex]);

  const handleSinglePreviewImage =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageIndex(index);
      setPreviewImage(e.target.value);
    };

  return (
    <>
      <div className="xl:w-[17%] flex gap-5 xl:flex-col rounded-md border p-2 xl:h-[50vh] overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {data &&
          data.map((image: any, index: number) => (
            <div
              key={index}
              className="mb-3 last:mb-0 size-[72px] flex-shrink-0 mx-auto"
            >
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
        className=" xl:h-[50vh] relative xl:w-[80%] border rounded-md flex justify-center items-center "
      >
        <ImgaeMagnifier
          src={previewImage}
          alt={previewImage}
          width={300}
          height={300}
        />

        {/* <Image
          onMouseMove={() => console.log("s")}
          src={previewImage}
          alt={previewImage}
          width={300}
          height={300}
          className="transition-all duration-300 ease-in"
        /> */}

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

        {imageIndex != data?.length - 1 && (
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
    </>
  );
};

export default ImagePreview;
