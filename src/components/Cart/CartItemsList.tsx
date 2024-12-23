"use client";

import { useCartDispatch } from "@/context/CartContextProvider";
import IconSvg from "@/icons/IconSvg";
import BasePopConfirm from "@/utils/Ui/PopConfirm/BasePopConfirm";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";

type Props = {
  products: any[];
};

const CartItemsList = (props: Props) => {
  const { products } = props;
  const dispatchCart = useCartDispatch();
  const pathName = usePathname();
  // const popConfirmRef = useRef<any>();
  const removeCartItem = (product: any) => (e: React.MouseEvent) => {
    if (pathName.includes("checkout") && product.cart == 1) return;
    e.stopPropagation();
    dispatchCart({
      type: "remove",
      product,
    });
  };

  // const handelConfirm = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   popConfirmRef.current?.handleShow();
  // };

  const deleteCart = (product: any) => {
    alert(product.id);
    dispatchCart({
      type: "delete",
      product,
    });
  };

  const addCartItem = (product: any) => (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatchCart({
      type: "add",
      product: { ...product, cart: 1 },
    });
  };

  return (
    <>
      <div className="product-container overflow-y-auto px-5 relative">
        {products.length > 0 &&
          products.map((p: any, index: number) => {
            const popConfirmRef = useRef<any>();
            return (
              <div
                className="flex gap-5 mb-8 border-b last:border-0 last:mb-0 pb-8 last:pb-0"
                key={index}
              >
                <span className="flex-2 ">
                  <Image
                    src={p?.coverImage}
                    alt={p?.title}
                    width={80}
                    height={80}
                  />
                </span>
                <div className="flex-1 text-center">
                  <p>{p?.title}</p>
                  <p className="text-gray-600">1 each X {p?.cart}</p>

                  <div className="flex gap-x-5 items-center justify-center">
                    <button onClick={removeCartItem(p)}>
                      <IconSvg name="minus" color="gray" width="20" />
                    </button>
                    <span className="text-lg">{p?.cart}</span>
                    <button onClick={addCartItem(p)}>
                      <IconSvg name="plus" color="gray" width="20" />
                    </button>

                    <BasePopConfirm
                      title="Remove from cart"
                      description="Item(s) will be removed from order"
                      ref={popConfirmRef}
                      handleOk={() => deleteCart(p)}
                    >
                      <button
                        // onClick={handelConfirm}
                        onClick={(e) => {
                          e.stopPropagation();
                          popConfirmRef.current?.handleShow();
                        }}
                        className="border p-1 rounded-md shadow-sm"
                      >
                        <IconSvg name="delete" color="gray" width="20" />
                      </button>
                    </BasePopConfirm>
                  </div>
                </div>
                <div className="flex-2 w-[80px] text-center font-bold">
                  <span className="text-2xl">৳</span> {p?.salePrice * p?.cart}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CartItemsList;
