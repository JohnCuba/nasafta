import React from 'react';
import {StoreContext, store} from '../../services/context/store';
import {getNeoArray} from '../../services/api';
import {getNearestObject} from '../../services/helper/math';

import Container from '@material-ui/core/Container';
import Hello from '../Hello';
// import Stepper from '../Stepper';
import EnterDate from '../EnterDate';

export default function App() {
  const handleLoad = () => {
    getNeoArray(
      store.dob,
      {
       callbackOk: (json) => store.setNeoDob(json)
      }
    )
  };

  const handleParse = () => {
    console.log(getNearestObject(store.neoDob))
  };

  return (
    <StoreContext.Provider value={store}>
      <Container maxWidth='xs'>
        <Hello />
        <EnterDate/>
        <button onClick={handleLoad}>tell me future</button>
        <button onClick={handleParse} >view distace</button>
      </Container>
    </StoreContext.Provider>
  )
};
