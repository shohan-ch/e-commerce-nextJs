"use client";

import ImagePreview from "@/components/Products/ProductModal/ImagePreview";
import ProductDetails from "@/components/Products/ProductModal/ProductDetails";
import BaseProductDetailsSlider from "@/utils/Slider/BaseProductDetailsSlider";
import BaseBreadcrumb from "@/utils/Ui/Breadcrumb/BaseBreadcrumb";
import BaseTab from "@/utils/Ui/Tab/BaseTab";
import { useEffect, useState } from "react";
import products from "../../../data/products.json";
import DefaultDetails from "./Details/DefaultDetails";
import Details from "./Details/Details";
import Reviews from "./Reviews/Reviews";

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
    <div className="mt-8">
      <BaseBreadcrumb
        list={[
          { icon: "home", link: "/", title: "Home" },
          { title: "Products" },
          { title: product?.title },
        ]}
      />
      <div className="lg:grid lg:grid-cols-5 xl:gap-14 gap-5 spce-y-5 mt-4">
        <div className="col-span-3 flex flex-col-reverse xl:flex-row gap-5 ">
          <ImagePreview data={allImages} />
        </div>
        <div className="col-span-2 xl:h-[50.5vh]">
          <ProductDetails product={product} />
        </div>
      </div>

      {product && (
        <BaseTab title={["Product Details", "Review Rating"]}>
          <div id="tab1">
            <Details
              details={product?.details || <DefaultDetails product={product} />}
            />
          </div>
          <div id="tab2">
            <Reviews reviews={product.reviews} />
          </div>
        </BaseTab>
      )}

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
