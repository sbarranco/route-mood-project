import React, {Component} from 'react';
import RouteDetail from '../../components/RouteDetail/RouteDetail';

class RouteSelected extends Component {

  render(){
    return(
      <div>
        <h1 className="title-home">Aqui está tu ruta</h1>
        <RouteDetail />        
      </div>

    );
  }
}

export default RouteSelected;