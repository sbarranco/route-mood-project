import React, {Component} from 'react';

import './SecondComponent.css';

class SecondComponent extends Component {
  render() {
    return (
      <div className="component second-component container-2">
        <div id= "about" className="title-about"><h1 className="title-home">About</h1></div>
        <div className="content-box">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis urna augue, 
          mollis eu turpis imperdiet, blandit pellentesque turpis. Maecenas scelerisque 
          velit vel orci suscipit feugiat. Nulla in ullamcorper felis. Nam nec aliquam nunc. 
          Ut orci augue, laoreet eget nulla in, pellentesque hendrerit justo. Curabitur 
          accumsan tellus est, ac viverra lectus porta id. Nulla facilisi. Nunc cursus 
          consectetur aliquam. Duis bibendum hendrerit magna ac mollis. Nam ac bibendum sapien. 
          Fusce purus urna, porttitor eu est quis, posuere condimentum mi. Donec consequat 
          justo dolor. Mauris sit amet varius ligula. Aliquam fermentum blandit viverra.</p>
        </div>
      </div>
    );
  }
}

export default SecondComponent;