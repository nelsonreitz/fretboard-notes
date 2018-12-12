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
  constructor(props) {
    super(props);
    this.handleTuningSelect = this.handleTuningSelect.bind(this);
  }

  handleTuningSelect(e) {
    this.props.onTuningSelect(e.target.value);
  }

  render() {
    let buttons = [];

    // Create buttons
    for (let tuning of this.props.tunings) {
      buttons.push(
        <button value={tuning.abbr} key={tuning.abbr} onClick={this.handleTuningSelect}>{tuning.name}</button>
      );
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
      columns.push(
        <th className={className} key={fretNumber}>{fretNumber}</th>
      );
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
    let selectedTuning = this.props.selectedTuning;
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
        columns.push(
          <td className={className} key={fretNumber}>{fretNote}</td>
        );
      }

      // Build the strings bottom to tap to respect guitar tabs conventions
      rows.unshift(
        <tr className={className} key={i}>{columns}</tr>
      );
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
  constructor(props) {
    super(props);
    this.state = {
      // Default tuning
      selectedTuning: "e_std"
    }

    this.handleTuningSelect = this.handleTuningSelect.bind(this);
  }

  handleTuningSelect(selectedTuning) {
    this.setState({
      selectedTuning: selectedTuning
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Fretboard
          selectedTuning={this.state.selectedTuning}
          tunings={TUNINGS}
          stringNotes={STRINGNOTES}
        />
        <TuningSelect
          selectedTuning={this.state.selectedTuning}
          onTuningSelect={this.handleTuningSelect}
          tunings={TUNINGS}
        />
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
    name: "Eb Standard",
    abbr: "eb_std",
    notes: ["Eb", "Ab", "Db", "Gb", "Bb", "Eb"]
  },
  {
    name: "D Standard",
    abbr: "d_std",
    notes: ["D", "G", "C", "F", "A", "D"]
  },
  {
    name: "Drop D",
    abbr: "drop_d",
    notes: ["D", "A", "D", "G", "B", "E"]
  },
  {
    name: "C Standard",
    abbr: "c_std",
    notes: ["C", "F", "Bb", "Eb", "G", "C"]
  },
  {
    name: "Drop C",
    abbr: "drop_c",
    notes: ["C", "G", "C", "F", "A", "D"]
  },
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
