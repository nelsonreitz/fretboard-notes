import React from 'react';
import TuningButton from './TuningButton.js';
import './TuningSelect.css';

function TuningSelect({tunings, activeTuning, onTuningSelect}) {

  // Create buttons
  const buttons = [];
  for (let tuning of tunings) {
    buttons.push(
      <TuningButton
        key={tuning.abbr}
        tuningAbbr={tuning.abbr}
        tuningName={tuning.name}
        isActive={tuning.abbr === activeTuning}
        onTuningSelect={onTuningSelect}
      />
    );
  }

  return (
    <div className="TuningSelect">
      <div className="Container">
        <fieldset>
          <legend>Choose a tuning:</legend>
          {buttons}
        </fieldset>
      </div>
    </div>
  );
}

export default TuningSelect;
