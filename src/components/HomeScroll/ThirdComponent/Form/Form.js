import React, {Component} from 'react';
import DatabaseApi from '../../../../Services/dbApi';

import './Form.css';

class ContactForm extends Component {    
  constructor (props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      returnMessage: '',
    };
  }

  sendContact = (e) => {
    e.preventDefault();
    const { fname, lname, email, message } = this.state;    
    const sent = DatabaseApi.addDocument('contacts', { fname, lname, email, message});
    if (sent) {
      this.setState({
        fname: '',
        lname: '',
        email: '',
        message: '',
        returnMessage: 'Mensaje enviado. ¡Muchas gracias!'});
    }    
  }
  
  render() {
    const { fname, lname, email, message, returnMessage } = this.state;

    return (
      <div className="form">        
        <div>
          <form onSubmit={this.sendContact}>
            <label>Nombre</label>
            <input type="text" id="fname" name="firstname" value={fname} onChange={(e) => this.setState({fname:e.target.value})} placeholder="Nombre..." />
            <label>Apellido</label>
            <input type="text" id="lname" name="lastname" value={lname} onChange={(e) => this.setState({lname:e.target.value})} placeholder="Apellido..." />
            <label>Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => this.setState({email:e.target.value})} placeholder="Email" /> 
            <label>Mensaje</label>
            <textarea id="subject" name="subject" value={message} onChange={(e) => this.setState({message:e.target.value})} placeholder="Escríbenos algo..."></textarea>
            <input type="submit" value="Submit"/>
            <p>{returnMessage}</p>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;