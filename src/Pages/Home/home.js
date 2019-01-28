import React, {Component} from 'react';

import PageScroller from './../../components/HomeScroll/pageScroller';
import FirstComponent from '../../components/HomeScroll/FirstComponent';
import SecondComponent from '../../components/HomeScroll/SecondComponent';
import ThirdComponent from '../../components/HomeScroll/ThirdComponent';
import '../../components/HomeScroll/style.css';
import './Home.scss';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {currentPage: 1};
    this._pageScroller = null;
  }
  
  goToPage = (eventKey) => {
    this._pageScroller.goToPage(eventKey);
  };
  
  pageOnChange = (number) => {
    this.setState({currentPage: number});
  };
  
  getPagesNumbers = () => {  
    const pageNumbers = [];  
    for (let i = 1; i <= 3; i++) {
      pageNumbers.push(
        <button key={i} eventKey={i - 1} onSelect={this.goToPage}>{i}</button>
      );
    }
  
    return [...pageNumbers];
  };


  render (){
    const pagesNumbers = this.getPagesNumbers();

    return(
      <div>
        <React.Fragment>
          <PageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange} pagesNumbers={pagesNumbers}>            
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

