import Sidebar from "./components/Sidebar/Sidebar";
import { Navbar } from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

const  NOTES = [
  {
    id:123,
    title:"title1",
    text: "text1",
  },
  {
    id:124,
    title:"title2",
    text: "text2",
  },
  {
    id:125,
    title:"title3",
    text: "text3",
  }
 
]
export const App=()=>{
  const [notes, setNotes] = useState(NOTES)

  const addNote =(note)=>{
    notes=[
      ...notes,
      note
    ]

  }
  return (
    <div className="App">
      <Sidebar />
      <Navbar/>
      <Form addNote={addNote}/>
      <Notes notes={notes}/>
      <Modal/>
    </div>
  );
}


export default App;
