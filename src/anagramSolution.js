import React, { } from 'react';

function AnagramSolution({initialWord, displaySolution}) {

    if(displaySolution)
    {
        return (
            <>
                <p className={'defintion'}>La solution était :</p>
                <div className="anagram-solution">
                    <p className="anagram">{initialWord[0]}</p>
                    <p className="defintion">{initialWord[1]}</p>
                </div>
            </>
        );
    }
    return (
        <div>
            &nbsp;
        </div>
    );
}

export default AnagramSolution
