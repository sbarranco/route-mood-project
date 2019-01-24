import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
import SecondComponent from '../HomeScroll/SecondComponent';
import EditProfile from '../ProfileItems/EditProfile';
import FavRoutes from '../ProfileItems/FavRoutes';
//import PrivateRoute from '../PersonalData/PrivateRoute';

import { library } from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faMapMarkerAlt, faHeart, faEnvelope, faBars, faTimes, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';

library.add(faUserCircle, faMapMarkerAlt, faHeart, faEnvelope, faBars, faTimes, faChevronCircleRight);

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
          console.log('something strange happend with user');        }
      }            
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
              <Route path="/about" component={SecondComponent} />
              <Route path="/select/:id" component={SelectRoute} />        
              <Route path="/route/:id" component={RouteSelected} />
              <Route path="/private/user/:id" component={UserProfile} />
              <Route path="/private/user/:id/edit" component={EditProfile} />
              <Route path="/private/user/:id/favourites" component={FavRoutes} />
              
              {/* <PrivateRoute path="/private/user/:id" componentUser={UserProfile} />*/ }
              <Route from="/" to="/home" />          
            </Switch>                      
          </div>
        </Router>                
      </div>
    );
  }
}

export default App;