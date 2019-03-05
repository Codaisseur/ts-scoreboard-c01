import React, { Component } from 'react';

import './App.css';
import Scoreboard from './components/Scoreboard';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Scoreboard />
        </header>
      </div>
    );
  }
}

export default App;
