import React, { ReactNode } from "react";

type Props = {
  list: {
    title: string;
    link: string;
    icon?: string | ReactNode;
  }[];
};

const Breadcrumb = (props: Props) => {
  const { list } = props;

  return (
    <div className="flex gap-4">
      {list.map((l) => (
        <>
          <div>
            <a href={l.link}>
              <span className={`${l.icon && "mr-2"}`}>{l.icon}</span>
              <span>{l.title}</span>
            </a>
          </div>
        </>
      ))}
    </div>
  );
};

export default Breadcrumb;
