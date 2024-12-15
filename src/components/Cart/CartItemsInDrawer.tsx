import { useCartDispatch } from "@/context/CartContextProvider";
import IconSvg from "@/icons/IconSvg";
import BaseInput from "@/utils/Forms/BaseInput";
import BaseInputIcon from "@/utils/Forms/BaseInputIcon";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  products: any[];
};

const CartItemsInDrawer = (props: Props) => {
  const { products } = props;
  const dispatchCart = useCartDispatch();
  const [subTotal, setSubTotal] = useState(0);
  const [promoDiscount, setPromoDiscount] = useState(0);

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
      subTotal += p?.cart * p?.salePrice;
    });
    setSubTotal(subTotal - promoDiscount);

    if (products.length == 0) {
      setPromoDiscount(0);
    }
  }, [promoDiscount, products]);

  const handlePromoCodeClick = (val: any) => {
    alert("Congratulations you got discount.");
    if (val) {
      setPromoDiscount(10);
    }
  };

  return (
    <>
      <div className="product-container h-[540px] overflow-y-auto py-8 px-5 relative">
        {(products.length > 0 &&
          products.map((p: any) => {
            return (
              <div
                className="flex gap-5 mb-8 border-b last:border-0 last:mb-0 pb-8 last:pb-0"
                key={p?.id}
              >
                <span className="flex-2">
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
                  </div>
                </div>
                <div className="flex-2 w-[80px] text-center font-bold">
                  <span className="text-2xl">৳</span> {p?.salePrice * p?.cart}
                </div>
              </div>
            );
          })) || (
          <div>
            <div className="text-center w-[20vw] absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
              <Image
                className="mx-auto"
                src="/uploads/images/cart/empty-cart.webp"
                alt="empty-cart"
                width={190}
                height={190}
              />
              <h3 className="font-semibold mb-2 text-2xl">
                Your Cart is empty.
              </h3>
              <p className="text-gray-500 text-base">
                Please add product to your cart list
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="border-t absolute w-full left-0"></div>

      <div className="checkout-container pt-5 px-5 ">
        {products.length > 0 && (
          <div className="flex justify-between items-center mb-6 mt-3">
            <p className="text-base ">Promo Code:</p>
            <div>
              <BaseInputIcon
                name="promocode"
                placeHolder="Do you have promo Code?"
                style="h-[35px] !mb-0"
                handleClick={handlePromoCodeClick}
              />
            </div>
          </div>
        )}

        {promoDiscount != 0 && (
          <div className="flex justify-between items-center">
            <p className="text-base">Discount:</p>
            <p className="font-bold">
              <span className="text-2xl">৳</span>
              {promoDiscount}
            </p>
          </div>
        )}

        <div className="flex justify-between items-center">
          <p className="text-base font-bold">Subtotal:</p>
          <p className="font-bold">
            <span className="text-2xl">৳</span>
            {subTotal}
          </p>
        </div>

        <button
          disabled={products.length == 0}
          className={`${
            products.length ? "bg-primary" : "bg-gray-300"
          } w-full p-4 text-white mt-10 rounded font-bold`}
        >
          Proceed To Checkout
        </button>
      </div>
    </>
  );
};

export default CartItemsInDrawer;
