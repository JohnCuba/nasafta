import React from "react";
import { StoreContext } from "../../services/context/store";

import { getNearestObject } from "../../services/helper/math";

import AllObjects from "./AllObjects";
import Nearest from "./Nearest";

export default function Massages(props) {
  const store = React.useContext(StoreContext);

  if (!props.loaded) {
    return null;
  }
  return (
    <>
      <AllObjects count={store.neoDob.length} />
      <Nearest name={getNearestObject(store.neoDob).name} />
    </>
  );
}
