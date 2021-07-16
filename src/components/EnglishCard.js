import React from 'react';
import EnglishContainer from "./EnglishContainer"

function EnglishCard({ englishNote, title, userId, body }) {


    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}
export default EnglishCard;