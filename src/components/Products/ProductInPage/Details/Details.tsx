import React, { ReactNode } from "react";

type Props = {
  details: string | ReactNode;
};

const Details = (props: Props) => {
  const { details } = props;
  return <>{details}</>;
};

export default Details;
