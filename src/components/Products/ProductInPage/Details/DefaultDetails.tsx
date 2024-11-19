import React from "react";

type Props = {
  product: any;
};

const DefaultDetails = (props: Props) => {
  const { product } = props;
  console.log(product, "cas");

  return (
    <>
      {product?.title +
        " " +
        product?.quantity +
        " " +
        "price " +
        product?.salePrice}
    </>
  );
};

export default DefaultDetails;
