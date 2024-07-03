import React from "react";

type Props = {
  data: any;
};

const ProductInModal = (props: Props) => {
  const { data } = props;
  return (
    <div>
      <div className="grid grid-cols-5 gap-14">
        <div className="col-span-3 flex flex-col-reverse md:flex-row gap-x-5">
          <div className="w-[20%] border">Image box</div>
          <div className="w-[80%] border">Image Preview</div>
        </div>
        <div className="bg-green-300 col-span-2">Details</div>
      </div>
    </div>
  );
};

export default ProductInModal;
