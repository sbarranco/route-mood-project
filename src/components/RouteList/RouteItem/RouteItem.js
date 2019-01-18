import React, {Component} from 'react';
import './RouteItem.scss';


class Button extends Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    );
  }
}


class CardHeader extends Component {
  render() {
    const { image, mood } = this.props;
    var style = { 
      backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} className="card-header">
        <h4 className="card-header--title">{mood}</h4>
      </header>
    );
  }
}


class CardBody extends Component {
  render() {
    return (
      <div className="card-body">
               
        <h2>{this.props.title}</h2>
        
        <p className="body-content">{this.props.text}</p>
        
        <Button />
      </div>
    );
  }
}


class RouteItem extends Component {
  render() {
    return (
      <article className="card">
        <CardHeader mood={this.props.details.mood} image={this.props.details.image}/>
        <CardBody title={this.props.details.title} text={this.props.details.text}/>
      </article>
    );
  }
}


export default RouteItem;
