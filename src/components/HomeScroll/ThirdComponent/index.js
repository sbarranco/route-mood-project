import React, {Component} from 'react';

import ContactForm from './Form/Form';

class ThirdComponent extends Component {
  render() {
    return (
      <div className="component third-component">
        <h1>Contact us</h1>
        <ContactForm />
      </div>
    );
  }
}

export default ThirdComponent;