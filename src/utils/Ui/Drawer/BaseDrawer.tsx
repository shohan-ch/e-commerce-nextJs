import { title } from "process";
import React, { forwardRef, useImperativeHandle, useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  placement?: "left" | "right";
};

const icon = {
  closeIcon: (
    <svg
      className="w-3 h-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      />
    </svg>
  ),
};

const BaseDrawer = (props: Props, ref: any) => {
  const { children, title, placement = "right" } = props;
  const [visible, setVisible] = useState(true);

  const handleDrawer = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return {
      handleDrawer,
    };
  });

  return (
    <>
      <div
        onClick={() => setVisible(false)}
        className={`${
          visible ? "opacity-100" : "opacity-0 pointer-events-none "
        } fixed h-screen transition-all duration-300 bg-gray-800 bg-opacity-60 z-50 w-full`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${visible ? "w-[444px]" : "w-[0px]"} ${
            placement + "-0"
          } absolute h-full top-0 bg-white transition-all duration-700 ease-in-out`}
        >
          <div className="drawer-content">
            <div className="drawer-header py-8 px-5 flex justify-between border-b">
              <span className="text-xl font-bold">{title}</span>
              <span className="flex gap-5 items-center">
                <span>Clear All</span>
                <button onClick={() => setVisible(false)}>
                  {icon.closeIcon}
                </button>
              </span>
            </div>
            <div className="drawer-body py-8 px-5">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default forwardRef(BaseDrawer);
