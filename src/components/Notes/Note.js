import React, { useState } from 'react'

const Note = (props) => {
  const [title, setTitle] = useState(props.title)
  const [text, setText] = useState(props.text)
  const [isHover, setIsHover]=useState(false)
  const noteClickHandler = ()=>{
    setTitle("Changed Title");
    setText("Changed Text")

  }
  const onmouseOverHanlder = ()=>{
   setIsHover(true)
  }
  const onmouseOutHanlder = ()=>{
    setIsHover(false)
  }
  const deleteNoteHandler = ()=>{
    props.deleteNote(props.id)
  }
  return (
    <div>
      <div className="note" id={props.id} onClick={noteClickHandler} onMouseOver={onmouseOverHanlder} onMouseOut={onmouseOutHanlder}>
          <div className="title">{title}</div>
          <div className="text">{text}</div>
          {isHover &&<span className="material-symbols-outlined check-circle">
            check_circle
          </span>}
          <div className="note-footer" style={{visibility:isHover?"visible":"hidden"}}>
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
            <div className="tooltip" onClick={deleteNoteHandler}>
              <span className="material-symbols-outlined hover small-icon">
                archive
              </span>
              <span className="tooltip-text" >Archive</span>
            </div>
            <div className="tooltip">
              <span className="material-symbols-outlined hover small-icon">
                more_vert
              </span>
              <span className="tooltip-text">More</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Note
