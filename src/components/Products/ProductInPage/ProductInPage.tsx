"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import products from "../../../data/products.json";
import ImagePreview from "@/components/Products/ProductModal/ImagePreview";
import ProductDetails from "@/components/Products/ProductModal/ProductDetails";
import BaseProductDetailsSlider from "@/utils/Slider/BaseProductDetailsSlider";
import BaseTab from "@/utils/Ui/Tab/BaseTab";
import Image from "next/image";

type Props = {
  productId: number;
};

const ProductInPage = (props: Props) => {
  const { productId } = props;
  const [product, setProduct] = useState<any>();

  useEffect(() => {
    let getProduct = products.find((p) => p.id == productId);
    setProduct(getProduct);
  }, []);

  const allImages = product && [product.coverImage, ...product.images];

  return (
    <div>
      <div className="lg:grid lg:grid-cols-5 xl:gap-14 gap-5 spce-y-5 mt-8">
        <div className="col-span-3 flex flex-col-reverse xl:flex-row gap-5 ">
          <ImagePreview data={allImages} />
        </div>
        <div className="col-span-2 xl:h-[50.5vh]">
          <ProductDetails data={product} />
        </div>
      </div>
      <BaseTab title={["Product Details", "Review Rating"]}>
        <div id="tab1">
          <p>Lorem ipsum dolor</p>
        </div>
        <div id="tab2">
          <h2>Id 2</h2>
          <p className="bg-primary">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
      </BaseTab>

      <BaseProductDetailsSlider title="Related products" data={products} />
      <div className="pb-10">
        <BaseProductDetailsSlider
          title="Recently Viewed "
          data={products.slice(0, 3)}
        />
      </div>
    </div>
  );
};

export default ProductInPage;
