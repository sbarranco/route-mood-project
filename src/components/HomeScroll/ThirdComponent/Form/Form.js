import React, {Component} from 'react';

import './Form.css';

class ContactForm extends Component {    
  constructor (props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
    };
  }

  
  handleFormSubmit( event ) {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(this.state);
  }
  render() {
    return (
      <div className="form">        
        <div>
          <form action="/action_page.php">
            <label>First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            <label>Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
  
  
            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" />
  
  
            <label>Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;