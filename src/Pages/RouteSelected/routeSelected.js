import React, {Component} from 'react';
import RouteDetail from '../../components/RouteDetail/RouteDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class RouteSelected extends Component {

  render(){
    return(
      <div>
        <button className="arrow-left" onClick={this.props.history.goBack}>
          <FontAwesomeIcon  icon='arrow-left' size="lg" color='#974949'/>
      Atrás
        </button>
        <h1 className="title-home">Aqui está tu ruta</h1>
        <RouteDetail />        
      </div>

    );
  }
}

export default RouteSelected;