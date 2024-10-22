"use client";

import { useCart } from "@/context/CartContextProvider";
import IconSvg from "@/icons/IconSvg";
import BaseDrawer from "@/utils/Ui/Drawer/BaseDrawer";
import React, { useEffect, useRef, useState } from "react";
import CartItemsInDrawer from "../Cart/CartItemsInDrawer";

type Props = {};

const TopNav = (props: Props) => {
  const productsInCartContext = useCart();
  const [cartCount, setCartCount] = useState(0);
  const drawerRef = useRef<any>(null);
  useEffect(() => {
    let cartCount = 0;
    productsInCartContext.map((p: any) => {
      cartCount += p.cart;
    });
    setCartCount(cartCount);
  });

  const handleDrawerToogle = () => {
    drawerRef.current?.handleDrawer();
  };

  return (
    <div>
      <nav className="bg-white shadow h-16 py-9 px-10 flex items-center justify-between fixed w-full top-0 z-50">
        <div className="logo flex items-center gap-x-4">
          <span>
            <IconSvg name="logo" />
          </span>
          <h3 className="font-bold text-xl">BoroBazar</h3>
        </div>
        <div className="flex gap-x-10">
          <div className="relative cursor-pointer" onClick={handleDrawerToogle}>
            <IconSvg name="cart" />
            <div className="absolute -right-[17px] -top-[12px] bg-primary rounded-full w-6 h-6 p-4">
              <span className="text-white font-semibold text-sm flex items-center justify-center h-full">
                {cartCount}
              </span>
            </div>
          </div>
          <button className="flex items-center gap-x-4">
            <IconSvg name="userAvatar" />
            Sign In
          </button>
        </div>
      </nav>
      <BaseDrawer title="Shopping cart" ref={drawerRef}>
        <CartItemsInDrawer products={productsInCartContext} />
      </BaseDrawer>
    </div>
  );
};

export default TopNav;
