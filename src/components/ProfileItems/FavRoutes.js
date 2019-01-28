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
      DatabaseApi.getDocumentById('routes', f))); //😂
    this.setState({routesFav});
    console.log(routesFav, '😂😂😂');
  }

  render() {

    return (
      <div className="fav-routes">
        <h1>My Favourite Routes</h1>
        {this.state.routesFav && this.state.routesFav.map((m => <RouteItem route={m} key={m} />))}      
        {!this.state.routesFav && <h2 className="no-favs">Todavía no tienes Favoritos</h2>}
      </div>
      
    );
  }
}



export default FavRoutes;