import React, { } from 'react';

function AnagramResult({initialWord}) {

    if(0 === 0)
    {
        return (
            <div>
                <p>Réponse : {initialWord[0]}</p>
                <p>Définition : {initialWord[1]}</p>
            </div>
        );
    }
    return (
        <div>
            &nbsp;
        </div>
    );
}

function Anagram({anagram}) {
    return (
        <div>
            <h2 class="anagram">{anagram}</h2>
        </div>
    );
}

export default Anagram