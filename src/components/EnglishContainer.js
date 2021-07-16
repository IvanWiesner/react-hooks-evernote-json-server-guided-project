import React from 'react';
import NoteEnglish from './NoteEnglish';

    function EnglishContainer({ englishNotes, setEnglishNotes }) {
   
        return (
            <ul>
                {englishNotes().map(englishNote => {  
                    return (
                        <EnglishCard
                            englishNote={englishNote}
                            key={englishNote.id}
                            id={englishNote.id}
                            userId={englishNote.userId}
                            title={englishNote.title}
                            body={englishNote.body}
                            />
                        )
                    })}
                </ul>
            )
        }
export default EnglishContainer;