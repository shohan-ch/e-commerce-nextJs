import ProductCategories from "@/components/Categories/ProductCategories";
import HomeProducts from "@/components/Home/HomeProducts";
import HomeSlider from "@/components/Home/HomeSlider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeSlider />

      <div className="flex justify-between my-5">
        <div className="w-[20%] ">
          {/* <h4 className="text-center mb-4 font-bold text-xl">Categories</h4> */}
          <ProductCategories />
        </div>

        <div className="w-[78%]">
          <HomeProducts />
        </div>
      </div>
    </>
  );
}
