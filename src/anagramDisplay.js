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
            Aller on cherche
        </div>
    );
}

function Anagram({anagram}) {
    return (
        <div>
        Voilà le mot à rechercher
        <h2>{anagram}</h2>
        </div>
    );
}

export default Anagram