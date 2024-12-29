import React, { useEffect, useState } from "react";

type Props = {
  products: any[];
};

const OrderSummary = (props: Props) => {
  const { products } = props;
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  let deliveryFee = 150;
  useEffect(() => {
    let subTotal = 0;
    products.map((p: any) => {
      subTotal += p?.cart * p?.salePrice;
    });
    setSubTotal(subTotal);
    setTotal(subTotal + deliveryFee);
  }, [products]);

  return (
    <>
      <h3 className="font-semibold mb-3">Order Summary</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <h4>Items Total ({products.length} items)</h4>
          <p>
            <span>৳</span> <span>{subTotal}</span>
          </p>
        </div>
        <div className="flex justify-between">
          <h4>Delivery Fee</h4>
          <p>
            <span>৳</span> <span>{deliveryFee}</span>
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <h4>Total:</h4>
          <p className="text-primary">
            <span>৳</span> <span>{total}</span>
          </p>
        </div>
      </div>

      <div className="mt-12">
        <button className="bg-primary text-white w-full block p-3 shadow rounded-md">
          Proceed To Pay
        </button>
      </div>
    </>
  );
};

export default OrderSummary;
