import React from 'react';


export default props => (
  <button type={props.tp} className={props.allClass} >
    {props.title}
  </button>
);