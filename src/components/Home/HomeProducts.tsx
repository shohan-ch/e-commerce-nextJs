"use client";
import Image from "next/image";
import data from "../../data/products.json";
import IconSvg from "@/icons/IconSvg";
import BaseModal from "@/utils/Modal/BaseModal";
import React, { useEffect, useRef, useState } from "react";
import ProductModal from "../Products/ProductModal/ProductModal";
import SingleProduct from "../Products/ProductModal/SingleProduct";
import { useCart } from "@/context/CartContextProvider";

type Props = {
  data?: any;
};

const HomeProducts = (props: Props) => {
  const modalRef = useRef<any>(null);
  const [filterProduct, setfilterProduct] = useState<any>(null);
  const cart = useCart();

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
        <ProductModal data={filterProduct} />
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

            // <div
            //   key={index}
            //   className="border rounded-lg shadow-sm p-4 cursor-pointer group hover:shadow-md transition-all duration-200"
            //   onClick={handleModalShow(product.id)}
            // >
            //   <div className=" imageSection relative h-[50%]">
            //     <Image
            //       src={product.coverImage}
            //       alt={"image_" + index}
            //       width={170}
            //       height={150}
            //       className="text-center mx-auto group-hover:scale-110 transition-all duration-200"
            //     />
            //     <div>
            //       <button
            //         onClick={showCartContainer}
            //         className="absolute right-0 bottom-0 bg-primary size-10 rounded-full  flex justify-center items-center"
            //       >
            //         <IconSvg name="plus" />
            //       </button>
            //       <div
            //         onClick={(e: any) => {
            //           e.stopPropagation();
            //           alert("+");
            //         }}
            //         className="absolute bottom-0 left-[50%] -translate-x-[50%] bg-white shadow-md rounded-full py-2 px-3 flex gap-x-10 items-center justify-center"
            //       >
            //         <button>
            //           <IconSvg name="minus" color="gray" />
            //         </button>
            //         <span className="text-xl">1</span>
            //         <button>
            //           <IconSvg name="plus" color="gray" />
            //         </button>
            //       </div>
            //     </div>
            //   </div>
            //   <div className="space-y-3 mt-5">
            //     <p className="font-semibold">
            //       <span className="text-lg">TK.{product.salePrice}</span>
            //       <sub className="p-2 text-xs line-through">
            //         TK. {product.price}
            //       </sub>
            //     </p>
            //     <p className="text-lg">{product.title}</p>
            //     <p className="text-base text-gray-700">{product.quantity}</p>
            //   </div>
            // </div>
          ))}
      </div>
    </>
  );
};

export default HomeProducts;
