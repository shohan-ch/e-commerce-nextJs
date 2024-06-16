import ProductCategories from "@/components/Categories/ProductCategories";
import HomeProducts from "@/components/Home/HomeProducts";
import HomeSlider from "@/components/Home/HomeSlider";
import ProductSlider from "@/components/Home/ProductSlider";
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

      <ProductSlider title="Popular product of our store" />

      {/* <HomeSlider /> */}
    </>
  );
}
