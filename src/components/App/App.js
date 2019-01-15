import React, { Component } from 'react';
import Routes from './../../Routes';
import Header from './../Header/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />  
      </div>
    );
  }
}

export default App;
