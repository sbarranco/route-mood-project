import React, {Component} from 'react';
import './FirstComponent.scss';

import DatabaseApi from '../../../Services/dbApi';
import { Link } from 'react-router-dom';



class FirstComponent extends Component {
  constructor (props) {
    super (props);

    this.state= {
      moods: []
    };
  }

  async componentDidMount() {
    const moods =  await DatabaseApi.getCollection('moods'); 
    this.setState({moods});  
  }
 
  render() {
    const {moods} = this.state;
    
    return (
      <div className="component first-component">
        <div className='container-1'>
          <h1 className="title-home">¿Cómo te sientes hoy?</h1>   
          <div className="content-mood">
            { moods && moods.map(m => 
              <div className={`block ${m.name}`} key={m.id} moodname={m.name}>
                <Link to={`/select/${m.id}`}>{m.name}</Link>
              </div>)}
          </div> 
        </div>       
      </div>      
    );
  }
}

export default FirstComponent;