import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  list: {
    title: string;
    link?: string;
    icon?: keyof typeof icons;
  }[];
};

const icons = {
  home: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        className="bi bi-house-door"
        viewBox="0 0 16 16"
      >
        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
      </svg>
    </>
  ),
  rightArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-chevron-right"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
      />
    </svg>
  ),
};

const BaseBreadcrumb = (props: Props) => {
  const { list } = props;

  return (
    <div className="flex gap-4">
      {list.map((l, index) => (
        <div key={index}>
          <Link
            className="flex items-center justify-center"
            href={l.link ? l.link : ""}
          >
            <span className={`${l.icon && "mr-2"}`}>
              {l.icon ? icons[l.icon] : ""}
            </span>
            <span
              className={`flex gap-3 justify-center items-center ${
                index == list.length - 1 ? "font-medium" : ""
              }`}
            >
              <span>{l.title}</span>
              {index != list.length - 1 && <span>{icons.rightArrow}</span>}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BaseBreadcrumb;
