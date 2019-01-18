import React, { Component } from 'react';
import AuthApi from '../../Services/authApi';
import { withRouter } from 'react-router';

import { Link } from 'react-router-dom';

class SignIn extends Component {
  constructor(props) {
    super (props);

    this.state = {
      action: 'login',
      loginEmail: '',
      loginPassword: '',
      loginError: ''
    };    
  }

   login = async (e) => {
     e.preventDefault();
     this.setState({loginError: ''});

     const { loginEmail, loginPassword } = this.state;
     const result = await AuthApi.login(loginEmail, loginPassword);
     // eslint-disable-next-line no-console
     console.log('​Signup -> login -> result', result);

     if(result === 'auth/wrong-password') {
       this.setState({loginError: 'Invalid Username or Password'});
     } else {     
       this.props.history.push('/home');
     }
   }

   render() {
     const {
       loginEmail,
       loginPassword,
       loginError
     } = this.state;

     return (
       <div>
         <h1>Sign In</h1>
         <form className="form" onSubmit={this.login}>
           <input type="email"    value={loginEmail} onChange={(e)=>{this.setState({loginEmail: e.target.value}); }} placeholder="Email"/>
           <input type="password" value={loginPassword} onChange={(e)=>{this.setState({loginPassword: e.target.value}); }} placeholder="Password"/>
           <input type="submit" value="Sign In" />
         </form>            
         <p>Do not have an account yet? 
           <button className='btn-secondary'>
             <Link to="/signup">
        Create account
             </Link>
           </button></p>
         <p>{loginError}</p>
       </div>
     );
   }
}

export default withRouter(SignIn);