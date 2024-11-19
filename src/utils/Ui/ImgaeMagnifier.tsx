import Image from "next/image";
import React, { useState } from "react";

type Props = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  style?: string;
};

const ImgaeMagnifier = (props: Props) => {
  const { src, alt, width, height, style } = props;
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState<boolean>(false);
  const magnifierHeight = 250;
  const magnifieWidth = 250;
  const zoomLevel = 2;

  const previewImageEnter = (e: React.MouseEvent) => {
    const elem = e.currentTarget;
    const { width, height } = elem.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  };
  const previewImageMove = (e: React.MouseEvent) => {
    // update cursor position
    const elem = e.currentTarget;
    const { top, left } = elem.getBoundingClientRect();

    // calculate cursor position on the image
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    setXY([x, y]);
  };

  return (
    <>
      <div>
        <Image
          className="hover:cursor-pointer"
          onMouseEnter={previewImageEnter}
          onMouseMove={previewImageMove}
          onMouseLeave={() => setShowMagnifier(false)}
          src={src}
          width={width}
          height={height}
          alt={alt || ""}
        />

        <div
          style={{
            display: showMagnifier ? "" : "none",
            position: "absolute",

            // prevent magnifier blocks the mousemove event of img
            pointerEvents: "none",
            // set size of magnifier
            height: `${magnifierHeight}px`,
            width: `${magnifieWidth}px`,
            // move element center to cursor pos
            top: 0,
            left: 0,
            // top: `${y - magnifierHeight / 2}px`,
            // left: `${x - magnifieWidth / 2}px`,
            opacity: "1", // reduce opacity so you can verify position
            border: "1px solid lightgray",
            backgroundColor: "white",
            backgroundImage: `url('${src}')`,
            backgroundRepeat: "no-repeat",

            //calculate zoomed image size
            backgroundSize: `${imgWidth * zoomLevel}px ${
              imgHeight * zoomLevel
            }px`,

            //calculate position of zoomed image.
            backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
            backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
          }}
        ></div>
      </div>
    </>
  );
};

export default ImgaeMagnifier;
