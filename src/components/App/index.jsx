import React from 'react';
import {StoreContext, store} from '../../services/context/store';
import {getNeoArray} from '../../services/api';
import {Page} from './styles';

import Hello from '../Hello';
import EnterDate from '../EnterDate';

export default function App() {
  return (
    <StoreContext.Provider value={store}>
      <Page>
        <Hello />
        <EnterDate/>
        <button onClick={() => getNeoArray(store.dob)}> </button>
      </Page>
    </StoreContext.Provider>
  )
};
