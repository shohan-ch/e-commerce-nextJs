"use client";
import Image from "next/image";
import data from "../../data/categories.json";
import IconSvg from "@/icons/IconSvg";
import { useState, useRef } from "react";
import CategoryCenterLayout from "./CategoryCenterLayout";

type Props = {};

const ProductCategories = (props: Props) => {
  const [openCategories, setOpenCategories] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedCategory, setSelectedCategory] = useState<any>("");

  const handleDropDown = (id: string) => () => {
    setOpenCategories((prevState) => ({
      [id]: !prevState[id],
    }));
  };

  const handleGetValue =
    (id: string = "") =>
    (e: React.MouseEvent | any) => {
      e.stopPropagation();
      alert(id);
      if (id) {
        setOpenCategories({});
        console.log(id);
      } else {
        console.log(e.target.value);
      }
      setSelectedCategory(id || e.target.value);
    };

  console.log(selectedCategory);

  return (
    <>
      {data.length > 8 ? (
        <CategoryCenterLayout data={data} handleValue={handleGetValue} />
      ) : (
        <>
          <div className="border rounded-lg h-auto w-[20%]">
            <ul>
              {data &&
                data.map((category, index) => (
                  <li
                    onClick={
                      category.subCategory
                        ? handleDropDown(category._id)
                        : handleGetValue(category._id)
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
                        category.subCategory.map((subCategory, index) => (
                          <li key={index} className="border-b last:border-b-0">
                            <button
                              onClick={handleGetValue()}
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
                        ))}
                    </ul>
                  </li>
                ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default ProductCategories;
