import React, { useState } from "react";
import "./Form.css";
const Form = (props) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isActiveForm, setIsActiveForm] = useState(false);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };
  const submitFormHandler = (event) => {
    event.preventDefault();

    //The object
    const note = {
      id: "",
      title,
      text,
    };
    props.addNote(note);
    setTitle("");
    setText("");
  };
  const formClickHandler = () => {
    setIsActiveForm(true);
  };
  return (
    <>
      <div className="form-container active-form" onClick={formClickHandler}>
        <form className="form" id="form" onSubmit={submitFormHandler}>
          {isActiveForm && (
            <input
              onChange={titleChangeHandler}
              id="note-title"
              type="text"
              className="note-title"
              placeholder="Title"
            />
          )}
          <input
            onChange={textChangeHandler}
            id="note-text"
            type="text"
            className="note-text"
            placeholder="Take a note..."
          />
          {isActiveForm ? (
            <div className="form-actions">
              <div className="icons">
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    add_alert
                  </span>
                  <span className="tooltip-text">Remind me</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    person_add
                  </span>
                  <span className="tooltip-text">Collaborator</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    palette
                  </span>
                  <span className="tooltip-text">Change Color</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    image
                  </span>
                  <span className="tooltip-text">Add Image</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    archive
                  </span>
                  <span className="tooltip-text">Archive</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    more_vert
                  </span>
                  <span className="tooltip-text">More</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    undo
                  </span>
                  <span className="tooltip-text">Undo</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    redo
                  </span>
                  <span className="tooltip-text">Redo</span>
                </div>
              </div>
              <button className="close-btn">close</button>
            </div>
          ) : (
            <div className="form-actions">
              <div className="tooltip">
                <span className="material-symbols-outlined hover">
                  check_box
                </span>
                <span className="tooltip-text">New List</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">brush</span>
                <span className="tooltip-text">New Drawing</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">image</span>
                <span className="tooltip-text">New Image</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Form;

// { <div className="form-container inactive-form" onClick={formClickHandler}>
// <form>
//   <input type="text" className="note-text" placeholder="Take a note..." />

// </form>
// </div>}
