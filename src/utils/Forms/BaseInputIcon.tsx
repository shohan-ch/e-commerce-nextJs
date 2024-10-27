import React, { useState } from "react";
interface InputProps {
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick?: (val: string) => void;
  name: string;
  placeHolder?: string;
  style?: string;
  type?: string;
  label?: string;
  value?: string | number;
}

const icon = {
  message: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      fill="currentColor"
      className="bi bi-send-fill text-primary"
      viewBox="0 0 16 16"
      style={{ transform: "rotate(42deg)" }}
    >
      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
    </svg>
  ),
};
const BaseInputIcon: React.FC<InputProps> = (props) => {
  const {
    handleChange,
    handleClick,
    name,
    placeHolder,
    style,
    type,
    label,
    value,
  } = props;
  const [inputValue, setInputValue] = useState<string>("");

  const handleInutChange: InputProps["handleChange"] = (e) => {
    setInputValue(e.target.value);
  };

  const handleIconClick = () => {
    if (inputValue) {
      handleClick?.(inputValue);
    }
    return;
  };

  return (
    <>
      <div className="relative">
        {label && (
          <label
            htmlFor="first_name"
            className="block my-2 text-sm font-medium text-gray-900"
          >
            {label}
          </label>
        )}
        <input
          // onChange={handleChange}
          onChange={handleInutChange}
          type={type || "text"}
          name={name}
          value={value && value}
          placeholder={placeHolder}
          className={`${
            style && style
          } bg-gray-50 border mb-4 pr-10 border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
        />
        <span
          onClick={handleIconClick}
          className="cursor-pointer absolute right-1.5 top-1 p-1 "
        >
          {icon.message}
        </span>
      </div>
    </>
  );
};

export default BaseInputIcon;
