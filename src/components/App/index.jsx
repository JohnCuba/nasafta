import React from "react";
import { StoreContext, store } from "../../services/context/store";

import Hello from "../Hello";
import EnterDate from "../EnterDate";
import Messages from "../Messages";

import { Page } from "./styles";

export default function App() {
  const [loaded, setLoaded] = React.useState();

  return (
    <StoreContext.Provider value={store}>
      <Page>
        <Hello />
        <EnterDate setLoaded={setLoaded} />
        <Messages loaded={loaded} />
      </Page>
    </StoreContext.Provider>
  );
}
