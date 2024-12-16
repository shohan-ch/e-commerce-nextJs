import React, { forwardRef, useImperativeHandle, useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  placement?: "left" | "right";
  handleClearAll?: () => void;
  handleHideDrawer?: () => boolean;
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
  const {
    children,
    handleHideDrawer,
    handleClearAll,
    title,
    placement = "right",
  } = props;
  const [visible, setVisible] = useState(false);

  const handleDrawer = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return {
      handleDrawer,
      isVisble: visible,
    };
  });

  const handelClear = () => {
    handleClearAll?.();
  };

  const handleHide = () => {
    setVisible(false);
  };

  return (
    <>
      <div
        // onClick={() => setVisible(false)}
        onClick={handleHide}
        className={`${
          visible ? "opacity-100" : "opacity-0 pointer-events-none "
        } fixed h-screen transition-all duration-300 bg-gray-800 bg-opacity-60 z-50 w-full`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${
            visible ? "translate-x-0" : "translate-x-full"
          } absolute w-full xl:w-[400px] right-0 h-full top-0 bg-white transition-transform duration-700 ease-in-out `}
        >
          <div className="drawer-content">
            <div className="drawer-header py-8 px-5 flex justify-between border-b">
              <span className="text-xl font-bold">{title}</span>
              <span className="flex gap-5 items-center">
                {handleClearAll && (
                  <span className="cursor-pointer" onClick={handelClear}>
                    Clear All
                  </span>
                )}

                <button onClick={handleHide}>{icon.closeIcon}</button>
              </span>
            </div>
            <div className="drawer-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default forwardRef(BaseDrawer);
