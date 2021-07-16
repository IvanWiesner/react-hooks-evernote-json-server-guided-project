import React from "react";

function NoteViewer({ showNote, title, userId, body, setEditNote, setEnglishNotes, englishNotes }) {
  // const [ editState, setEditState ] = useState(formData);

  
  // const handleChange = ({ target: {value, title} }) => {
  //   setEditState({ ...editState, [title]: value })
  // }
  return (
    <>
    <h2>{title}</h2>
    <p>{body}</p>
      {/* <form onSubmit={handleEvent}></form>
      <input
      onChange={handleChange}
      value={formData.title}
      type="text"
      title="title"
      placeholder="default"
      />
      <input
      onChange={handleChange}
      value={formData.body}
      type="text"
      title="title"
      placeholder="placeholder"
      /> */}
      <button onClick={() => setEditNote(showNote)}>Edit</button>
      <button type="button" onClick={() => setEnglishNotes(englishNotes)}>Translate</button>
    </>
  );
}

export default NoteViewer;
