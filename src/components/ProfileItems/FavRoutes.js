import React, { Component } from 'react';
import DatabaseApi from '../../Services/dbApi';
import RouteItem from '../RouteItem/RouteItem';

class FavRoutes extends Component {
  constructor(props){
    super (props);

    this.state = {
      favourites: [],
    };
  }

  async componentDidMount () {
    const userId = this.props.match.params;
    const favouritesUser = DatabaseApi.getCollection(`/user/${userId}`);
    this.setState({favourites: favouritesUser});
  }  
  
  render() {
    const favourites = this.state; 

    return (
      <div className="fav-routes">
        <h1>My Favourite Routes</h1>
        { favourites > 0 ? favourites.map((m =><RouteItem route={m} key={m} />)) : <p>Todavía no tienes Favoritos</p>}
      </div>
      
    );
  }
}



export default FavRoutes;