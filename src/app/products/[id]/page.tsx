import ProductInPage from "@/components/Products/ProductInPage/ProductInPage";
import React from "react";

type Props = {
  params: { id: number };
};

const page = (props: Props) => {
  const { params } = props;
  return (
    <div>
      <ProductInPage productId={params.id} />
    </div>
  );
};

export default page;
