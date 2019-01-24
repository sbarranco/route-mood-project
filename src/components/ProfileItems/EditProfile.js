import React, { Component } from 'react';
import DatabaseApi from '../../Services/dbApi';
import StorageApi from '../../Services/storageApi';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserInfo } from '../../redux/actions/userActions';


class UserInfo extends Component {
  constructor(props){
    super(props);

    this.state = {
      newName : '',
      newLastname : '',
      newImage : '',
      newdDesc : '',         
    };

    this.fileInputRef = React.createRef();
  }
  
    
 
  updateProfile = async (e) => {
    e.preventDefault();
    const { newName, newLastName, newImage, newDesc, uid } = this.state;
    const result = await DatabaseApi.updateDocument('user', {
      name: newName,
      lastName: newLastName,
      desc: newDesc,
      image: newImage
    }, uid);

    if(result){
      alert('document Updated');
      this.setState({newName : '', newLastname: '', newDesc  : '', newImage : ''});
      this.fileInputRef.value = '';
    }
  }

  createContent = async (e) => {
    e.preventDefault();
    const { newDesc } = this.state;
    const result = await DatabaseApi.addDocument('user', {
      desc: newDesc
    });

    if(result){
      alert('document Added');
    }
  }

  onFileSelected = (e) => {
    const file = e.target.files[0];
    StorageApi.uploadFile('images', 'user', file, (imageURL) => {
      this.setState({newImage: imageURL});
    });
  }

  onInputChange = (inputName, inputValue) => {
    const newState = {};
    newState[inputName] = inputValue;
    this.setState(newState);
    
  }
 
  render() {
    const {newName, newLastname, newDesc, newImage} = this.state;
 
    return (
      <div className="card-profile">
        <h2>Modify your info</h2>
        <input type="file" onChange={(e) => { this.onFileSelected(e); }} ref={(ref) => {this.fileInputRef = ref;}}/>
        {newImage && <img src={newImage} alt="User pic"/> }
        <br styles="clear:both" />
        
        <form className="user-form" onSubmit={this.updateContent}>
          <input type="text" value={newName} placeholder="New Name" onChange={(e) => { this.onInputChange('newName', e.target.value); }} /> 
          <input type="text" value={newLastname} placeholder="New Last Name" onChange={(e) => { this.onInputChange('newLastname', e.target.value); }} /> 
          <textarea type="text" value={newDesc} placeholder="New Description" onChange={(e) => { this.onInputChange('newDesc', e.target.value); }}/>
          <button type="button" onClick={this.updateProfile} id="submit" name="submit" className="btn btn-primary pull-right">Modificar</button>
        </form>
      </div>
    );
  }
}


const dispatchStateToProps = (dispatch) => {
  return {
    setUser: (userInfo) => { dispatch(setUserInfo(userInfo)); }
  };
};
  
export default withRouter(connect(null, dispatchStateToProps)(UserInfo));
