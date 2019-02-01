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
     const {response } = await AuthApi.login(loginEmail, loginPassword);

     if(response === 'auth/wrong-password') {
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
         <h1 className="title-home">Inicia Sesión</h1>
         <form className="form" onSubmit={this.login}>
           <input type="email"    value={loginEmail} onChange={(e)=>{this.setState({loginEmail: e.target.value}); }} placeholder="Email"/>
           <input type="password" value={loginPassword} onChange={(e)=>{this.setState({loginPassword: e.target.value}); }} placeholder="Password"/>
           <input type="submit" value="Enviar" />           

         </form>            
         <p>¿No tienes cuenta? 
           <button className='btn-secondary'>
             <Link to="/signup">
             Regístrate
             </Link>
           </button></p>
         <p>{loginError}</p>
       </div>
     );
   }
}


export default withRouter(SignIn);