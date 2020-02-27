import React from "react";
import { getNearestObject } from "../../services/helper/math";

import AllObjects from "./AllObjects";
import Nearest from "./Nearest";

export default function Massages(props) {
  if (!props.firstLoad) {
    return null;
  }
  return (
    <>
      <AllObjects />
      {/* <Nearest name={getNearestObject(neoDob).name} /> */}
    </>
  );
}
