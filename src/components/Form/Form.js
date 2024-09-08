import React, { useState} from "react";
import "./Form.css";
const Form = () => {

  const [userInput, setUserInput] = useState({
    title:"",
    text:"",
  })
  const titleChangeHandler = (event)=>{
    setUserInput((prevState)=>{
      return{
        ...prevState,
        title:event.target.value
      }
    })
  }

  const textChangeHandler = (event)=>{
    setUserInput((prevState)=>{
      return{
        ...prevState,
        text:event.target.value
      }
    })
  }
  const submitFormHandler = (event)=>{
    event.preventDefault();
    setUserInput({
      title:"",
      text:""
    })

  }
  return (
    <>
      {/* <div className="form-container" inactive-form>
        <form>
          <input type="text" className="note-text" placeholder="Take a note..." />
          <div className="form-actions">
            <div className="tooltip">
              <span className="material-symbols-outlined hover">check_box</span>
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
        </form>
      </div> */}

      <div className="form-container active-form">
        <form onSubmit={submitFormHandler}  id="form">
          <input type="text" value={userInput.title} className="note-title" placeholder="Title" onChange={titleChangeHandler}/>
          <input type="text" value={userInput.text} className="note-text" placeholder="Take a note..." onChange={textChangeHandler} />
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
        </form>
      </div>
    </>
  );
};

export default Form;
