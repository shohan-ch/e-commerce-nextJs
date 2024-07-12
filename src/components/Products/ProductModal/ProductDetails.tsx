import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import React from "react";

type Props = {
  data: any;
};

const ProductDetails = (props: Props) => {
  const { data } = props;
  console.log(data, "from details");

  return (
    <div>
      <h2 className="text-base">{data?.title}</h2>
      <p className="text-gray-600 mt-3 mb-4">{data?.quantity}</p>
      <p>
        <span className="font-semibold mr-3">
          {" "}
          <span className="text-2xl">৳</span>
          {data?.salePrice}
        </span>
        <span className="text-2xl mr-1">৳</span>
        <span className="line-through">{data?.price}</span>
      </p>

      <div id="cartDiv" className="mb-10">
        <div className="bg-gray-100 rounded  h-[50px]  flex items-center justify-center">
          <button>-</button>1
          <button>
            <IconSvg name="plus" color="black" />
          </button>
        </div>
      </div>

      <p className="font-bold text-base mb-3">Product Details:</p>
      <p>
        <span className="line-clamp-5 text-pretty">
          {data?.details}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          fugit inventore incidunt earum dolorum aliquid aspernatur repudiandae
          blanditiis ipsa, necessitatibus nihil nesciunt hic tempore eaque
          consequuntur praesentium iure non natus deserunt reprehenderit quos
          rem fuga sequi! Nobis cum, doloribus quia eligendi, porro nesciunt
          voluptates explicabo voluptas dolores blanditiis quod consequuntur sit
          sint distinctio vel totam, nihil obcaecati impedit nisi eaque
          reiciendis sequi. Beatae illum architecto reprehenderit fuga quae
          explicabo odio maxime quo ipsa omnis qui nemo suscipit dolorum vero
          eius saepe cupiditate laudantium nisi, cum consectetur possimus?
          Temporibus quo accusantium expedita repellendus a, amet distinctio
          voluptatibus non nostrum sint qui!
        </span>

        <span>
          <Link href={"/"} className="text-primary">
            Read More
          </Link>
        </span>
      </p>
    </div>
  );
};

export default ProductDetails;
