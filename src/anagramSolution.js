import React, { } from 'react';

function AnagramSolution({initialWord, displaySolution}) {

    if(displaySolution)
    {
        return (
            <div class="anagram-solution">
                <p class="anagram">{initialWord[0]}</p>
                <p class="defintion">{initialWord[1]}</p>
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
