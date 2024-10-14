import { useCartDispatch } from "@/context/CartContextProvider";
import IconSvg from "@/icons/IconSvg";
import React, { useState } from "react";

type Props = {
  product: any;
  cartCount?: any;
};

const ProductCartPanel = (props: Props) => {
  const { product, cartCount } = props;
  const dispatchCart = useCartDispatch();
  const [countCartItem, setCountCartItem] = useState(1);
  const removeCartItem = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const addCartItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCountCartItem(countCartItem + 1);
    dispatchCart({
      type: "add",
      product: { ...product, cart: countCartItem },
    });
  };

  return (
    <>
      <div className="transition-all duration-1000 absolute bottom-0 left-[50%] -translate-x-[50%] bg-white shadow-md rounded-full py-2 px-3 flex gap-x-10 items-center justify-center">
        <button onClick={removeCartItem}>
          <IconSvg name="minus" color="gray" />
        </button>
        <span className="text-xl">{cartCount}</span>
        <button onClick={addCartItem}>
          <IconSvg name="plus" color="gray" />
        </button>
      </div>
    </>
  );
};

export default ProductCartPanel;
