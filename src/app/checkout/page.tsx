"use client";
import { useCart, useCartDispatch } from "@/context/CartContextProvider";
import IconSvg from "@/icons/IconSvg";
import Image from "next/image";
const page = () => {
  const productsInCart = useCart();
  const dispatchCart = useCartDispatch();
  console.log(productsInCart, "cartsImage");

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

  return (
    <>
      <div className="max-w-7xl flex items-start mx-auto gap-x-5 pb-10">
        <div className="flex-[3]">
          <div className=" bg-slate-100 px-4 py-2 space-y-2">
            <div className="flex justify-between">
              <h3>Shipping & Billing</h3>
              <button className="text-primary">EDIT</button>
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

        <div className="flex-[2] bg-slate-300 p-4 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            provident?
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
