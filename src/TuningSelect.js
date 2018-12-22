import React, { Component } from 'react';
import TuningButton from './TuningButton.js';
import './TuningSelect.css';

class TuningSelect extends Component {
  render() {
   const buttons = [];

    // Create buttons
    for (let tuning of this.props.tunings) {
      buttons.push(
        <TuningButton
          key={tuning.abbr}
          tuningAbbr={tuning.abbr}
          tuningName={tuning.name}
          isActive={tuning.abbr === this.props.activeTuning}
          onTuningSelect={this.props.onTuningSelect}
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
}

export default TuningSelect;