import React, {Component} from 'react';
import {Link} from 'react-dom';


class SelectMood extends Component {
  render(){
    return(
      <div>
        <h1>PLEASE, SELECT YOUR MOOD, HOW DO YOU FEEL TODAY?</h1>
        <Link to= {'/route/:id'}> 
          <button>Go to the Route</button>          
        </Link> 
      </div>

    );
  }
}

export default SelectMood;