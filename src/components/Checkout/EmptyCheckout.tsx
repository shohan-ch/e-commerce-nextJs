import Link from "next/link";
import React from "react";

type Props = {};

const EmptyCheckout = (props: Props) => {
  return (
    <div className="h-[400px] flex items-center justify-center">
      <div className="text-center">
        <p className="mb-10 text-gray-600 text-sm">
          There are no items in this cart
        </p>
        <Link
          href={"/"}
          className="border-2  px-8 py-4 border-primary text-primary tracking-wider"
        >
          CONTINUE SHOPPING
        </Link>
      </div>
    </div>
  );
};

export default EmptyCheckout;
