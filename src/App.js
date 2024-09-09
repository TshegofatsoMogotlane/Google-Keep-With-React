import Sidebar from "./components/Sidebar/Sidebar";
import { Navbar } from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";
export const App=()=>{
  let notes = [
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

  const addNote =(note)=>{
    notes=[
      ...notes,
      note
    ]
    console.log("form App",notes)
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
