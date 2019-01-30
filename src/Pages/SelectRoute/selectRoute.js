import React, {Component} from 'react';
import RouteItem from '../../components/RouteItem/RouteItem';
import {withRouter} from 'react-router-dom';
import DatabaseApi from '../../Services/dbApi';
import '../../components/RouteItem/RouteItem.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SelectRoute extends Component {
  constructor (props) {
    super (props);

    this.state= {
      route: [],
      random: {},
    };
  }

  async componentDidMount() {   
    const { id } = this.props.match.params;
    const route = await DatabaseApi.getDocuments('routes', 'moodId', id );
    const randomRoutes = await DatabaseApi.getCollection('routes');
  
    if (id === 'cL4YWyBg6RHdKXsqEaRH'){
      const random = randomRoutes[Math.floor(Math.random() * randomRoutes.length)];      
      this.setState({ random: random, route: null });      
    } else {
      this.setState({ route, random: null });
    }
     
  }

  render(){
    const { route, random }  = this.state;
               
    return(
      <div className="route-list">
        <button className="arrow-left" onClick={this.props.history.goBack}>
          <FontAwesomeIcon  icon='arrow-left' size="lg" color='#974949'/>
          Atrás
        </button>
        <h1 className="title-home">Te puede interesar...</h1>       
        <div className="app-card-list" id="app-card-list">        
          {random && <RouteItem route={random}/>}
          {route && route.map((m =><RouteItem route={m} key={m} />)) }  
            
        </div>
      </div>
    );
  }
}

export default withRouter(SelectRoute);