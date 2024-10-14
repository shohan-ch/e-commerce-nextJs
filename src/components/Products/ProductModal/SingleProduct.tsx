import ProductCartPanel from "@/components/Cart/ProductCartPanel";
import { useCart, useCartDispatch } from "@/context/CartContextProvider";
import IconSvg from "@/icons/IconSvg";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  product: any;
  handleModalShow: (id: number | undefined) => void;
};
const SingleProduct = (props: Props) => {
  const { product, handleModalShow } = props;
  const [isVisibleCartContainer, setIsVisibleCartContainer] = useState(false);
  const productsInCartContext = useCart();
  const dispatchCart = useCartDispatch();

  useEffect(() => {
    if (productsInCartContext.length > 0) {
      let isExistProductInCart = productsInCartContext.some(
        (p: any) => p.id == product.id
      );
      console.log(isExistProductInCart);
      isExistProductInCart && setIsVisibleCartContainer(true);
    }
  }, []);

  const cartCountOnProduct = (id: number) => {
    if (id) {
      let getProduct = productsInCartContext.some((p: any) => p.id == id)
        ? (productsInCartContext || []).find((p: any) => p.id == id)
        : 0;

      if (getProduct) {
        return getProduct.cart;
      } else {
        return null;
      }
    } else {
      setIsVisibleCartContainer(false);
    }
  };

  const showCartContainer = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisibleCartContainer(true);
    dispatchCart({ type: "add", product: { ...product, cart: 1 } });
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
            <ProductCartPanel
              product={product}
              cartCount={cartCountOnProduct(product.id)}
            />
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
