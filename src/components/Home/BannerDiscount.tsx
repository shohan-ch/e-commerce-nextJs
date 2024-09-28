import Image from "next/image";
import Link from "next/link";
import BannerImage from "../../../public/uploads/images/banner/discount/banner-7.webp";
type Props = {};

const BannerDiscount = (props: Props) => {
  return (
    // <div
    //   style={{ position: "relative", paddingBottom: "400px", width: "100%" }}
    // >
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Link href={"/"}>
        <Image
          src={BannerImage}
          alt="BannerDiscount"
          className="rounded-sm"
          style={{ width: "100%" }}
        ></Image>
      </Link>
    </div>
    // </div>
  );
};

export default BannerDiscount;
