import BaseFileUpload from "@/utils/Forms/BaseFileUpload";
import BaseInput from "@/utils/Forms/BaseInput";
import BaseTextArea from "@/utils/Forms/BaseTextArea";
import React, { useEffect, useState } from "react";
let icons = {
  star: (isReviewcolor: boolean = false) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      fill="currentColor"
      className={` ${
        isReviewcolor ? "text-[#f3b81f]" : "text-gray-300"
      } bi bi-star-fill hover:text-[#f3b81f] hover:scale-125 transition-all duration-100`}
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  ),
};

type Props = {};

const ReviewForm = (props: Props) => {
  const [countStar, setCountStar] = useState<number>(1);
  const [isRatingConfirmed, setIsRatingConfirmed] = useState<boolean>(false);

  const handleCountStar = (count: number) => () => {
    if (!isRatingConfirmed) {
      setCountStar(count);
    }
  };

  const handleConfirmedRating = (count: number) => () => {
    setIsRatingConfirmed(true);
    setCountStar(count);
    setTimeout(() => {
      setIsRatingConfirmed(false);
    }, 1000);
  };
  console.log(countStar);

  return (
    <div className="space-y-5">
      <h2 className="font-medium">Write Your Review</h2>
      <div className="flex gap-4">
        <label htmlFor="rating">Your Rating*</label>
        <div className="flex gap-2" onMouseLeave={handleCountStar(1)}>
          {Array(5)
            .fill(1)
            .map((_, i) => (
              <div
                onMouseEnter={handleCountStar(i + 1)}
                onMouseLeave={handleCountStar(countStar - 1)}
                key={i}
                className="cursor-pointer"
                onClick={handleConfirmedRating(i + 1)}
              >
                {icons["star"](countStar >= i + 1 ? true : false)}
              </div>
            ))}
        </div>
      </div>

      <div className="space-y-3">
        <label htmlFor="text">Add a written review</label>

        <BaseTextArea
          handleChange={(e) => console.log(e.target.value)}
          name="text"
          placeHolder="Add a review"
          style="!border-primary"
        />
      </div>

      <div className="space-y-3">
        <label htmlFor="photo">Add a photo or video</label>

        <BaseFileUpload
          name="images"
          handleChange={(e) => console.log(e.target.files)}
          labelTitle="Add photos or video"
          multiple={true}
          style="!border-primary"
        />
      </div>

      <button className="bg-primary p-3 rounded-sm font-medium shadow-md text-white">
        Add Review
      </button>
    </div>
  );
};

export default ReviewForm;