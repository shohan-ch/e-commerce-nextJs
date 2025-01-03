import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";

let icons = {
  star: (isReviewcolor: boolean = false) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={` ${
        isReviewcolor ? "text-[#f3b81f]" : "text-gray-300"
      } bi bi-star-fill`}
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  ),
};

type Props = {
  review: any;
};

const ReviewList = (props: Props) => {
  const { review } = props;
  const [stars, setStars] = useState<any>();
  const [previewImage, setpreviewImage] = useState<any>();

  useEffect(() => {
    let strs = [];
    console.log(review.rating);
    for (let i = 1; i <= 5; i++) {
      strs.push(review.rating >= i ? icons.star(true) : icons.star());
    }
    setStars(strs);
  }, []);

  const handlePreviewImage = (file: any) => {
    setpreviewImage(file);
  };

  // console.log(review.images, "aaa");
  return (
    <>
      <div className="last:border-b-0 border-b pb-4 mb-4">
        <span className="flex gap-2">{stars}</span>
        <p className="mt-2">{review?.user?.name}</p>
        <p className="mt-4">{review?.text}</p>
        <div className="image-container flex gap-3 my-3 ">
          {review?.images.length > 0 &&
            review.images.map((i: any, index: number) => (
              <div
                key={index}
                className={`${
                  previewImage == i ? "border" : ""
                } bg-gray-100 p-[1px] border-primary cursor-pointer`}
              >
                <Image
                  src={i}
                  width={80}
                  height={80}
                  alt="review-image"
                  onClick={() => handlePreviewImage(i)}
                />
              </div>
            ))}
        </div>

        <div className="preview-image">
          {previewImage && (
            <Image
              src={previewImage}
              width={280}
              height={380}
              alt="review-image"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ReviewList;
