"use client";
import CartItemsList from "@/components/Cart/CartItemsList";
import { useCart } from "@/context/CartContextProvider";
import { useEffect, useState } from "react";

const page = () => {
  const productsInCart = useCart();
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  let deliveryFee = 150;

  console.log(productsInCart, "cartsImage");
  useEffect(() => {
    let subTotal = 0;
    productsInCart.map((p: any) => {
      subTotal += p?.cart * p?.salePrice;
    });
    setSubTotal(subTotal);
    setTotal(subTotal + deliveryFee);
  }, [productsInCart]);

  return (
    <>
      <div className="max-w-6xl flex items-start mx-auto gap-x-5 mb-40 pb-10 mt-8 shadow">
        <div className="flex-[4]">
          <div className=" bg-gray-100 px-4 py-2 space-y-2 mb-10">
            <div className="flex justify-between">
              <h3>Shipping & Billing</h3>
              <button className="text-primary" onClick={() => alert(123)}>
                EDIT
              </button>
            </div>
            <div className="space-y-2">
              <p className="flex gap-x-4">
                <span>Shohan Chowdhury</span>
                <span>01723190659</span>
              </p>
              <p className="flex gap-x-3">
                <span className="bg-primary text-white text-center rounded-full px-3">
                  Home
                </span>
                <span>uposhohor, Tero Ratan, Sylhet Sadar, Sylhet</span>
              </p>
            </div>
          </div>
          <CartItemsList products={productsInCart} />
        </div>

        <div className="flex-[2] bg-gray-100 p-4">
          <h3 className="font-semibold mb-3">Order Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <h4>Items Total ({productsInCart.length} items)</h4>
              <p>
                <span>৳</span> <span>{subTotal}</span>
              </p>
            </div>
            <div className="flex justify-between">
              <h4>Delivery Fee</h4>
              <p>
                <span>৳</span> <span>{deliveryFee}</span>
              </p>
            </div>
            <hr />
            <div className="flex justify-between">
              <h4>Total:</h4>
              <p className="text-primary">
                <span>৳</span> <span>{total}</span>
              </p>
            </div>
          </div>

          <div className="mt-12">
            <button className="bg-primary text-white w-full block p-3 shadow rounded-md">
              Proceed To Pay
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
