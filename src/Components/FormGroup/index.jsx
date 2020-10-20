import React from 'react';

export default props => (
  <div className={props.divClass}>
    <label for={props.id} className={props.labelClass}>{props.textLabel}</label>
    { props.hasInput === false ? false : 
    <input type={props.tp} className={props.allClass} id={props.id}
      aria-describedby='' placeholder={props.place} /> 
    }
    {props.children}
  </div>
);