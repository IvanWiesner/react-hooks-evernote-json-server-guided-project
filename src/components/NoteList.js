import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, search, setShowNote }) {
  const filterNotes = () => {
    return notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
    || note.body.toLowerCase().includes(search.toLowerCase()))
  }
  return (
    <ul>
      {filterNotes().map(note => {  
        return (
      <NoteItem 
      note={note}
      key={note.id}
      id={note.id}
      userId={note.userId}
      title={note.title}
      body={note.body}
      setShowNote={setShowNote}
      />
        )
    })}
    </ul>
  );
}

export default NoteList;
