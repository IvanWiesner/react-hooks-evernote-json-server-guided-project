import React, {useState} from "react";
import NoteList from "./NoteList";

function NoteItem({ title, body, id, userId, setShowNote, note }) {

  // const [showInfo, setShowInfo] = useState(false)
  
  
  return (
    <li onClick= {() => setShowNote(note)}>
      <h2 
      // onClick={() => setShowInfo(!showInfo)}
      >{title}</h2>
      <p>{body.substring(0, 10)}...</p>
     
    </li>
  );
}

export default NoteItem;
