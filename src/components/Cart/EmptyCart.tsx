import Image from "next/image";

type Props = {};

const EmptyCart = (props: Props) => {
  return (
    <>
      <div>
        <div className="text-center w-[20vw] absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
          <Image
            className="mx-auto"
            src="/uploads/images/cart/empty-cart.webp"
            alt="empty-cart"
            width={190}
            height={190}
          />
          <h3 className="font-semibold mb-2 text-2xl">Your Cart is empty.</h3>
          <p className="text-gray-500 text-base">
            Please add product to your cart list
          </p>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
