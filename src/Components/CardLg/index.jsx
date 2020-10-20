import React from 'react';

import Button from '../Button';

export default props => (
  <div className="card card_border p-lg-5 p-3 mb-4">
    <div className="card-body py-3 p-0">
      {props.hasTitle === true ? <h3 className={props.titleClass}>{props.title}</h3> : false}
      <div className={'row ' + props.allClass}>
        {props.children}
      </div>
    </div>
  </div>
);