import React, {Component} from 'react';
import './style.css';

import ScrollMood from '../FirstComponent/ScrollMood/ScrollMood';
import DropDownHome from '../../DropdownHome/DropdownHome';
import { Link } from 'react-router-dom';



class FirstComponent extends Component {
  render() {
    return (
      <div className="component first-component">
        <div className='container-1'>
          <h1>How do you feel today?</h1>        
          <div className='mood-select'>horizontal scrolling containers</div>
          <div style={{marginLeft: '600px', marginTop: '250px', position: 'absolute'}}>
            <DropDownHome           
              name="venue[mood_id]"
              items={[
                { value: 'Geek', id: 1 },
                { value: 'Like a Child', id: 2 },
                { value: 'Retro', id: 3 },
                { value: 'Mysterious', id: 4 },
                { value: 'Stressed', id: 5 },
              ]}
            />
          </div>          
          <button className="btn striped-shadow dark">
            <Link to={'/select'} style={{ textDecoration:'none'}}><span>Go!</span></Link>                  
          </button>                  
        </div>       
      </div>      
    );
  }
}

export default FirstComponent;