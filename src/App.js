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

class TuningSelect extends Component {
  render() {
    let buttons = [];

    for (let tuning of this.props.tunings) {
      buttons.push(<button value={tuning.abbr} key={tuning.abbr}>{tuning.name}</button>);
    }
    return (
       <div className="TuningSelect">
        {buttons}
       </div>
    );
  }
}

class FretboardHeader extends Component {
  render() {
    let columns = [
      <th className="Spacer" colSpan="2" key="spacer"></th>,
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
    let selectedTuning = this.props.tuning;
    let tunings = this.props.tunings;
    let stringNotes = this.props.stringNotes;

    // Find notes of selected tuning
    let tuning = tunings.find(tuning => tuning.abbr === selectedTuning);

    let rows = [];

    // Create strings
    for (let i = 0; i < STRINGS; i++) {
      let className = "String-" + i;
      let openNote = tuning.notes[i];
      let columns = [
        <td className="Open" key="open">{openNote}</td>,
        <td className="Spacer" key="spacer"></td>
      ];

      // Find notes of current string
      let currentString = stringNotes.find(string => string.openNote === openNote);

      // Create frets
      for (let j = 0; j < FRETS; j++) {
        let fretNumber = j + 1;
        let fretNote = currentString.fretNotes[j];
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
        <Fretboard tuning="e_std" tunings={TUNINGS} stringNotes={STRINGNOTES} />
        <TuningSelect tunings={TUNINGS} />
        <Footer />
      </div>
    );
  }
}

const TUNINGS = [
  {
    name: "E Standard",
    abbr: "e_std",
    notes: ["E", "A", "D", "G", "B", "E"]
  },
  {
    name: "D Standard",
    abbr: "d_std",
    notes: ["D", "G", "C", "F", "A", "D"]
  }
];

const STRINGNOTES = [
  {
    openNote: "Ab",
    fretNotes: ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"]
  },
  {
    openNote: "A",
    fretNotes: ["Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A"]
  },
  {
    openNote: "Bb",
    fretNotes: ["B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb"]
  },
  {
    openNote: "B",
    fretNotes: ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]
  },
  {
    openNote: "C",
    fretNotes: ["Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C"]
  },
  {
    openNote: "Db",
    fretNotes: ["D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db"]
  },
  {
    openNote: "D",
    fretNotes: ["Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D"]
  },
  {
    openNote: "Eb",
    fretNotes: ["E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb"]
  },
  {
    openNote: "E",
    fretNotes: ["F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E"]
  },
  {
    openNote: "F",
    fretNotes: ["Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F"]
  },
  {
    openNote: "Gb",
    fretNotes: ["G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb"]
  },
  {
    openNote: "G",
    fretNotes: ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G"]
  }
];

export default App;
