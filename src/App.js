import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1 className="Sitetitle">Fretboard Chart</h1>
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Header />
    );
  }
}

export default App;
