import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DatabaseApi from '../../Services/dbApi';
import StorageApi from '../../Services/storageApi';

class UserProfile extends Component {
  constructor(props){
    super(props);

    this.state = {
      title    : '',
      desc     : '',
      id       : '',
      image    : '',
      newTitle : '',
      newDesc  : '',
      newImage : ''
    };

    this.fileInputRef = React.createRef();
  }

  async componentDidMount(){
    DatabaseApi.getRealtimeDocument('content', 'page', 'home', (result) => {
      const {title, desc, id, image} = result;
      this.setState({title, desc, id, image});
    });
  }

  updateContent = async (e) => {
    e.preventDefault();
    const { newTitle, newDesc, newImage, id } = this.state;

    const result = await DatabaseApi.updateDocument('content', {
      title: newTitle,
      desc: newDesc,
      image: newImage
    }, id);

    if(result){
      alert('document Updated');
      this.setState({newTitle : '', newDesc  : '', newImage : ''});
      this.fileInputRef.value = '';
    }
  }

  createContent = async (e) => {
    e.preventDefault();
    const { newTitle, newDesc } = this.state;
    const result = await DatabaseApi.addDocument('content', {
      title: newTitle,
      desc: newDesc
    });

    if(result){
      alert('document Added');
    }
  }

  onFileSelected = (e) => {
    const file = e.target.files[0];
    StorageApi.uploadFile('images',file, (imageURL) => {
      this.setState({newImage: imageURL});
    });
  }

  onInputChange = (inputName, inputValue) => {
    const newState = {};
    newState[inputName] = inputValue;
    this.setState(newState);
  }

  render() {
    const {title, desc, image, newTitle, newDesc, newImage} = this.state;
    const { user, match } = this.props;
    console.log('​Home -> render -> user', user, match);
    
    return (
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        {image && <img src={image} />}
        <hr />
        <form className="app-form" onSubmit={this.updateContent}>
          <input type="text" value={newTitle} placeholder="Title" onChange={(e) => { this.onInputChange('newTitle', e.target.value); }}/>
          <input type="text" value={newDesc} placeholder="Desc" onChange={(e) => { this.onInputChange('newDesc', e.target.value); }}/>
          <input type="file" onChange={(e) => { this.onFileSelected(e); }} ref={(ref) => {this.fileInputRef = ref;}}/>
          {newImage && <img src={newImage} />}
          <input type="submit" value="Save" />
        </form>
        <div>Hola: {user.name}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  };
};

export default withRouter(connect(mapStateToProps)(UserProfile));