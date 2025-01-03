"use client";

import { useDrawerContext } from "@/context/DrawerContextProvider";
import BaseInputIcon from "@/utils/Forms/BaseInputIcon";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CartItemsList from "./CartItemsList";
import EmptyCart from "./EmptyCart";

type Props = {
  products: any[];
};

const CartItemsInDrawer = (props: Props) => {
  const { products } = props;
  const [subTotal, setSubTotal] = useState(0);
  const [promoDiscount, setPromoDiscount] = useState(0);
  const router = useRouter();

  const {
    handleHideDrawerByContext,
    handleShowDrawerByContext,
    isVisibleDrawerByContext,
  } = useDrawerContext();

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

  const redirectToCheckoutPage = () => {
    if (!isVisibleDrawerByContext) {
      handleShowDrawerByContext();
    } else {
      handleHideDrawerByContext();
    }
    router.push("/checkout");
  };

  return (
    <>
      <div className="product-container h-[540px] overflow-y-auto py-8 px-5 relative">
        {(products.length > 0 && <CartItemsList products={products} />) || (
          <EmptyCart />
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
          onClick={redirectToCheckoutPage}
        >
          Proceed To Checkout
        </button>
      </div>
    </>
  );
};

export default CartItemsInDrawer;
