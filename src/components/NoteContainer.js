import React, { useState } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer({ notes, setNotes, search, setSearch }) {
  const [showNote, setShowNote] = useState(false)

  return (
    <>
      <Search 
      search={search}
      setSearch={setSearch}
      />
      <div className="container">
        <Sidebar 
        setShowNote={setShowNote}
        notes={notes}
        setNotes={setNotes}
        search={search}
        />
        <Content
        notes={notes}
        setShowNote={setShowNote}
        showNote={showNote}
        setNotes={setNotes}
        />
      </div>
    </>
  );
}

export default NoteContainer;
