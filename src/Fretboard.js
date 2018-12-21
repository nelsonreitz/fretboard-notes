import React, { Component } from 'react';

const STRINGS_COUNT = 6;
const FRETS_COUNT = 12;

function FretboardHeader(props) {
  const fretsCount = props.fretsCount;
  const columns = [
    <th className="Spacer" colSpan="2" key="spacer"></th>,
  ];

  // Create fret numbers
  for (let i  = 0; i < fretsCount; i++) {
    const fretNumber = i + 1;
    const className = "Fret-" + fretNumber;
    columns.push(
      <th className={className} key={fretNumber}>
        {fretNumber}
      </th>
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

function Note(props) {
  return (
    <div className="FretNote">
      {props.note}
    </div>
  );
}

function FretboardBody(props) {
  const fretsCount = props.fretsCount;
  const stringsCount = props.stringsCount;
  const selectedTuning = props.selectedTuning;
  const tunings = props.tunings;
  const stringNotes = props.stringNotes;
  const rows = [];

  // Find notes of selected tuning
  const tuning = tunings.find(tuning => tuning.abbr === selectedTuning);

  // Create strings
  for (let i = 0; i < stringsCount; i++) {
    const className = "String-" + i;
    const openNote = tuning.notes[i];
    const columns = [
      <td className="Open" key="open">{openNote}</td>,
      <td className="Spacer" key="spacer"></td>
    ];

    // Find notes of current string
    const currentString = stringNotes.find(string => string.openNote === openNote);

    // Create frets
    for (let j = 0; j < fretsCount; j++) {
      const fretNumber = j + 1;
      const fretNote = currentString.fretNotes[j];
      const className = "Fret-" + fretNumber;
      columns.push(
        <td className={className} key={fretNumber}>
          <Note note={fretNote} />
        </td>
      );
    }

    // Build the strings bottom to tap to respect guitar tabs conventions
    rows.unshift(
      <tr className={className} key={i}>
        {columns}
      </tr>
    );
  }

  return (
    <tbody>
      {rows}
    </tbody>
  );
}

class Fretboard extends Component {
  render() {
    return (
      <div className="Fretboard">
        <div className="Container">
          <table>
            <FretboardHeader fretsCount={FRETS_COUNT} />
            <FretboardBody
              fretsCount={FRETS_COUNT}
              stringsCount={STRINGS_COUNT}
              selectedTuning={this.props.selectedTuning}
              tunings={this.props.tunings}
              stringNotes={this.props.stringNotes}
            />
          </table>
        </div>
      </div>
    );
  }
}

export default Fretboard;