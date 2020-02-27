import React from "react";
import { StoreContext } from "../../services/context/store";

function AllObjects(props) {
  const store = React.useContext(StoreContext);

  // if (!props.show) {
  //   return null;
  // }
  return (
    <div className={`animated fadeInUp`}>
      В этот день рядом с землей пронеслись {store.neoDob.length} объектов!
    </div>
  );
}

export default AllObjects;
