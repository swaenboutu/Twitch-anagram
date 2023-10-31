import React, { } from 'react';

function AnagramSolution({initialWord, displaySolution}) {

    if(displaySolution)
    {
        return (
            <div className="anagram-solution">
                <p className="anagram">{initialWord[0]}</p>
                <p className="defintion">{initialWord[1]}</p>
            </div>
        );
    }
    return (
        <div>
            &nbsp;
        </div>
    );
}

export default AnagramSolution
