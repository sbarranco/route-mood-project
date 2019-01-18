import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/home';
import Header from './components/Header/header';
import Login from './Pages/Login/login';
import SelectRoute from './Pages/SelectRoute/selectRoute';
import RouteSelected from './Pages/RouteSelected/routeSelected';
import UserProfile from './Pages/User/user';


const Routers = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/select" component={SelectRoute} />        
        <Route path="/route/:id" component={RouteSelected} />
        <Route path="/user/:id" component={UserProfile} />
      </Switch>
    </div>
  </Router>
);

export default Routers;