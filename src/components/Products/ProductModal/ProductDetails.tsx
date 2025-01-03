import { useCart, useCartDispatch } from "@/context/CartContextProvider";
import { useDrawerContext } from "@/context/DrawerContextProvider";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type Props = {
  product: any;
  toogleModal?: (id: number) => void;
};

const ProductDetails = (props: Props) => {
  const { product, toogleModal } = props;
  const path = usePathname();
  const isProductInPage = path.includes("/products/");
  const cartInContext = useCart();
  const dispatchCart = useCartDispatch();
  const {
    handleShowDrawerByContext,
    isVisibleDrawerByContext,
    handleHideDrawerByContext,
  } = useDrawerContext();
  const productInCart = useMemo(() => {
    return cartInContext.find((c: any) => c?.id == product?.id);
  }, [cartInContext]);

  const handleAddInCart = () => {
    dispatchCart({
      type: "add",
      product: { ...product, cart: 1 },
    });
  };
  const handleRemoveCart = () => {
    dispatchCart({
      type: "remove",
      product,
    });
  };
  const handleAddCart = () => {
    if (!isVisibleDrawerByContext) {
      handleShowDrawerByContext();
    } else {
      handleHideDrawerByContext();
    }
    // handleShowDrawerByContext();

    if (toogleModal) {
      toogleModal(product.id);
    }

    if (!productInCart) {
      dispatchCart({
        type: "add",
        product: { ...product, cart: 1 },
      });
    }
  };
  return (
    <div>
      <h2 className="text-2xl font-medium">{product?.title}</h2>
      <p className="text-gray-600 mt-3 mb-4">{product?.quantity}</p>
      <p>
        <span className="font-semibold mr-3">
          {" "}
          <span className="text-2xl">৳</span>
          {product?.salePrice}
        </span>
        <span className="text-2xl mr-1">৳</span>
        <span className="line-through">{product?.price}</span>
      </p>

      <div id="cartDiv" className="mb-10 mt-4">
        <div className="bg-gray-100 rounded py-3  flex gap-x-10 items-center justify-center">
          <button onClick={handleRemoveCart}>
            <IconSvg name="minus" />
          </button>
          <span className="text-2xl">{productInCart?.cart || 0}</span>
          <button onClick={handleAddInCart}>
            <IconSvg name="plus" color="black" />
          </button>
        </div>

        <button
          onClick={handleAddCart}
          className="bg-primary  py-3 text-white w-full mt-4 rounded flex gap-x-3 items-center justify-center"
        >
          <span>
            <IconSvg name="cart2" />
          </span>
          Add to Cart123
        </button>

        <button className="bg-secondary  py-3 text-white w-full mt-4 rounded flex gap-x-3 items-center justify-center">
          <span>
            <IconSvg name="bag" />
          </span>
          Buy Now
        </button>
      </div>

      {!isProductInPage && (
        <div>
          <p className="font-bold text-base mb-3">Product Details:</p>
          <p>
            <span className="line-clamp-5 text-pretty leading-7">
              {product?.details}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              fugit inventore incidunt earum dolorum aliquid aspernatur
              repudiandae blanditiis ipsa, necessitatibus nihil nesciunt hic
              tempore eaque consequuntur praesentium iure non natus deserunt
              reprehenderit quos rem fuga sequi! Nobis cum, doloribus quia
              eligendi, porro nesciunt voluptates explicabo voluptas dolores
              blanditiis quod consequuntur sit sint distinctio vel totam, nihil
              obcaecati impedit nisi eaque reiciendis sequi. Beatae illum
              architecto reprehenderit fuga quae explicabo odio maxime quo ipsa
              omnis qui nemo suscipit dolorum vero eius saepe cupiditate
              laudantium nisi, cum consectetur possimus? Temporibus quo
              accusantium expedita repellendus a, amet distinctio voluptatibus
              non nostrum sint qui!
            </span>

            <span>
              <Link href={"products/" + product?.id} className="text-primary">
                Read More
              </Link>
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
