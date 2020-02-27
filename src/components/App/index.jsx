import React from "react";
import { StoreContext, store } from "../../services/context/store";

import EnterDate from "../EnterDate";
import Messages from "../Messages";

import 'modern-normalize';
import 'animate.css';
import './styles.css';

export default function App() {
  const [loaded, setLoaded] = React.useState();

  return (
    <StoreContext.Provider value={store}>
      <div className='page'>
        <EnterDate setLoaded={setLoaded} />
        <Messages firstLoad={loaded} />
      </div>
    </StoreContext.Provider>
  );
}
