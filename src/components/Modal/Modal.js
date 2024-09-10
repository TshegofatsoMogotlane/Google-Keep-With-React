import React, { useState } from "react";
import "./Modal.css";
import Form from "../Form/Form";
const Modal = (props) => {
  console.log(props)
  const { isModalOpen,selectedNote, toggleModal} = props;
  const [hasCursor, sethasCursor] =useState(false)

  const handleCloseModal=()=> !hasCursor && toggleModal();
  
  const handleMouseOutModal =()=>{
    sethasCursor(false)
  }
  const handleMouseOverModal =()=>{
    sethasCursor(true)
  }
  return (
    <div className={`modal ${isModalOpen?"open-modal":""}`} onClick={handleCloseModal}>
      <div className="modal-content" onMouseOut={handleMouseOutModal} onMouseOver={handleMouseOverModal}>
          <Form selectedNote={selectedNote} toggleModal={toggleModal} edit/>
      </div>
    </div>
  );
};

export default Modal;
