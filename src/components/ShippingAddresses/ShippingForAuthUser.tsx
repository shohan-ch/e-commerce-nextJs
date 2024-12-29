import BaseModal from "@/utils/Modal/BaseModal";
import React, { useRef } from "react";
import NewShippingAddress from "./NewShippingAddress/NewShippingAddress";

type Props = {};

const ShippingForLoggedUser = (props: Props) => {
  const modalRef = useRef<any>();

  return (
    <>
      <BaseModal ref={modalRef} title="Add new shipping Address">
        <NewShippingAddress />
      </BaseModal>
      <div className=" bg-gray-100 px-4 py-2 space-y-2 mb-10">
        <div className="flex justify-between">
          <h3>Shipping & Billing</h3>
          <button
            className="text-primary"
            onClick={() => modalRef.current?.toggleModal()}
          >
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
    </>
  );
};

export default ShippingForLoggedUser;
