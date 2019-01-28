import React, {Component} from 'react';

import RouteItem from '../../components/RouteItem/RouteItem';
import {withRouter} from 'react-router-dom';
import DatabaseApi from '../../Services/dbApi';

class SelectRoute extends Component {
  constructor (props) {
    super (props);

    this.state= {
      route: [],
    };
  }

  async componentDidMount() {   
    const { id } = this.props.match.params;
    const route = await DatabaseApi.getDocuments('routes', 'moodId', id );      
    this.setState({ route });    
  }

  render(){
    const { route }  = this.state;
           
    return(
      <div className="route-list">
        <h1 className="title-home">Estas rutas te pueden interesar...</h1>       
        <div className="app-card-list" id="app-card-list">
          {route && route.map((m =><RouteItem route={m} key={m} />))} 
        </div>
      </div>
    );
  }
}

export default withRouter(SelectRoute);