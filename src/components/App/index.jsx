import React from 'react';
import {StoreContext, store} from '../../services/context/store';
import {getNeoArray} from '../../services/api';
import {getNearestObject} from '../../services/helper/math';

import Hello from '../Hello';
import EnterDate from '../EnterDate';
import Messages from '../Messages';

export default function App() {
  const [showMessages, setShowMessages] = React.useState(false);
  const handleLoad = () => {
    getNeoArray(
      store.dob,
      {
        callbackOk: (json) => {
          store.setNeoDob(json);
          setShowMessages(true);
        }
      }
    )
  };

  const handleParse = () => {
    console.log(getNearestObject(store.neoDob))
  };

  return (
    <StoreContext.Provider value={store}>
        <Hello />
        <EnterDate/>
        <button onClick={handleLoad}>tell me future</button>
        <button onClick={handleParse} >view distace</button>
        <Messages show={showMessages} />
    </StoreContext.Provider>
  )
};
