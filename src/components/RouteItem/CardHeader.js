import React, {Component} from 'react';
import './RouteItem.scss';

class CardHeader extends Component {
  render() {
    const { route, image, isFavourite, saveFavourite } = this.props;
      
    const style = { 
      backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} className="card-header">
        <div className={`favourite-button ${isFavourite && 'favourite-button-selected' }`} onClick={()=> {saveFavourite(route.id);}}></div>
      </header>
    );
  }
}

export default CardHeader;