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

export default TuningButton;