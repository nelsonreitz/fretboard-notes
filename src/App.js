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
        <a href="http://nelsonreitz.ch" target="_blank" rel="noopener noreferrer">Nelson Reitz</a>
        <a href="http://github.com/nelsonreitz/fretboard" target="_blank" rel="noopener noreferrer">View the source on Github</a>
      </footer>
    );
  }
}

class FretboardHeader extends Component {
  render() {
    let thead = [];

    // Create columns
    for (let i  = 1; i < 13; i++) {
      thead.push(<th key={i}>{i}</th>);
    }

    return (
      <thead>
        <tr>
          <th className="Spacer"></th>
          <th className="Spacer"></th>
          {thead}
        </tr>
      </thead>
    );
  }
}

class Fretboard extends Component {
  render() {
    let tbody = [];

    // Create rows
    for (let i = 0; i < 7; i++) {
      let row = [];

      // Create columns
      for (let j = 0; j < 14; j++) {
        row.push(<td key={j}>{j}</td>);
      }

      tbody.push(<tr key={i}>{row}</tr>);
    }

    return (
      <div className="Fretboard">
        <table>
          <FretboardHeader />

          <tbody>
            {tbody}
          </tbody>
        </table>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Fretboard />
        <Footer />
      </div>
    );
  }
}

export default App;
