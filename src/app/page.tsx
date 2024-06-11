import HomeProducts from "@/components/Home/HomeProducts";
import HomeSlider from "@/components/Home/HomeSlider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeSlider />

      <div className="flex justify-between my-5">
        <div className="w-[25%] border">Category</div>

        <div className="w-[70%]">
          <HomeProducts />
        </div>
      </div>
    </>
  );
}
