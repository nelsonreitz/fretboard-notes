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

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        2018
        <a href="http://nelsonreitz.ch" target="_blank" rel="noopener">Nelson Reitz</a>
        <a href="http://github.com/nelsonreitz/fretboard" target="_blank" rel="noopener">View the source on Github</a>
      </footer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
