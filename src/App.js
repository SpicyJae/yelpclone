import React from 'react';
import { LandingPage } from './LandingPage/LandingPage';
import axios from 'axios';
import { Search } from './Search/Search';
import { BusinessDetails } from './BusinessDetails/BusinessDetails'
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path='/search' component={Search}/>
      <Route path='/biz' component={BusinessDetails}/>
      <Route path='/' component={LandingPage}/>
    </Switch>
  );
}

export default App;
