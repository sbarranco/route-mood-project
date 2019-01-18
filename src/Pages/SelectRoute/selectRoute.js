import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import RouteList from '../../components/RouteList/RouteList';


class SelectRoute extends Component {
  render(){
    return(
      <div>
        <h1>Hello</h1>
        <RouteList />
        <Link to= {'/route/:id'}> 
          <button>Go to the Route</button>          
        </Link> 
      </div>

    );
  }
}

export default SelectRoute;