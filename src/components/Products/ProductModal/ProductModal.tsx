"use client";
import IconSvg from "@/icons/IconSvg";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import ImagePreview from "./ImagePreview";
import ProductDetails from "./ProductDetails";
import products from "../../../data/products.json";
import BaseProductDetailsSlider from "@/utils/Slider/BaseProductDetailsSlider";

type Props = {
  data: any;
};

const ProductModal = (props: Props) => {
  const { data } = props;
  const allImages = data && [data.coverImage, ...data.images];

  return (
    <div>
      <div className="lg:grid lg:grid-cols-5 xl:gap-14 gap-5 spce-y-5">
        <div className="col-span-3 flex flex-col-reverse xl:flex-row gap-5 ">
          <ImagePreview data={allImages} />
        </div>
        <div className="col-span-2 xl:h-[50.5vh]">
          <ProductDetails product={data} />
        </div>
      </div>
      <BaseProductDetailsSlider title="Related products" data={products} />
    </div>
  );
};

export default ProductModal;
