import React, { Component } from 'react';

class Form extends Component {
  render() {
    return(
      <div className="input-fields">
        <form>
          <Input type="text" name="user_email" placeholder="Email" checkmark="true" />
          <Input type="password" name="user_password" placeholder="Password" checkmark="true" />
          <Input type="checkbox" name="remember_user" label="Remember Me"  />
          <Button value="Sign In"/>
        </form>
      </div>
    );
  } 
}

function Input(props){
  if(props.checkmark == 'true' || props.border == 'true') {
    return (
      <div className="input">
        <input type={props.type} name={props.name} placeholder={props.placeholder} onChange={(e) => emailVal(e.target.value)} />
        <div className="input-checkmark">
          <i className="fa fa-check"></i>
        </div>
      </div>
    );
  } else {
    return (
      <div className="input no-border input-inline">
        <input type={props.type} name={props.name} placeholder={props.placeholder} />
        <label htmlFor={props.name}>{props.label}</label>
      </div>
    );
  }
}
  
function emailVal(value){
  if(value.includes('@') == true){
    document.querySelector('.input-checkmark').style.color = '#33df11';
  } else {
    document.querySelector('.input-checkmark').style.color = 'inherit';
  }
}
  
  
/* Input Fields End */
  
/* Button Start */
function Button(props) {
  return (
    <div className="button">
      <button type="button">{props.value}</button>
    </div>
  );
}
  
/* Button End */

export default Form;