import ProductCategories from "@/components/Categories/ProductCategories";
import HomeProducts from "@/components/Home/HomeProducts";
import HomeSlider from "@/components/Home/HomeSlider";
import BaseItemsSlider from "@/utils/Slider/BaseItemsSlider";
import data from "../data/products.json";

import Image from "next/image";
import BannerDiscount from "@/components/Home/BannerDiscount";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <div className="flex my-5 gap-x-8 flex-wrap ">
        <ProductCategories />
        <div className="max-w-[77%] mx-auto">
          <HomeProducts />
        </div>
      </div>

      <BaseItemsSlider title="Popular product of our store" data={data} />
      <BannerDiscount />
      <BaseItemsSlider title="Your viewed products of last time" data={data} />

      {/* <HomeSlider /> */}
    </>
  );
}
