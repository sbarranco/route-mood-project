import React, {Component} from 'react';
import './RouteDetail.scss';


class PointDetail extends Component {
    
  async componentDidMount() {
    const id  = this.props.match.params;
    console.log(id);      
    /*     const routeItems = await DatabaseApi.getDocumentById('routes', id);      
    const points = await DatabaseApi.getCollection(`/routes/${id}/points`);  
    this.setState({ points, routeItems}); */
  }    
  render(){
      
    return(
      <div className='card-container-det'>
      </div>  
    );
  }
}
    
export default PointDetail;