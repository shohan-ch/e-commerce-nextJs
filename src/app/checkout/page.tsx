"use client";
import CartItemsList from "@/components/Cart/CartItemsList";
import EmptyCart from "@/components/Cart/EmptyCart";
import EmptyCheckout from "@/components/Checkout/EmptyCheckout";
import OrderSummary from "@/components/Checkout/OrderSummary";
import ShippingAddresses from "@/components/ShippingAddresses/ShippingAddresses";
import { useCart } from "@/context/CartContextProvider";
import { useEffect, useState } from "react";

const page = () => {
  const productsInCart = useCart();

  return (
    <>
      {(productsInCart.length > 0 && (
        <div className="max-w-6xl flex items-start mx-auto gap-x-5 mb-40 pb-10 mt-8 shadow">
          <div className="shipping-container flex-[4]">
            <ShippingAddresses />
            <CartItemsList products={productsInCart} />
          </div>

          <div className="order-container flex-[2] bg-gray-100 p-4">
            <OrderSummary products={productsInCart} />
          </div>
        </div>
      )) || (
        <div>
          <EmptyCheckout />
        </div>
      )}
    </>
  );
};

export default page;
