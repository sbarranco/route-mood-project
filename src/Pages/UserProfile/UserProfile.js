import React, { Component } from 'react';
import './UserProfile.scss';

import DatabaseApi from '../../Services/dbApi';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserInfo } from '../../redux/actions/userActions';
import star from './images/star.png';
import edit from'./images/edit.png';
import user from './images/user.png';
import EditProfile from '../../components/ProfileItems/EditProfile';
import FavRoutes from '../../components/ProfileItems/FavRoutes';


class UserProfile extends Component {
  constructor(props){
    super(props);

    this.state = {
      userInfo: {},
      name    : '',
      lastName     : '',
      email   : '',
      desc: '',
      uid       : '',
      image    : '',
      displayPage: 'profile'
    };

    this.fileInputRef = React.createRef();
  }
  
  async componentDidMount(){
    const { id } = this.props.match.params;
    DatabaseApi.getRealtimeDocument('user', 'uid', id, (result) => {
      const {name, lastName, email, desc, uid, image} = result;
      this.setState({name, lastName, email, desc, uid});
      if (!image) {
        this.setState({image : 'https://farm6.staticflickr.com/5617/30845566816_a30784b5aa_o.png'});
      } else {
        this.setState ({image});
      }     
    });

    
    const userInfo = await DatabaseApi.getDocumentById('user', id);   
    if (!userInfo.image) {
      this.setState({image : 'https://farm6.staticflickr.com/5617/30845566816_a30784b5aa_o.png'});
    } else {
      this.setState ({image: userInfo.image});
    }     
    this.setState({
      userInfo: userInfo,
      name: userInfo.name, 
      lastName: userInfo.lastName,
      email: userInfo.email, 
      desc: userInfo.desc, 
      uid: id,      
      loading: false});
  }

  render() {
    const { id } = this.props.match.params;
    const {userInfo, name, lastName, email, desc, image, } = this.state;
 
    return (
      <div>
        <h1 className="title-home">My Profile</h1>

        <div className="card-profile">
          <ul className="profile-links">
            <li className='li-profile favourit'>
              <Link to={`/private/user/${id}/profile`}>
                <img src={user} alt="favourites"/>
              </Link></li>  
            <li className='li-profile favourit'>
              <Link to={`/private/user/${id}/favourites`}>
                <img src={star} alt="favourites"/>
              </Link></li> 
            <li className='li-profile edit'>
              <Link to={`/private/user/${id}/edit`} >
                <img src={edit} alt="edit"/>
              </Link>
            </li>
          </ul>
          
          {this.props.match.params.page === 'profile' && <div className="container-profile">
            <div className="info-header">            
              <img className="image-profile" src={image} alt="user-pic"/>
              <h2 className="name-profile">{name} {lastName}</h2>
              <p className="descr-profile">{email}</p> 
              <p className="descr-profile">&ldquo;{desc}&rdquo;</p>
            </div>                  
          </div>}           
          
          {this.props.match.params.page === 'edit' && <EditProfile userInfo={userInfo}/> }
          {this.props.match.params.page === 'favourites' && <FavRoutes userInfo={userInfo}/> }            

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
