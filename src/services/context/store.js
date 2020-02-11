import React from "react";
import {getStringDate} from '../helper/date';

export const store = {
// data
  dob: getStringDate(new Date()),
// methods
  changeDob: (date) => store.dob = date,
};

export const StoreContext = React.createContext(store);
