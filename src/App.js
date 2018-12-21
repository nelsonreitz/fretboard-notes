import React, { Component } from 'react';

import Header from './Header.js';
import Fretboard from './Fretboard.js';
import TuningSelect from './TuningSelect.js';
import Footer from './Footer.js';

import './App.css';

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