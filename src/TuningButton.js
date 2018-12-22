import React, { Component } from 'react';
import './TuningButton.css';

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
      <button
        className={"TuningButton" + (this.props.isActive ? " Active" : "")}
        value={tuningAbbr}
        onClick={this.handleClick}
      >
        {tuningName}
      </button>
    );
  }
}

export default TuningButton;