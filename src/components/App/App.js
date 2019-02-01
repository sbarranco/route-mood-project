import React, { Component } from 'react';
import './App.scss';

import Home from '../../Pages/Home/home';
import Header from '../Header/header';
import Footer from '../Footer/Footer';
import Login from '../../Pages/Login/login';
import SelectRoute from '../../Pages/SelectRoute/selectRoute';
import RouteSelected from '../../Pages/RouteSelected/routeSelected';
import UserProfile from '../../Pages/UserProfile/UserProfile';
import AuthApi from '../../Services/authApi';
import DatabaseApi from '../../Services/dbApi';
import SignUp from '../SignUp/SignUp';
//import PrivateRoute from '../ProfileItems/PrivateRoute';
import Loading from '../Loading/Loading';

import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserInfo} from '../../redux/actions/userActions';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faMapMarkerAlt, faHeart, faEnvelope, faBars, faTimes, faChevronCircleRight, faMapPin, faHome, faArrowLeft} 
  from '@fortawesome/free-solid-svg-icons';

library.add(faUserCircle, faMapMarkerAlt, faHeart, faEnvelope, faBars, faTimes, faChevronCircleRight, faMapPin, faHome, faArrowLeft);

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
      return <Redirect to='/home' />;
    } 
  }

  render() {
    const { user, loading } = this.state;
    if(loading) return <Loading />;

    return (
      <div className="App">
        <Router>
          <div>
            <Header user={user} logout={this.logout}/>            
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/select/:id" component={SelectRoute} />        
              <Route path="/route/:id/" component={RouteSelected} />                         
              <Route path="/private/user/:id/:page" component={UserProfile} componentUser={UserProfile} user={user}/> 
              <Redirect from="/" to="/home" />       
            </Switch>
            <Footer />                      
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
