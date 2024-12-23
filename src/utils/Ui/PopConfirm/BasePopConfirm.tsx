import { forwardRef, ReactNode, useImperativeHandle, useState } from "react";

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
type Props = {
  title: string;
  description: string;
  handleOk?: () => void;
  handleCancel?: () => void;
  children?: ReactNode;
};

const BasePopConfirm = (props: Props, ref: any) => {
  const { title, description, children, handleOk, handleCancel } = props;
  const [visible, setVisible] = useState(false);
  const handleShow = () => {
    setVisible(!visible);
  };

  const handleClose = () => {
    setVisible(false);
  };

  useImperativeHandle(ref, () => {
    return {
      handleShow,
    };
  });

  const handleRemove = () => {
    if (handleOk) handleOk();
  };

  return (
    <>
      <div>
        <div>{children}</div>

        {visible && (
          <div
            onClick={() => setVisible(false)}
            className="fixed h-screen top-0 left-0 right-0 bg-black bg-opacity-20 z-50 w-full"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-max py-8 px-5 shadow-md bg-white rounded-md animate-fadeIn"
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold">{title}</h4>
                <span onClick={handleClose} className="cursor-pointer">
                  {icon.closeIcon}
                </span>
              </div>
              <p>{description}</p>
              <div className="float-end pt-2 flex gap-x-3">
                <button onClick={handleClose}>Cancel</button>
                <button onClick={handleRemove}>Remove</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default forwardRef(BasePopConfirm);
