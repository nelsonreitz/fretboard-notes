import React, { Component } from 'react';

class TuningButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onTuningSelect(e.target.value);
  }

  render() {
    const tuningAbbr = this.props.tuningAbbr;
    const tuningName = this.props.tuningName;

    return (
      <button className="TuningBtn" value={tuningAbbr} onClick={this.handleClick}>
        {tuningName}
      </button>
    );
  }
}

class TuningSelect extends Component {
  render() {
    let buttons = [];

    // Create buttons
    for (let tuning of this.props.tunings) {
      buttons.push(
        <TuningButton
          key={tuning.abbr}
          tuningAbbr={tuning.abbr}
          tuningName={tuning.name}
          onTuningSelect={this.props.onTuningSelect}
        />
      );
    }

    return (
      <fieldset className="TuningSelect">
        <legend>Choose a tuning:</legend>
        {buttons}
      </fieldset>
    );
  }
}

export default TuningSelect;