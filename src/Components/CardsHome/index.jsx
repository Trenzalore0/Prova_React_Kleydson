import React from 'react';

import Separetor from '../CardDouble';
import Card from '../CardSm';

export default props => (
  <div className="statistics">
    <div className="row">
      <Separetor className="col-xl-6 pr-xl-2">
        <Card icon='users' hClass='primary' hTitle='29.75 M' subTitle='Total Users' />
        <Card icon='eye' hClass='secondary' hTitle='51.25 K' subTitle='Daily Visitors' />
      </Separetor>
      <Separetor className="col-xl-6 pl-xl-2">
        <Card icon='cloud-download' hClass='success' hTitle='166.89 M' subTitle='Downloads' />
        <Card icon='cart' hClass='danger' hTitle='1,250k' subTitle='Purchased' />
      </Separetor>
    </div>
  </div>
);