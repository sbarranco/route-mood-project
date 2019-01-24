import React, {Component} from 'react';
import './RouteItem.scss';
import CardBody from './CardBody';
import CardHeader from './CardHeader';

import { connect } from 'react-redux';
import { setUserInfo } from '../../redux/actions/userActions';
import {withRouter} from 'react-router-dom';
import DatabaseApi from '../../Services/dbApi';

class RouteItem extends Component {
  constructor (props){
    super(props);
    this.state = {
      isFavourite: false
    };
  }
  /* 
  componentDidMount(){    
    
    const {route} = this.props;
    const routeId = route.id;
    if(this.isFavourite(routeId)){  
      this.setState({ isFavourite: true });  
    }
  }

  saveFavourite = (id)=>{
    const favouriteRoute = DatabaseApi.createDocumentWithId(`/user/${userId}/favourites/${id}`);
    
    if(this.isFavourite(id) ){
      favouriteRoute.splice( favouriteRoute.indexOf(id), 1);
      this.setState({ isFavourite: false});
    } else{
      favouriteRoute.push(id);
      this.setState({ isFavourite: true});
    }
    DatabaseApi.updateDocument (`/user/${userId}/favourites/${id}`);
  }

  isFavourite = (id)=>{
    const { userId } = this.props.match.params;
    const routeIndex = DatabaseApi.getCollection(`/user/${userId}/favourites`);
    return routeIndex >= 0;
  }
 */
  render() {
    const {route} = this.props;
    const { isFavourite } = this.state;    

    return (
      <article className="card">
        <CardHeader 
          route={route} 
          isFavourite={isFavourite} 
          saveFavourite={this.saveFavourite} 
          title={route.name} 
          image={route.image}/>
        <CardBody 
          route={route} 
          title={route.name} 
          text={route.description} 
          time={route.time}/>
      </article>
    );
  }
}

const dispatchStateToProps = (dispatch) => {
  return {
    setUser: (userInfo) => { dispatch(setUserInfo(userInfo)); }
  };
};
  
export default withRouter(connect(null, dispatchStateToProps)(RouteItem));
