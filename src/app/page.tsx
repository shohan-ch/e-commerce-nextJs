import ProductCategories from "@/components/Categories/ProductCategories";
import HomeProducts from "@/components/Home/HomeProducts";
import HomeSlider from "@/components/Home/HomeSlider";
import BaseItemsSlider from "@/utils/Slider/BaseItemsSlider";
import data from "../data/products.json";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <div className="flex my-5 gap-x-5 flex-wrap ">
        <ProductCategories />
        <div className="max-w-[76%] mx-auto">
          <HomeProducts />
        </div>
      </div>

      <BaseItemsSlider title="Popular product of our store" data={data} />
      <BaseItemsSlider title="products are viewed 123" data={data} />

      {/* <HomeSlider /> */}
    </>
  );
}
