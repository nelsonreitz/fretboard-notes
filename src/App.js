import React, { Component } from 'react';

import tunings from './data/tunings.js';
import stringNotes from './data/stringNotes.js';

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
      activeTuning: "e_std"
    }

    this.handleTuningSelect = this.handleTuningSelect.bind(this);
  }

  handleTuningSelect(activeTuning) {
    this.setState({
      activeTuning: activeTuning
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Fretboard
          tunings={tunings}
          stringNotes={stringNotes}
          activeTuning={this.state.activeTuning}
        />
        <TuningSelect
          tunings={tunings}
          onTuningSelect={this.handleTuningSelect}
          activeTuning={this.state.activeTuning}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
