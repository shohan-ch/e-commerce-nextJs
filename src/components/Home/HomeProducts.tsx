"use client";
import Image from "next/image";
import data from "../../data/products.json";
import IconSvg from "@/icons/IconSvg";

type Props = {
  data?: any;
};

const HomeProducts = (props: Props) => {
  // const { data } = props;

  console.log(data);
  return (
    <>
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">
        {data &&
          data.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm p-4 cursor-pointer group hover:shadow-md transition-all duration-200"
            >
              <div className="imageSection relative h-[50%]">
                <Image
                  src={product.coverImage}
                  alt={"image_" + index}
                  width={170}
                  height={150}
                  className="text-center mx-auto group-hover:scale-110 transition-all duration-200"
                />
                <button className="absolute right-0 bottom-0 bg-primary size-10 rounded-full  flex justify-center items-center">
                  <IconSvg name="plus" />
                </button>
              </div>
              <div className="space-y-3 mt-5">
                <p className="font-semibold">
                  <span className="text-lg">TK.{product.salePrice}</span>
                  <sub className="p-2 text-xs line-through">
                    TK. {product.price}
                  </sub>
                </p>
                <p className="text-lg">{product.title}</p>
                <p className="text-base text-gray-700">{product.quantity}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default HomeProducts;