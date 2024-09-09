import React from "react";
import "./Notes.css";
import Note from "./Note";
const Notes = (props) => {
  const { notes } = props;
  return (
    <div>
      <div className="notes">
        {
          notes.map((note)=><Note id={note.id} title={note.title} text={note.text}/>)
        }
        {/* <Note id={notes[0].id} title={notes[0].title} text={notes[0].text}/>
        <Note id={notes[1].id} title={notes[1].title} text={notes[1].text}/> */}

      </div>
    </div>
  );
};

export default Notes;
