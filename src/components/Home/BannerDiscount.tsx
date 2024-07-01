import Image from "next/image";
import Link from "next/link";
import BannerImage from "../../../public/uploads/images/banner/discount/banner-7.webp";
type Props = {};

const BannerDiscount = (props: Props) => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src={BannerImage}
          alt="BannerDiscount"
          className="rounded-sm"
        ></Image>
      </Link>
    </div>
  );
};

export default BannerDiscount;
