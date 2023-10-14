import React, { } from 'react';

function AnagramSolution({initialWord, displaySolution}) {

    if(displaySolution)
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

export default AnagramSolution
