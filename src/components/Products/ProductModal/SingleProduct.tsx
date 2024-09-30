import IconSvg from "@/icons/IconSvg";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  product: any;
  handleModalShow: (id: number | undefined) => void;
};

const SingleProduct = (props: Props) => {
  const { product, handleModalShow } = props;
  const [isVisibleCartContainer, setIsVisibleCartContainer] = useState(false);

  const showCartContainer = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisibleCartContainer(true);
  };
  const removeCartItem = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const addCartItem = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={() => handleModalShow(product.id)}
      className="border rounded-lg shadow-sm p-4 cursor-pointer group hover:shadow-md transition-all duration-200"
    >
      <div className=" imageSection relative h-[50%]">
        <Image
          src={product.coverImage}
          alt={"image_"}
          width={170}
          height={150}
          className="text-center mx-auto group-hover:scale-110 transition-all duration-200"
        />
        <div onClick={(e: any) => e.stopPropagation()}>
          {!isVisibleCartContainer && (
            <button
              onClick={showCartContainer}
              className="absolute right-0 bottom-0 bg-primary size-10 rounded-full  flex justify-center items-center"
            >
              <IconSvg name="plus" />
            </button>
          )}

          {isVisibleCartContainer && (
            <div className="transition-all duration-1000 absolute bottom-0 left-[50%] -translate-x-[50%] bg-white shadow-md rounded-full py-2 px-3 flex gap-x-10 items-center justify-center">
              <button onClick={removeCartItem}>
                <IconSvg name="minus" color="gray" />
              </button>
              <span className="text-xl">1</span>
              <button onClick={addCartItem}>
                <IconSvg name="plus" color="gray" />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-3 mt-5">
        <p className="font-semibold">
          <span className="text-lg">TK.{product.salePrice}</span>
          <sub className="p-2 text-xs line-through">TK. {product.price}</sub>
        </p>
        <p className="text-lg">{product.title}</p>
        <p className="text-base text-gray-700">{product.quantity}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
