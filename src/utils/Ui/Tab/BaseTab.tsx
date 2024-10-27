import React, { useEffect, useState } from "react";

type Props = {
  title: string[];
  children: React.ReactNode | any;
};

const BaseTab = (props: Props) => {
  const { title, children } = props;
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedNode, setSelectedNode] = useState<any>();

  console.log(children);

  useEffect(() => {
    let reactNode = children.find(
      (t: any) => t.props.id == "tab" + selectedTab.toString()
    );
    setSelectedNode(reactNode || <>Not found check id!</>);
  }, [selectedTab]);

  const handleSelectTab = (id: number) => () => {
    setSelectedTab(id);
  };

  return (
    <>
      <div className="tab">
        <div className="tab-header  py-8">
          <div className="flex gap-10 cursor-pointer border-b">
            {title.map((t, index) => (
              <div
                onClick={handleSelectTab(index + 1)}
                key={index}
                className={` ${
                  selectedTab == index + 1 ? "border-b-2 border-primary" : ""
                } pb-5 text-lg `}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="tab-body">{selectedNode}</div>
      </div>
    </>
  );
};

export default BaseTab;
