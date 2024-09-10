import Sidebar from "./components/Sidebar/Sidebar";
import { Navbar } from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

const  NOTES = []

export const App=()=>{
  const [notes, setNotes] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState({});
  const [isModalOpen, setIsModalOpen]=useState(false)
  
  const addNote =(note)=>{
    setNotes((prevNotes)=>{
      return[
        ...notes,
        note
      ]
    })
  }
  const toggleModal = ()=>{
    setIsModalOpen((prevState)=>{
      return !prevState
    })
  }
  const deleteNote =(id)=>{
    setNotes((prevNotes)=>{
      return prevNotes.filter((note)=>note.id !== id)
    })
  }
  return (
    <div className="App">
      <Sidebar />
      <Navbar/>
      <Form addNote={addNote} selectedNote={selectedNote} toggleModal={toggleModal}/>
      <Notes notes={notes} deleteNote={deleteNote} toggleModal={toggleModal} setSelectedNote={setSelectedNote}/>
      {isModalOpen && <Modal isModalOpen={isModalOpen} selectedNote={selectedNote} toggleModal={toggleModal}/>}
    </div>
  );
}


export default App;
