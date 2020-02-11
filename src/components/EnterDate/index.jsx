import React from 'react';
import {StoreContext} from '../../services/context/store';

export default function EnterDate() {
  const store = React.useContext(StoreContext);
  const pickedDate = React.useRef();
  const handleChangeDob = () => store.changeDob(pickedDate.current.value);

  return (
    <input
      type='date'
      ref={pickedDate}
      onBlur={handleChangeDob}
    />
  );
};
