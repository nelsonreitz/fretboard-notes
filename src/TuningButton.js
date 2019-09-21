import React from 'react';
import './TuningButton.css';

function TuningButton({tuningAbbr, tuningName, isActive, onTuningSelect}) {
  const handleClick = (e) => {
    onTuningSelect(e.target.value);
  }

  return (
    <button
      className={"TuningButton" + (isActive ? " Active" : "")}
      value={tuningAbbr}
      onClick={handleClick}
    >
      {tuningName}
    </button>
  );
}

export default TuningButton;
