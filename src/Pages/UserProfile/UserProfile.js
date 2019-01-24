import React, { Component } from 'react';
import './UserProfile.scss';

import DatabaseApi from '../../Services/dbApi';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserInfo } from '../../redux/actions/userActions';
import star from './images/star.png';
import edit from'./images/edit.png';
import settings from './images/settings.png';

class UserProfile extends Component {
  constructor(props){
    super(props);

    this.state = {
      name    : '',
      lastName     : '',
      id       : '',
      image    : 'https://farm6.staticflickr.com/5617/30845566816_a30784b5aa_o.png',
    };

    this.fileInputRef = React.createRef();
  }
  
  async componentDidMount(){
    const { id } = this.props.match.params;
    const userInfo = DatabaseApi.getDocumentById('user', id);    
    console.log(userInfo);
    this.setState({
      name: userInfo.name, 
      lastname: userInfo.lastname, 
      desc: userInfo.desc, 
      id: id, 
      // image: image, 
      loading: false});

  }

  render() {
    const { id } = this.props.match.params;
    
    const {name, lastName, desc, image, } = this.state;
 
    return (
      <div><h1>My Profile</h1>
        <div className="card-profile">
          <ul className="profile-links"> 
            <li className='li-profile favourit'>
              <Link to={`/private/user/${id}/favourites`}>
                <img src={star} alt="favourites"/>
              </Link></li> 
            <li className='li-profile edit'>
              <Link to={`/private/user/${id}/edit`} >
                <img src={edit} alt="edit"/>
              </Link>
            </li>
            <li className='li-profile settings'>
              <Link to="">
                <img src={settings} alt="settings"/>
              </Link>
            </li>
          </ul>
          <div className="container-profile">
            <div className="info-header">            
              <img className="image-profile" src={image} alt="user-pic"/>
              <h2>Silvia Barranco</h2>
              <p>sbarrancovico@gmail.com</p> 
              <p className="descr-profile">&ldquo;Me gustan los gatos, caminar sin rumbo definido y escuchar música&rdquo;</p>
            </div>                  
          </div>
        </div>
      </div>
    );
  }
}


const dispatchStateToProps = (dispatch) => {
  return {
    setUser: (userInfo) => { dispatch(setUserInfo(userInfo)); }
  };
};
  
export default withRouter(connect(null, dispatchStateToProps)(UserProfile));
