import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../../Pages/Home/home';
import Header from '../Header/header';
import Login from '../../Pages/Login/login';
import SelectRoute from '../../Pages/SelectRoute/selectRoute';
import RouteSelected from '../../Pages/RouteSelected/routeSelected';
import UserProfile from '../../Pages/UserProfile/UserProfile';
import AuthApi from '../../Services/authApi';
import DatabaseApi from '../../Services/dbApi';
import SignUp from '../SignUp/SignUp';
import { setUserInfo } from '../../redux/actions/userActions';

import { library } from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faMapMarkerAlt, faHeart, faEnvelope, faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

library.add(faUserCircle, faMapMarkerAlt, faHeart, faEnvelope, faBars, faTimes);

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: null,
      loading: true
    };
  }
  
  componentDidMount(){
    AuthApi.registerAuthObserver(async (user) => {
      console.log('​App -> componentDidMount -> user', user);
      let userData = null;
      if (user) {
        userData = await DatabaseApi.getDocumentById('user', user.uid);
        if(!userData){ 
          console.log('!!! something strange happend with user');
        }
      } 
      // eslint-disable-next-line react/prop-types
      //this.props.setUser(userData);
      this.setState({user:userData, loading: false});
    });
  }

  logout = () => {
    const error = AuthApi.logout();
    if(!error){
      console.log('logout user');
    }
  }

  render() {
    const { user, loading } = this.state;
    if(loading) return <div>Loading</div>;

    return (
      <div className="App">
        <Router>
          <div>
            <Header user={user} logout={this.logout} loading={loading} />
            <Switch>
              <Route path="/home" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/select" component={SelectRoute} />        
              <Route path="/route/:id" component={RouteSelected} />
              <Route path="/user/:id" component={UserProfile} /> 
              <Route from="/" to="/home" />          
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
