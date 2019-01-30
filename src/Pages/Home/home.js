import React, {Component} from 'react';

import PageScroller from './../../components/HomeScroll/pageScroller';
import FirstComponent from '../../components/HomeScroll/FirstComponent';
import SecondComponent from '../../components/HomeScroll/SecondComponent';
import ThirdComponent from '../../components/HomeScroll/ThirdComponent';
import '../../components/HomeScroll/style.scss';


class Home extends Component {
  render (){
    return(
      <div>
        <React.Fragment>
          <PageScroller >            
            <FirstComponent/>
            <SecondComponent/>
            <ThirdComponent />
          </PageScroller>             
        </React.Fragment>
      </div>
    );
  }
}

export default Home;

