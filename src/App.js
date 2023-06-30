
import { useState } from 'react';
import './App.css';
import Create from './Components/Create';
import Header from './Components/Header';
import Note from './Components/Note';
import Count from './Components/Count';

function App(props) {
  const[notes,setNotes]=useState([])
  function addnote(newNote){
    setNotes(prevValue=>{
      return[...prevValue,newNote];
    });
  }

  function deletenote(id){
    setNotes((prevValue) => {
      return [...prevValue.filter((note, index) =>index !== id)];
    });
  }

  return (
    <>
      <Header/>
      <Count count={notes.length===0?"Empty":`Showing ${notes.length} Notes`}/>
      <Create onAdd={addnote}/>
      {notes.map((note,index)=>(
        <Note 
        key={index} 
        id={index} 
        title={note.title} 
        content={note.content}
        onDelete={deletenote}
        />
      ))}
    </>

  );
}

export default App;
