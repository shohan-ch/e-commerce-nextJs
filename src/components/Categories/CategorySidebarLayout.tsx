import IconSvg from "@/icons/IconSvg";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  data: any;
  handleValue: (id?: string) => (e: React.MouseEvent | any) => void;
  selectedCategory: string;
};

const CategorySidebarLayout = (props: Props) => {
  const [openCategories, setOpenCategories] = useState<{
    [key: string]: boolean;
  }>({});

  const { data, handleValue, selectedCategory } = props;

  const handleDropDown = (id: string) => () => {
    setOpenCategories((prevState) => ({
      [id]: !prevState[id],
    }));
  };
  return (
    <>
      <div className="border rounded-lg h-auto w-[21%]">
        <ul>
          {data &&
            data.map((category: any, index: number) => (
              <li
                onClick={
                  category.subCategory
                    ? handleDropDown(category._id)
                    : handleValue(category._id)
                }
                key={index}
                className="border-b last:border-b-0 cursor-pointer block"
              >
                <div
                  className={`${
                    openCategories[category._id] ||
                    selectedCategory == category._id
                      ? "bg-gray-100"
                      : ""
                  } p-4 flex justify-between items-center`}
                >
                  <div className="flex gap-x-3 items-center">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={40}
                      height={40}
                    />
                    {category.name}
                  </div>

                  {category.subCategory && (
                    <div
                      className={`transition-all duration-300 ${
                        openCategories[category._id] ? "rotate-180" : ""
                      }`}
                    >
                      <IconSvg name="downArrow" />
                    </div>
                  )}
                </div>

                <ul
                  className={`transition-all duration-700 ${
                    openCategories[category._id] ? "" : "hidden"
                  }`}
                  id={category._id}
                >
                  {category.subCategory &&
                    category.subCategory.map(
                      (subCategory: any, index: number) => (
                        <li key={index} className="border-b last:border-b-0">
                          <button
                            onClick={handleValue()}
                            value={subCategory._id}
                            className={`${
                              selectedCategory == subCategory._id
                                ? "border-b border-primary"
                                : ""
                            }  w-full p-4 text-left `}
                          >
                            {subCategory.name}
                          </button>
                        </li>
                      )
                    )}
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default CategorySidebarLayout;
