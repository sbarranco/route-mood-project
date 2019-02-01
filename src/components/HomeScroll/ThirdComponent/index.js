import React, {Component} from 'react';

import ContactForm from './Form/Form';

class ThirdComponent extends Component {
  render() {
    return (
      <div className="component third-component">
        <div id="contact"><h1 className="title-home contact-title">Contact us</h1></div>
        <ContactForm />
      </div>
    );
  }
}

export default ThirdComponent;