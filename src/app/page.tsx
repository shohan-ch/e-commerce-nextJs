import ProductCategories from "@/components/Categories/ProductCategories";
import HomeProducts from "@/components/Home/HomeProducts";
import HomeSlider from "@/components/Home/HomeSlider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <div className="flex my-5 gap-x-5 flex-wrap ">
        <ProductCategories />

        <div className=" max-w-[76%] mx-auto">
          <HomeProducts />
        </div>

        {/* <div className="w-[20%]">
          <ProductCategories />
        </div>

        <div className="w-[78%]">
          <HomeProducts />
        </div> */}
      </div>

      <HomeSlider />
    </>
  );
}
