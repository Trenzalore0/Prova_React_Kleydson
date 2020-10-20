import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Home from '../Pages/Home';
import Form from '../Pages/Forms';
import Cards from '../Pages/Cards';
import Pricing from '../Pages/Pricing';
import Blocks from '../Pages/Blocks';

export default props => (
  <Router history={hashHistory}>
    <Route path='/Home' component={Home} />
    <Route path='/Cards' component={Cards} />
    <Route path='/Pricing' component={Pricing} />
    <Route path='/Blocks' component={Blocks} />
    <Route path='/Forms' component={Form} />
    <Redirect from='*' to='/Home' />
  </Router>
);