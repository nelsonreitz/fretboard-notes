import React, { Component } from 'react';
import './App.css';

const STRINGS = 6;
const FRETS = 12;

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

    // Create fret numbers
    for (let i  = 0; i < FRETS; i++) {
      let fretNumber = i + 1;
      let className = "Fret-" + fretNumber;
      columns.push(<th className={className} key={fretNumber}>{fretNumber}</th>);
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
    for (let i = 0; i < STRINGS + 1; i++) {
      let className = "String-" + i;
      let columns = [
        <td className="Open" key="open">{i}</td>,
        <td className="Spacer" key="spacer"></td>
      ];

      // Create frets
      for (let j = 0; j < FRETS; j++) {
        let fretNumber = j + 1;
        let fretNote = TUNINGS[0][i][j];
        let className = "Fret-" + fretNumber;
        columns.push(<td className={className} key={fretNumber}>{fretNote}</td>);
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

const TUNINGS = [
  {
    name: "E Standard",
    abbr: "e_std",
    "0": ["F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E"],
    "1": ["F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E"],
    "2": ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"],
    "3": ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G"],
    "4": ["Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D"],
    "5": ["Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A"],
    "6": ["F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E"],
  }
];

export default App;
