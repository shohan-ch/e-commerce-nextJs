import React, { useEffect, useState } from "react";

type Props = {
  name: string;
  labelTitle?: string;
  multiple: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: string;
  isSubmited?: boolean;
};

const BaseFileUpload = (props: Props) => {
  const { name, labelTitle, handleChange, style, multiple, isSubmited } = props;
  const [previewImages, setPreviewImages] = useState<any>([]);
  const handleFileChange = () => (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    let images = [];
    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        images.push(URL.createObjectURL(e.target?.files[i]));
      }
    }
    setPreviewImages(images);
  };

  useEffect(() => {
    if (isSubmited) {
      setPreviewImages([]);
    }
  }, [isSubmited]);
  return (
    <>
      <div
        className={`${
          style && style
        } flex items-center justify-center h-24 border border-blue-600 border-dashed`}
      >
        <div className="relative w-full h-full">
          <input
            type="file"
            id={name}
            name={name}
            className="absolute hidden w-full"
            // onChange={handleChange}
            onChange={handleFileChange()}
            multiple={multiple}
          />
          <label
            htmlFor={name}
            className="absolute flex items-center justify-center w-full h-full cursor-pointer "
          >
            {labelTitle && labelTitle}
          </label>
        </div>
      </div>
      <div className="flex gap-3">
        {previewImages.length > 0 &&
          previewImages.map((img: any, index: number) => (
            <div key={index} className="border-2 p-[2px] w-[50px] h-[40px]">
              <img
                src={img}
                style={{ height: "100%", width: "auto" }}
                alt={"reviewImage"}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default BaseFileUpload;
