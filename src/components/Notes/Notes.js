import React from "react";
import "./Notes.css";
import Note from "./Note";
const Notes = (props) => {
  const { notes } = props;
  return (
    <div>
      <div className="notes">
        <Note id={notes[0].id} title={notes[0].title} text={notes[0].text}/>
        <Note id={notes[1].id} title={notes[1].title} text={notes[1].text}/>
        <Note id={notes[2].id} title={notes[2].title} text={notes[2].text}/>
      </div>
    </div>
  );
};

export default Notes;
