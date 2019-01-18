import React, {Component} from 'react';

class Intro extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="intro">
        <ProfileImage img= 'https://cdn1.iconfinder.com/data/icons/instagram-ui-flat/48/Instagram_UI-18-512.png' />
        <IntroGreeting />
      </div>
    );
  }
}
  
/* Profile Image Sub Component */  
function ProfileImage(props) {
  return(
    <div className="profile-image">
      <img src={props.img} />
    </div>
  );
}
  
/* Intro Greeting Sub Component */
  
function IntroGreeting() {
  return(
    <div className="intro-greeting">
      <h1 className="greeting-heading"> Welcome back! </h1>
      <h3 className="greeting-instruction"> Sign in to your account</h3>
    </div>
  );
}

export default Intro;
  