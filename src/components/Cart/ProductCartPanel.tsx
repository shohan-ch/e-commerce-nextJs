import IconSvg from "@/icons/IconSvg";
import React from "react";

type Props = {};

const ProductCartPanel = (props: Props) => {
  const removeCartItem = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const addCartItem = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="transition-all duration-1000 absolute bottom-0 left-[50%] -translate-x-[50%] bg-white shadow-md rounded-full py-2 px-3 flex gap-x-10 items-center justify-center">
        <button onClick={removeCartItem}>
          <IconSvg name="minus" color="gray" />
        </button>
        <span className="text-xl">1</span>
        <button onClick={addCartItem}>
          <IconSvg name="plus" color="gray" />
        </button>
      </div>
    </>
  );
};

export default ProductCartPanel;
