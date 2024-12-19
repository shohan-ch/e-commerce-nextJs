import React from "react";

type Props = {
  product: any;
};

const DefaultDetails = (props: Props) => {
  const { product } = props;

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
