import React, {Component} from 'react';

import DatabaseApi from './../../Services/dbApi';
//import StorageApi from '../services/storageApi';

import MultiGroup from 'multiscroll-reactjs';

class Home extends Component {
  constructor (props) {
    super (props);    
  }

  componentDidMount(){
    DatabaseApi.getContent();
  } 


  render (){
    return(
      <div>
        <MultiGroup >
          <multiScroll>
            <leftSide>
              Page1: Content Left here
            </leftSide>
            <rightSide>
              page1: Content Right here
            </rightSide>
          </multiScroll>
          <multiScroll>
            <leftSide>
              Page2: Content Left here
            </leftSide>
            <rightSide>
              Page2: Content Right here
            </rightSide>
          </multiScroll>
        </MultiGroup>

      </div>
    );
  }
}

export default Home;

