import React, {Component} from 'react';
import './SecondComponent.scss';

class SecondComponent extends Component {
  render() {
    return (
      <div className="component second-component container-2">
        <div id= "about" ><h1 className="title-about">About</h1></div>
        <div className="content-box">
          <p>Caminar es una buena manera de despejar la mente. A través de los paseos nos brindamos 
          la posibilidad de relativizar nuestros problemas y conectar con nuestro yo más profundo, 
          ese al que en la vorágine que nos envuelve en el día a día no prestamos atención. 
          Descubrir la ciudad y descubrirnos a nosotros mismos...eso es <strong>RouteMood</strong></p>
        </div>
      </div>
    );
  }
}

export default SecondComponent;