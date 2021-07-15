import React, { useState } from "react";
import NoteList from "./NoteList";

function Sidebar({ notes, search, setShowNote, setNotes}) {
  const [ formData, setFormData ] = useState({
    id: "",
    userId: 1,
    title: "default",
    body: "placeholder"
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/notes`, {
    // fetch(`http://localhost:3000/notes${formData.id}`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Accept" : "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setNotes([...notes, data]);
        console.log(data)
      });
  };
  
  return (
    <div className="master-detail-element sidebar">
      <NoteList 
      search={search}
      notes={notes}
      setShowNote={setShowNote}
      />
      <button onClick={handleSubmit}>New</button>
    </div>
  );
}

export default Sidebar;
