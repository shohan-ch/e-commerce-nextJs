import React from "react";

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string | number;
  label: string;
  style?: string;
  icon?: any;
};

const BaseLabelRadio = (props: Props) => {
  const { name, value, label, icon, style, handleChange } = props;

  return (
    <div className="relative">
      <input
        onChange={handleChange}
        type="radio"
        id={label}
        value={value}
        className="appearance-none peer"
        name={name}
      />
      <label
        htmlFor={label}
        className={`${style && style} ${
          icon ? "min-w-[150px]" : ""
        }  flex items-center justify-center cursor-pointer border rounded-lg shadow p-5 peer-checked:border peer-checked:!border-primary peer-checked:border-red-600 `}
      >
        {label}
      </label>
      {icon && (
        <span
          className={`mr-2 absolute top-[54%] left-[17%] transition-colors duration-300 ${
            icon ? "text-gray-400 peer-checked:text-primary" : ""
          }`}
        >
          {React.cloneElement(icon as React.ReactElement, {
            fill: "currentColor",
          })}
        </span>
      )}
    </div>
  );
};

export default BaseLabelRadio;
