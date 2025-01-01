import React, { useEffect, useRef, useState } from "react";

const icon = {
  arrowDown: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      fill="gray"
      className="bi bi-chevron-down"
      viewBox="0 0 16 16"
    >
      <path d="M1.293 4.293a1 1 0 0 1 1.414 0L8 9.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z" />
    </svg>
  ),
  search: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="gray"
      className="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
    </svg>
  ),

  empty: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="gray"
      className="bi bi-box2 mx-auto"
      viewBox="0 0 16 16"
    >
      <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3zM7.5 1H3.75L1.5 4h6zm1 0v3h6l-2.25-3zM15 5H1v10h14z" />
    </svg>
  ),
};

interface Option {
  name: string;
  value: string | number;
}

type Props = {
  options: Option[];
  label: string;
  name: string;
  handelChange?: (e: any) => void;
  disable?: boolean;
  isAllowSearch?: boolean;
};

const BaseSelect = (props: Props) => {
  const { options, name, handelChange, label, disable, isAllowSearch } = props;
  const [filterOptions, setFilterOptions] = useState<any>(options);
  const [isVisibleOptions, setIsVisibleOptions] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<any>("");
  const [activeOptionIndex, setActiveOptionIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<any>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    setSelectedValue(val);
    let selectedOptions = filterOptions.filter((o: any) =>
      o.name.includes(val)
    );
    setFilterOptions(selectedOptions);
    if (val.length == 0) {
      setIsVisibleOptions(true);
      setFilterOptions(options);
    }
    console.log(filterOptions.length, "filterLength");
  };

  const handleShowOptions = () => {
    setIsVisibleOptions(true);
  };

  const handleHideOptions = () => {
    if (isVisibleOptions) {
      setIsVisibleOptions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isVisibleOptions) return;
    if (e.key === "ArrowDown") {
      setActiveOptionIndex((prevIndex) =>
        prevIndex < filterOptions.length - 1 ? prevIndex + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      setActiveOptionIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : filterOptions.length - 1
      );
    } else if (e.key === "Enter" && activeOptionIndex >= 0) {
      const selectedOption = filterOptions[activeOptionIndex];
      console.log(selectedOption, "select");
      setSelectedValue(selectedOption.name);

      handelChange &&
        handelChange({
          target: {
            value: selectedOption.value,
            name: name,
          },
        });
      setIsVisibleOptions(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsVisibleOptions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (optionsRef.current) {
      let optionsContainerHeight = optionsRef.current.offsetHeight;
      if (optionsContainerHeight >= 250) {
        // let scrollYAxis = { overflowY: "scroll" };
        // Object.assign(optionsRef.current.style, { overflowY: "scroll" });
        optionsRef.current.style.overflowY = "scroll";
      }
    }
  });

  return (
    <div className="relative" onClick={handleHideOptions} ref={containerRef}>
      <label
        htmlFor={label}
        className="block my-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>

      {(isAllowSearch && (
        <div>
          <input
            type="text"
            placeholder="write text"
            className={`${
              disable ? "bg-[#e7e7e7]" : ""
            } absolute bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            value={selectedValue}
            onChange={handleSearch}
            onClick={handleShowOptions}
            onKeyDown={handleKeyDown}
            onMouseLeave={() => setActiveOptionIndex(-1)}
            disabled={disable}
          />

          <span className="cursor-pointer absolute right-1.5 top-10 p-1 ">
            {isVisibleOptions ? icon.search : icon.arrowDown}
          </span>

          {isVisibleOptions && (
            <div
              ref={optionsRef}
              className="absolute w-full top-[75px] bg-white shadow-lg border rounded-md max-h-[250px]"
              onClick={(e) => e.stopPropagation()}
            >
              {(filterOptions.length > 0 &&
                filterOptions.map((option: any, index: number) => (
                  <button
                    name={name}
                    onClick={(e: any) => {
                      handelChange && handelChange(e);
                      setSelectedValue(option.name);
                      setIsVisibleOptions(false);
                    }}
                    className={`
                ${index === activeOptionIndex ? "bg-gray-200 text-black" : ""}
                ${selectedValue === option.name ? "bg-primary text-white" : ""}
                
                w-full text-left px-2 py-1  focus:bg-primary focus:text-white hover:bg-gray-200 hover:text-black transition-all duration-100`}
                    key={index}
                    value={option.value}
                  >
                    {" "}
                    {option.name}
                  </button>
                ))) || (
                <div className="h-[60px] p-10 mx-auto flex justify-center items-center">
                  <div>
                    <span>{icon.empty}</span>
                    <p className="text-gray-400 text-sm pt-2">No data found</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )) || (
        <div>
          <select
            id={label}
            name={name}
            onChange={handelChange}
            className={` ${
              disable ? "bg-[#e7e7e7]" : ""
            } bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg outline-none
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            disabled={disable}
          >
            <option value="">Select {label.toLowerCase()}</option>
            {options.map((option: any, index: number) => (
              <option key={index} value={option.value}>
                {" "}
                {option.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default BaseSelect;
