import React from "react";
import { StoreContext } from "../../services/context/store";
import { getNeoArray } from "../../services/api";

export default function EnterDate(props) {
  const store = React.useContext(StoreContext);
  const [status, setStatus] = React.useState("fadeIn");
  const pickedDate = React.useRef();

  const handleChangeDob = () => store.changeDob(pickedDate.current.value);

  const handleLoad = () => {
    getNeoArray(store.dob, {
      callbackOk: json => {
        store.setNeoDob(json);
        setStatus("fadeOutUp");
        props.setLoaded(true);
      }
    });
  };

  return (
    <section className={`animated ${status}`}>
      <input type="date" ref={pickedDate} onBlur={handleChangeDob} />
      <button onClick={handleLoad}>Look up</button>
    </section>
  );
}
