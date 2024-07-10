"use client";
import IconSvg from "@/icons/IconSvg";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import ImagePreview from "./ImagePreview";

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
        <div className="bg-green-300 col-span-2">Details</div>
      </div>
    </div>
  );
};

export default ProductModal;
