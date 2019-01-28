import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../../Pages/Home/home';
import Header from '../Header/header';
//import Footer from '../Footer/Footer';
import Login from '../../Pages/Login/login';
import SelectRoute from '../../Pages/SelectRoute/selectRoute';
import RouteSelected from '../../Pages/RouteSelected/routeSelected';
import UserProfile from '../../Pages/UserProfile/UserProfile';
import AuthApi from '../../Services/authApi';
import DatabaseApi from '../../Services/dbApi';
import SignUp from '../SignUp/SignUp';
//import PrivateRoute from '../ProfileItems/PrivateRoute';

import { connect } from 'react-redux';
import { setUserInfo} from '../../redux/actions/userActions';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faMapMarkerAlt, faHeart, faEnvelope, faBars, faTimes, faChevronCircleRight, faMapPin} 
  from '@fortawesome/free-solid-svg-icons';

library.add(faUserCircle, faMapMarkerAlt, faHeart, faEnvelope, faBars, faTimes, faChevronCircleRight, faMapPin);

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
      let userData = null;
      if (user) {
        userData = await DatabaseApi.getDocumentById('user', user.uid);
        this.props.setUser(userData);
        if(!userData){ 
          console.log('something strange happend with user');        }
      }              
      this.setState({user:userData, loading: false});
    });
  }

  logout = async () => {
    const error = await AuthApi.logout();
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
              <Route path="/select/:id" component={SelectRoute} />        
              <Route path="/route/:id/" component={RouteSelected} />                         
              <Route path="/private/user/:id/:page" component={UserProfile}/>        
            </Switch>                      
          </div>
        </Router>                
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => { dispatch(setUserInfo(user)); }
  };
};


export default (connect(null, mapDispatchToProps)(App));
