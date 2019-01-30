import React, { Component } from 'react';
import DatabaseApi from '../../Services/dbApi';
import StorageApi from '../../Services/storageApi';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserInfo } from '../../redux/actions/userActions';


class EditProfile extends Component {
  constructor(props){
    super(props);

    this.state = {
      newName : '',
      newLastname : '',
      newImage : '',
      newdDesc : '',
      userId: '',         
    };

    this.fileInputRef = React.createRef();
  }
      
 
  updateProfile = async (e) => {
    e.preventDefault();
    const { userInfo } = this.props;
    const userId = userInfo.uid;  

    const { newName, newLastname, newImage, newDesc} = this.state;
    const result = await DatabaseApi.updateDocument('user', {
      name: newName,
      lastName: newLastname,
      desc: newDesc,
      image: newImage
    }, userId);

    if(result){
      alert('document Updated');
      this.setState({newName : '', newLastname: '', newDesc  : '', newImage : ''});
      this.fileInputRef.value = '';
      this.props.setUser(userInfo);
    }
  }


  onFileSelected = (e) => {
    const file = e.target.files[0];
    StorageApi.uploadFile('userProfile', file, (imageURL) => {
      this.setState({newImage: imageURL});
    });
  }

  onInputChange = (inputName, inputValue) => {
    const newState = {};
    newState[inputName] = inputValue;
    this.setState(newState);
    
  }
 
  render() {
    const {newName, newLastname, newDesc, newImage, userId} = this.state;
    console.log(userId);

    return (
      <div className="card-profile">
        <h1>Modifica tu info</h1>       
        <form className="user-form" onSubmit={this.updateProfile}>
          <input type="file" className="custom-file-input" onChange={(e) => { this.onFileSelected(e); }} ref={(ref) => {this.fileInputRef = ref;}}/>
          {newImage && <img className="image-profile" src={newImage} alt="User pic"/>}
          <br styles="clear:both" />
          <input type="text" value={newName} placeholder="Nombre" onChange={(e) => { this.onInputChange('newName', e.target.value); }} /> 
          <input type="text" value={newLastname} placeholder="Apellido" onChange={(e) => { this.onInputChange('newLastname', e.target.value); }} /> 
          <textarea type="text" value={newDesc} placeholder="Descripción" onChange={(e) => { this.onInputChange('newDesc', e.target.value); }}/>
          <button type="button" onClick={this.updateProfile} id="submit" name="submit" className="btn-submit">Modificar</button>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => { dispatch(setUserInfo(user)); }
  };
};

  
export default withRouter(connect(null, mapDispatchToProps)(EditProfile));
