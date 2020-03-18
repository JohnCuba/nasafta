import React from "react";
import {getStringDate} from '../helper/date';

export const store = {
// data
  dob: getStringDate(),
  neoDob: null,
// methods
  changeDob: (payload) => store.dob = payload,
  setNeoDob: (payload) => store.neoDob = payload
};

export const StoreContext = React.createContext(store);
