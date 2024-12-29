import React from "react";

type Props = {};

const ShippingAddresses = (props: Props) => {
  return (
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
  );
};

export default ShippingAddresses;
