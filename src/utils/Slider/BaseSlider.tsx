import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArrayObject = {
  image: string;
  title: string;
  subTitle?: string;
  link: string;
  bgColor?: string;
};

type Props = {
  data: ArrayObject[];
};

const BaseSlider = (props: Props) => {
  const { data } = props;
  return (
    <>
      <div className="flex gap-x-10 items-center w-[100-vw]">
        {data &&
          data.map((slider, index) => (
            <>
              <Link href={slider.link}>
                <div className={`${"bg-" + slider.bgColor} flex gap-x-5 p-4`}>
                  <div>
                    <Image src={slider.image} alt={`slider_${index + 1}`} />
                  </div>

                  <div>
                    <h2 className="font-bold mb-5">{slider.title}</h2>
                    <p>{slider.subTitle}</p>
                  </div>
                </div>
              </Link>
            </>
          ))}
      </div>
    </>
  );
};

export default BaseSlider;
