import React from "react";

type Props = {
  name: string;
  labelTitle?: string;
  multiple: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: string;
};

const BaseFileUpload = (props: Props) => {
  const { name, labelTitle, handleChange, style, multiple } = props;
  return (
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
          onChange={handleChange}
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
  );
};

export default BaseFileUpload;
