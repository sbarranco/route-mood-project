import React, {Component} from 'react';
import './RouteItem.scss';

class CardHeader extends Component {
  render() {
    const { user, route, image, isFavourite, saveFavourite, showModal} = this.props;
      
    const style = { 
      backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} className="card-header">
        <div 
          className={`favourite-button ${isFavourite && 'favourite-button-selected' }`} 
          onClick={()=> {saveFavourite(route.id); !user && showModal();}}>
        </div>
      </header>
    );
  }
}

export default CardHeader;