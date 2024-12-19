"use client";
import BaseModal from "@/utils/Modal/BaseModal";
import React, { useRef, useState } from "react";
import data from "../../data/products.json";
import ProductModal from "../Products/ProductModal/ProductModal";
import SingleProduct from "../Products/ProductModal/SingleProduct";

type Props = {
  data?: any;
};

const HomeProducts = (props: Props) => {
  const modalRef = useRef<any>(null);
  const [filterProduct, setfilterProduct] = useState<any>(null);

  let handleFilterProduct = (id: any) => {
    let filterProduct = data.find((product) => product.id == id);
    setfilterProduct(filterProduct);
  };

  const handleModalShow = (id: number | undefined) => {
    handleFilterProduct(id);
    modalRef.current.toggleModal();
  };

  return (
    <>
      <BaseModal ref={modalRef} width="large" position="top">
        <ProductModal data={filterProduct} toogleModal={handleModalShow} />
      </BaseModal>

      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">
        {data &&
          data.map((product, index) => (
            <React.Fragment key={index}>
              <SingleProduct
                product={product}
                handleModalShow={handleModalShow}
              />
            </React.Fragment>
          ))}
      </div>
    </>
  );
};

export default HomeProducts;
