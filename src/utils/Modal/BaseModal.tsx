import { ReactNode, forwardRef, useImperativeHandle, useState } from "react";

type Props = {
  title?: string;
  children: ReactNode;
  width?: "small" | "large";
  position?: "top" | "center";
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
const BaseModal = (props: Props, ref: any) => {
  const { title, children, width, position } = props;
  const [isModalVisiable, setIsModalVisiable] = useState<boolean>(false);

  const style = {
    width: width == "large" ? "max-w-[80vw]" : "max-w-4xl",
    position: position == "top" ? "top-0" : "",
  };

  const handleModal = () => {
    setIsModalVisiable(!isModalVisiable);
  };
  useImperativeHandle(ref, () => {
    return {
      toggleModal: handleModal,
    };
  });

  return (
    <div>
      <div
        onClick={() => setIsModalVisiable(false)}
        className={`${
          isModalVisiable
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } flex justify-center h-screen transition-all duration-500 ease-in-out overflow-y-auto bg-gray-800 bg-opacity-50 overflow-x-hidden fixed top-0 right-0 left-0 z-50 items-center`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${style.position} ${style.width} absolute w-full max-h-full p-4`}
        >
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow ">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 ">
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <button
                onClick={handleModal}
                className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto"
              >
                {icon.closeIcon}
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 space-y-4 md:p-5">{children}</div>
            {/* Modal footer */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(BaseModal);
