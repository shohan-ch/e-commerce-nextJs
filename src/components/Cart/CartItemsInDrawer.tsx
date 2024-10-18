import { useCartDispatch } from "@/context/CartContextProvider";
import IconSvg from "@/icons/IconSvg";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  products: any[];
};

const CartItemsInDrawer = (props: Props) => {
  const { products } = props;
  const dispatchCart = useCartDispatch();
  const [subTotal, setSubTotal] = useState(0);

  const removeCartItem = (product: any) => (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatchCart({
      type: "remove",
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

  useEffect(() => {
    let subTotal = 0;
    products.map((p: any) => {
      subTotal += p.cart * p.salePrice;
    });
    setSubTotal(subTotal);
  }, []);

  return (
    <>
      <div className="product-container max-h-[500px] overflow-y-auto">
        {products.length &&
          products.map((p: any) => {
            return (
              <div
                className="flex gap-5 mb-8 border-b last:border-0 pb-8"
                key={p.id}
              >
                <span className="flex-2">
                  <Image
                    src={p.coverImage}
                    alt={p.title}
                    width={80}
                    height={80}
                  />
                </span>
                <div className="flex-1 text-center">
                  <p>{p.title}</p>
                  <p className="text-gray-600">1 each X {p.cart}</p>

                  <div className="flex gap-x-5 items-center justify-center">
                    <button onClick={removeCartItem(p)}>
                      <IconSvg name="minus" color="gray" width="20" />
                    </button>
                    <span className="text-lg">{p.cart}</span>
                    <button onClick={addCartItem(p)}>
                      <IconSvg name="plus" color="gray" width="20" />
                    </button>
                  </div>
                </div>
                <div className="flex-2 w-[80px] text-center font-bold">
                  <span className="text-2xl">৳</span> {p.salePrice * p.cart}
                </div>
              </div>
            );
          })}
      </div>

      <div className="checkout-container pt-28 ">
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">Subtotal:</p>
          <p className="font-bold">
            <span className="text-2xl">৳</span>
            {subTotal}
          </p>
        </div>

        <button className="bg-primary w-full p-4 text-white mt-10 rounded font-bold">
          Proceed To Checkout
        </button>
      </div>
    </>
  );
};

export default CartItemsInDrawer;
