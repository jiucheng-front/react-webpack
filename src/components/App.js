import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';

import Toogle from "./Toogle";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/entry.js</code> and save to reload.
        </p>
        <h3>开关小组件</h3>
        <Toogle />
      </div>
    );
  }
}

export default App;
