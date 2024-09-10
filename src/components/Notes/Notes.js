import React from "react";
import "./Notes.css";
import Note from "./Note";
import NoNotes from "../NoNotes/NoNotes";
const Notes = (props) => {
  const { notes, deleteNote, toggleModal, setSelectedNote} = props;
  return (
    <div>
      <div className="notes">
        {notes.length === 0 ? (
          <NoNotes />
        ) : (
          notes.map((note, index) => (
            <Note
              key={note.index}
              note={note}
              deleteNote={deleteNote}
              toggleModal={toggleModal}
              setSelectedNote={setSelectedNote}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;
