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

class Fretboard extends Component {
  render() {
    let table = [];

    for (let i = 0; i < 8; i++) {
      let row = [];

      for (let j = 0; j < 15; j++) {
        row.push(<td key={j}>{j}</td>);
      }

      table.push(<tr key={i}>{row}</tr>);
    }

    return (
      <div className="Fretboard">
        <table>
          <tbody>
            {table}
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
