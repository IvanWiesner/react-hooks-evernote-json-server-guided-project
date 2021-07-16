import React from "react";

function NoteEditor({ editNote, setEditNote, setShowNote, setNotes, notes, setEnglishNotes }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/notes/${editNote.id}`, {
      method: "PATCH",
      body: JSON.stringify(editNote),
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json"
        }
    })
    .then(r => r.json())
    .then(data => {
      setNotes(
        notes.map(note => {
          if ( note.id === data.id ) {
            return  (editNote)
          } else {
            return (note)
          }}))
      setEnglishNotes(
        ""
      )
      setShowNote(data)
      setEditNote(
        ""
      )
    })
  }
  const handleEditor = (e) => {
   setEditNote({
     ...editNote,
     [e.target.name]: e.target.value
   })
  }

  return (
    <form className="note-editor"
    onSubmit={handleSubmit}>
      <input 
      type="text" 
      name="title"
      value={editNote.title}
      onChange={handleEditor}
      />
      <textarea 
      name="body" 
      value={editNote.body}
      onChange={handleEditor}
      />
      <div className="button-row">
        <input 
        className="button" 
        type="submit" 
        value="Save"
         />
        <button type="button" onClick={() => setEditNote("")} >Cancel</button>
        
      </div>
    </form>
  );
}

export default NoteEditor;
