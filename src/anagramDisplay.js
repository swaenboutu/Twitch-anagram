import React from 'react';

function Anagram({anagram}) {
    const arrayDataItems = Array.from(anagram).map(element => 
        <span>{element}</span>
        )

    return (
        <>
        <div>
            <h2 className="anagram animate">        
                {arrayDataItems}
            </h2>
        </div>
        </>
    );
}

export default Anagram