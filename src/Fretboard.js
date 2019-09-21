import React from "react";
import "./Fretboard.css";

const STRINGS_COUNT = 6;
const FRETS_COUNT = 12;

function FretboardHeader({ fretsCount }) {
  const columns = [
    <th className="Open" key="open"></th>,
    <th className="Spacer" key="spacer"></th>
  ];

  // Create fret numbers
  for (let i = 0; i < fretsCount; i++) {
    const fretNumber = i + 1;
    const className = "Fret-" + fretNumber;
    columns.push(
      <th className={className} key={fretNumber}>
        <div className="FretNumber">{fretNumber}</div>
      </th>
    );
  }

  return (
    <thead>
      <tr className="FretNumbers">{columns}</tr>
    </thead>
  );
}

function Note({ note }) {
  // Add special class for half-step notes
  const className =
    "Note Note-" + note + (note.length > 1 ? " HalfstepNote" : "");

  return <div className={className}>{note}</div>;
}

function FretboardBody({
  fretsCount,
  stringsCount,
  activeTuning,
  tunings,
  stringNotes
}) {
  const rows = [];

  // Find notes of selected tuning
  const tuning = tunings.find(tuning => tuning.abbr === activeTuning);

  // Create strings
  for (let i = 0; i < stringsCount; i++) {
    const className = "String-" + i;
    const openNote = tuning.notes[i];
    const columns = [
      <td className="Open" key="open">
        <Note note={openNote} />
      </td>,
      <td className="Spacer" key="spacer"></td>
    ];

    // Find notes of current string
    const currentString = stringNotes.find(
      string => string.openNote === openNote
    );

    // Create frets
    for (let j = 0; j < fretsCount; j++) {
      const fretNumber = j + 1;
      const fretNote = currentString.fretNotes[j];
      const className = "Fret Fret-" + fretNumber;
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

  return <tbody>{rows}</tbody>;
}

function Fretboard({ activeTuning, tunings, stringNotes }) {
  return (
    <div className="Fretboard">
      <div className="Container">
        <table>
          <FretboardHeader fretsCount={FRETS_COUNT} />
          <FretboardBody
            fretsCount={FRETS_COUNT}
            stringsCount={STRINGS_COUNT}
            activeTuning={activeTuning}
            tunings={tunings}
            stringNotes={stringNotes}
          />
        </table>
      </div>
    </div>
  );
}

export default Fretboard;
