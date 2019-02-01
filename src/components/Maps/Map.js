import React, {Component} from 'react';

import {withRouter} from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.scss';
import pin from './images/pin.png';
import pinBlack from './images/pinBlack.png';

const myIcon = L.icon({
  iconUrl: pin,
  iconSize: [42, 41],
  iconAnchor: [20, 41],
  popupAnchor: [0, -41],
});

const yourIcon = L.icon({
  iconUrl: pinBlack,
  iconSize: [42, 41],
  iconAnchor: [20, 41],
  popupAnchor: [0, -41],
});


 
class MapApp extends Component {
  state = {
    locationUser: {
      lat: '41.383117',
      lng: '2.164601',
    },

    zoom: 13,
    show: false,
  }

  componentDidMount () {   
    navigator.geolocation.getCurrentPosition((actualPosition) => {
      this.setState({
        locationUser: {
          lat: actualPosition.coords.latitude,
          lng: actualPosition.coords.longitude,
        }
        
      });      
    });  
  }


  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render(){
    const { points }  = this.props; 
    const positionUser = [this.state.locationUser.lat, this.state.locationUser.lng];   
 

    return(
      <div className='map-container'>        
        <Map className='map' center={positionUser} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          />
          
          <Marker position={positionUser}
            icon={yourIcon}>
            <Popup>
          Mi ubicación
            </Popup>
          </Marker>

          {points && points.map((p => {
            return (<Marker key={p.name} position={p.coordinates.split(',')}
              icon={myIcon}>

              <Popup className="pop-card" key={p.id} pointsName={p.name} pointsDesc={p.description}>
                <img className="pop-img" src={p.url} alt="place" />
                <div className="pop-main">
                  <div><strong>{p.name}</strong></div>
                  <div>{p.address}</div>
                  { /* <button className="pop-link" onClick={this.showModal}>Más info...</button> */  }        
                </div>                
              </Popup>
                         
            </Marker>
            );}))}
         
        </Map>        
      </div>  
    );
  }
}
  
export default withRouter(MapApp);