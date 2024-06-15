"use client";
import Image from "next/image";
import data from "../../data/categories.json";
import IconSvg from "@/icons/IconSvg";
import { useState, useRef } from "react";
import CategoryCenterLayout from "./CategoryCenterLayout";
import CategorySidebarLayout from "./CategorySidebarLayout";

type Props = {};

const ProductCategories = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<any>("");

  const handleGetValue =
    (id: string = "") =>
    (e: React.MouseEvent | any) => {
      e.stopPropagation();
      if (id) {
        console.log(id);
      } else {
        console.log(e.target.value);
      }
      setSelectedCategory(id || e.target.value);
    };

  return (
    <>
      {data.length < 8 ? (
        <CategoryCenterLayout data={data} handleValue={handleGetValue} />
      ) : (
        <CategorySidebarLayout
          data={data}
          handleValue={handleGetValue}
          selectedCategory={selectedCategory}
        />
      )}
    </>
  );
};

export default ProductCategories;
