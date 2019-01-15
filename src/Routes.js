import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/home';
import Register from './Pages/Register/register';
import SelectMood from './Pages/SelectMood/selectMood';
import RouteSelected from './Pages/RouteSelected/routeSelected';
import UserProfile from './Pages/User/user';


const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/select" component={SelectMood} />        
        <Route path="/route/:id" component={RouteSelected} />
        <Route path="/user/:id" component={UserProfile} />
      </Switch>
    </div>
  </Router>
);

export default Routes;