import React, {useState} from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content({ showNote: {id, userId, title, body}, showNote, setShowNote, setNotes, notes, setEnglishNotes, englishNotes }) {
  const [ editNote, setEditNote ] = useState("")
  const getContent = () => {
    if ( showNote && showNote.id === editNote.id ) {
      return <NoteEditor 
      notes={notes}
      setNotes={setNotes}
      editNote={editNote}
      setEditNote={setEditNote}
      setShowNote={setShowNote}
      />;
    } else if (showNote) {
      return <NoteViewer 
      englishNotes={englishNotes}
      setEnglishNotes={setEnglishNotes}
      setEditNote={setEditNote}
      showNote={showNote}
      title={title}
      body={body}
      userId={userId}
      id={id}
      />;
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
