import React, { Component } from 'react';
import DatabaseApi from '../../Services/dbApi';
import RouteItem from '../RouteItem/RouteItem';

class FavRoutes extends Component {
  constructor (props) {
    super(props);

    this.state = {
      routesFav: [],
    };
  }

  async componentDidMount () {
    const {userInfo} = this.props;
    const userFavs = userInfo.favRoutes;
    const routesFav = await Promise.all(userFavs && userFavs.map(f => 
      DatabaseApi.getDocumentById('routes', f))); 
    this.setState({routesFav});
    
  }

  render() {

    return (
      <div className="fav-routes">
        <h2>My Favourite Routes</h2>
        {this.state.routesFav.length === 0 && <p className="no-favs">Todavía no tienes Favoritos</p>}
        {this.state.routesFav && this.state.routesFav.map((m => <RouteItem route={m} key={m} />))}      
        
      </div>
      
    );
  }
}



export default FavRoutes;