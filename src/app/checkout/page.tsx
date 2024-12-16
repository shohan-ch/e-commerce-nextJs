"use client";
import { useCart, useCartDispatch } from "@/context/CartContextProvider";
import IconSvg from "@/icons/IconSvg";
import Image from "next/image";
import { useEffect, useState } from "react";

const page = () => {
  const productsInCart = useCart();
  const dispatchCart = useCartDispatch();
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  let deliveryFee = 150;

  console.log(productsInCart, "cartsImage");

  const removeCartItem = (product: any) => (e: React.MouseEvent) => {
    if (product.cart == 1) return;
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
          <div className=" bg-gray-100 px-4 py-2 space-y-2">
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
          {/* Products */}
          <div className="mt-10 ">
            {productsInCart.length > 0 &&
              productsInCart.map((p: any) => {
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
                      <span className="text-2xl">৳</span>{" "}
                      {p?.salePrice * p?.cart}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="flex-[2] bg-gray-100 p-4">
          <h3 className="font-semibold mb-3">Order Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <p>Items Total ({productsInCart.length} items)</p>
              <p>
                <span>৳</span> <span>{subTotal}</span>
              </p>
            </div>
            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>
                <span>৳</span> <span>{deliveryFee}</span>
              </p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Total:</p>
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
