import React, { useState } from "react";
import ShippingForAuthUser from "./ShippingForAuthUser";
import ShippingForGuestUser from "./ShippingForGuestUser";

type Props = {};

const ShippingAddresses = (props: Props) => {
  const [isAuth, setIsAuth] = useState(true);

  return <>{(isAuth && <ShippingForAuthUser />) || <ShippingForGuestUser />}</>;
};

export default ShippingAddresses;
