import Sidebar from "./components/Sidebar/Sidebar";
import { Navbar } from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

const  NOTES = []

export const App=()=>{
  const [notes, setNotes] = useState(NOTES);
  
  const addNote =(note)=>{
    setNotes((prevNotes)=>{
      return[
        ...notes,
        note
      ]
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
      <Form addNote={addNote}/>
      <Notes notes={notes} deleteNote={deleteNote}/>
      <Modal/>
    </div>
  );
}


export default App;
