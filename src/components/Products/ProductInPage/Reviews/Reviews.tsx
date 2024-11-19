import React, { Fragment } from "react";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

type Props = {
  reviews: any;
};

const Reviews = (props: Props) => {
  const { reviews } = props;
  return (
    <>
      <div className="flex gap-16">
        <div className="flex-[60%]">
          {(reviews?.length > 0 &&
            reviews.map((review: any, index: number) => (
              <Fragment key={index}>
                <ReviewList review={review} />
              </Fragment>
            ))) || <>No review found</>}
        </div>
        <div className="flex-[40%]">
          <ReviewForm />
        </div>
      </div>
    </>
  );
};

export default Reviews;
