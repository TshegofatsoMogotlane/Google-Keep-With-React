import React from "react";
import "./Notes.css";
import Note from "./Note";
import NoNotes from "../NoNotes/NoNotes";
const Notes = (props) => {
  const { notes, deleteNote } = props;
  return (
    <div>
      <div className="notes">
        {notes.length === 0 ? (
          <NoNotes />
        ) : (
          notes.map((note, index) => (
            <Note
              key={note.index}
              id={note.id}
              title={note.title}
              text={note.text}
              deleteNote={deleteNote}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;
