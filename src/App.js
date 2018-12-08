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
    let columns = [
      <th className="Spacer" key="spacer1"></th>,
      <th className="Spacer" key="spacer2"></th>
    ];

    // Create columns
    for (let i  = 1; i < 13; i++) {
      let className = "Fret-" + i;
      columns.push(<th className={className} key={i}>{i}</th>);
    }

    return (
      <thead>
        <tr className="Fretnumbers">
          {columns}
        </tr>
      </thead>
    );
  }
}

class Fretboard extends Component {
  render() {
    let rows = [];

    // Create strings
    for (let i = 0; i < 7; i++) {
      let className = "String-" + i;
      let columns = [
        <td className="Open" key="open">E</td>,
        <td className="Spacer" key="spacer"></td>
      ];

      // Create frets
      for (let j = 1; j < 13; j++) {
        let className = "Fret-" + j;
        columns.push(<td className={className} key={j}>{j}</td>);
      }

      rows.push(<tr className={className} key={i}>{columns}</tr>);
    }

    return (
      <div className="Fretboard">
        <table>
          <FretboardHeader />

          <tbody>
            {rows}
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
