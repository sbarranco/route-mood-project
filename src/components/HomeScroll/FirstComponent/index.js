import React, {Component} from 'react';
import './style.css';

import DatabaseApi from '../../../Services/dbApi';

//import DropDownHome from '../../DropdownHome/DropdownHome';
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
    console.log(moods);
  }
 

  render() {
    const {moods} = this.state;
   
    return (
      <div className="component first-component">
        <div className='container-1'>
          <h1>¿Cómo te sientes hoy?</h1>   
               
          <div style={{marginLeft: '600px', marginTop: '250px', position: 'absolute'}}>
            {moods.map(m => <Link to={`/select/${m.id}`} key={m.id}>Ir a Routes on mood {m.name} </Link>)}
          </div>     
          <button className="btn striped-shadow dark">
            <Link to={'/select'} style={{ textDecoration:'none'}}><span>¡Vamos!</span></Link>                  
          </button>                  
        </div>       
      </div>      
    );
  }
}

export default FirstComponent;