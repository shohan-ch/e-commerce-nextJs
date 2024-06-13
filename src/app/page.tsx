import ProductCategories from "@/components/Categories/ProductCategories";
import HomeProducts from "@/components/Home/HomeProducts";
import HomeSlider from "@/components/Home/HomeSlider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <div className="flex my-5 gap-x-9 flex-wrap">
        <ProductCategories />

        <div className="w-[100%]">
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
