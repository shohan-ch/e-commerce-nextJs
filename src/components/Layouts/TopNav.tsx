import IconSvg from "@/icons/IconSvg";
import React from "react";

type Props = {};

const TopNav = (props: Props) => {
  return (
    <div>
      <nav className="bg-white shadow h-16 py-9 px-10 flex items-center justify-between fixed w-full top-0 z-50">
        <div className="logo flex items-center gap-x-4">
          <span>
            <IconSvg name="logo" />
          </span>
          <h3 className="font-bold text-xl">E-Commerce</h3>
        </div>
        <div className="flex gap-x-10">
          <div className="relative">
            <IconSvg name="cart" />
            <div className="absolute -right-2.5 -top-[12px] bg-primary rounded-full w-6 h-6">
              <span className="text-white font-semibold text-sm flex items-center justify-center h-full">
                2
              </span>
            </div>
          </div>
          <button className="flex items-center gap-x-4">
            <IconSvg name="userAvatar" />
            Sign In
          </button>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;