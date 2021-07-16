import React, { useState, useEffect }  from "react";
import Content from "./Content";
    function NoteEnglish() {
        const [ englishNotes, setEnglishNotes ] = useState([]);
        useEffect(() => {
            fetch("http://localhost:3000/english")
            .then((r) => r.json())
            .then((data) => {
                setEnglishNotes(data);
            });
        }, [])
        return (
            <div>
                <EnglishContainer 
                englishNotes={englishNotes}
                setEnglishNotes={setEnglishNotes}
                />
                <Content
                setEnglishNotes={setEnglishNotes}
                />
            </div>
        )
    }
        export default NoteEnglish;
    