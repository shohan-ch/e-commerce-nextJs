import BaseSlider from "@/utils/Slider/BaseSlider";
import React from "react";
import sliderData from "../../data/slider.json";

type Props = {};

const HomeSlider = (props: Props) => {
  return (
    <>
      <div className="mt-4">
        <BaseSlider data={sliderData} />
      </div>
    </>
  );
};

export default HomeSlider;
