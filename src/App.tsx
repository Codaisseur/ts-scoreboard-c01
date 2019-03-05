import React, { Component } from 'react';

import './App.css';
import logo from './logo.svg';
import Title from './components/Title';
import LightSwitch from './components/LightSwitch';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title content="React" />
          <LightSwitch />
          <LightSwitch />
          <LightSwitch />
        </header>
      </div>
    );
  }
}

export default App;
