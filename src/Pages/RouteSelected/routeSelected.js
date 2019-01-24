import React, {Component} from 'react';
import RouteDetail from '../../components/RouteDetail/RouteDetail';
import MapApp from '../../components/Maps/Map';


class RouteSelected extends Component {

  render(){
    return(
      <div>
        <h1>Here is your RouteMood</h1>
        <RouteDetail />        
      </div>

    );
  }
}

export default RouteSelected;