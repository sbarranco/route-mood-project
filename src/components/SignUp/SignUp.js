import React, { Component } from 'react';
import DatabaseApi from '../../Services/dbApi';
import AuthApi from '../../Services/authApi';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
  constructor (props) {
    super (props);

    this.state = {
      registerEmail: '',
      registerPassword: '',
      registerName: '',
      registerLastname: '',
      registerError: '',
    };
  }
  async componentDidMount(){
    AuthApi.registerAuthObserver((user) => {
      if(!user) return; 

      const { uid } = user;
      const { 
        registerEmail,
        registerName,
        registerLastname,
      } = this.state;

      
      const newUser = {
        uid,
        email: registerEmail,
        name: registerName,
        lastName: registerLastname,
      };
  
      DatabaseApi.createDocumentWithId('user', newUser, uid);
    }
    );
  }

  createAccount = async (e) => {
    e.preventDefault();
    this.setState({registerError: ''});

    const { registerEmail, registerPassword } = this.state;
    const result = await AuthApi.signUp(registerEmail, registerPassword);

    if(result === 'auth/weak-password') {
      this.setState({registerError: 'La contraseña debe tener al menos 6 carácteres'});

    } else if(result === 'auth/email-already-in-use'){
      this.setState({registerError: 'El usuario ya existe'});
    } else {
      this.props.history.push('/home');
    }
  }

  render() {
    const {      
      registerEmail,
      registerPassword,
      registerName,
      registerLastname,
      registerError,
    } = this.state;

    return (      
      <div>
        <h1 className="title-home">Regístrate</h1>
        <form className="form" onSubmit={this.createAccount}>
          <input type="email"    value={registerEmail} onChange={(e)=>{this.setState({registerEmail: e.target.value}); }} placeholder="Email"/>
          <input type="password" value={registerPassword} onChange={(e)=>{this.setState({registerPassword: e.target.value}); }} placeholder="Password"/>
          <input type="text"     value={registerName} onChange={(e)=>{this.setState({registerName: e.target.value}); }} placeholder="Name"/>
          <input type="text"     value={registerLastname} onChange={(e)=>{this.setState({registerLastname: e.target.value}); }} placeholder="Lastname"/>
          <input type="submit" value="Enviar" />
        </form>            
        <p>¿Ya tienes cuenta? 
          <button className='btn-secondary'>
            <Link to="/login">
        Login
            </Link>
          </button></p>
        <p>{registerError}</p>
      </div>
    );
  }

}