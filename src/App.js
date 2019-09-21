import React, { useState } from 'react';

import tunings from './data/tunings.js';
import stringNotes from './data/stringNotes.js';

import Header from './Header.js';
import Fretboard from './Fretboard.js';
import TuningSelect from './TuningSelect.js';
import Footer from './Footer.js';

import './App.css';

function App() {
  const [activeTuning, setTuning] = useState("e_std");

  const handleTuningSelect = (activeTuning) => {
    setTuning(activeTuning);
  };

  return (
    <div className="App">
      <Header />
      <Fretboard
        tunings={tunings}
        stringNotes={stringNotes}
        activeTuning={activeTuning}
      />
      <TuningSelect
        tunings={tunings}
        onTuningSelect={handleTuningSelect}
        activeTuning={activeTuning}
      />
      <Footer />
    </div>
  );
}

export default App;
