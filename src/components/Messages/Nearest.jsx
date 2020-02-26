import React from 'react';

function Nearest(props) {
  if(!props.name) {return null};
  return (
    <p>И ближайший из них - {props.name}!</p>
  )
};

export default Nearest;
