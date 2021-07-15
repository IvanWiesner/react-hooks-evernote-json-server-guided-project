import React, { useState, useEffect }  from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";
import Search from "./Search";

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch ] = useState("")
  useEffect(() => {
    fetch("http://localhost:3000/notes")
      .then((r) => r.json())
      .then((data) => {
        setNotes(data);
      });
  }, []); 
  return (
    <div className="app">
      <Header />
      <NoteContainer 
      notes={notes}
      search={search}
      setNotes={setNotes}
      setSearch={setSearch}
      />
    </div>
  );
}

export default App;
