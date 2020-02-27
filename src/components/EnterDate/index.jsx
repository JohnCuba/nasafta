import React from "react";
import { StoreContext } from "../../services/context/store";
import { getNeoArray } from "../../services/api";

export default function EnterDate(props) {
  const [show, setShow] = React.useState(true);
  const store = React.useContext(StoreContext);
  const pickedDate = React.useRef();

  const handleChangeDob = () => store.changeDob(pickedDate.current.value);

  const handleLoad = () => {
    getNeoArray(store.dob, {
      callbackOk: json => {
        store.setNeoDob(json);
        props.setLoaded(true);
        setShow(!show);
      }
    });
  };

  return (
    <section className={`animated ${show ? "fadeIn" : "fadeOut"}`}>
      <input type="date" ref={pickedDate} onBlur={handleChangeDob} />
      <button onClick={handleLoad}>Look up</button>
    </section>
  );
}
