import React from 'react';

export default props => (
  <div className="col-sm-6 pr-sm-2 statistics-grid">
    <div className="card card_border border-primary-top p-4">
      <i className={"lnr lnr-"+props.icon}> </i>
      <h3 className={"text-"+props.hClass+" number"}>{props.hTitle}</h3>
      <p className="stat-text">{props.subTitle}</p>
    </div>
  </div>
);