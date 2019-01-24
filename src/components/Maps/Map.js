import React, {Component} from 'react';

import {withRouter} from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';

const myIcon = L.icon({
  iconUrl: 'https://image.flaticon.com/icons/png/512/1151/1151687.png',
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
  }

  componentDidMount () {   
    /*     navigator.geolocation.getCurrentPosition((actualPosition) => {
      this.setState({
        locationUser: {
          lat: actualPosition.coords.latitude,
          lng: actualPosition.coords.longitude,
        }
        
      });      
    });  */
  }
  setCoordinates = () => {
    const { points }  = this.props; 
      
    let coordinates = points.map((p => p.coordinates));
    console.log('coordinates: ', coordinates); 
    

  };

  render(){
       
    const positionUser = [this.state.locationUser.lat, this.state.locationUser.lng];   
 

    return(
      <div className='map-container'>
        <Map className='map' center={positionUser} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          />
          <Marker position={positionUser}
            icon={myIcon}>
            <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>  
    );
  }
}
  
export default withRouter(MapApp);
