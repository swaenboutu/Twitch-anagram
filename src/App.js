import React, { useState, useEffect, useContext } from 'react';
import dictionary from './dictionary';
import Anagram from './anagramDisplay';
import AnagramSolution from './anagramSolution';
import Timer from './timer';

function StartButton({ onStartClick }) {
    return (
      <button onClick={onStartClick}>
        Start
      </button>
    );
  }

export default function main(){
    const [solution, setSolution] = useState([]);
    const [anagram, setAnagram] = useState('');

    function generateAnagrams() {
        let initialWord = random_item(dictionary);
        setSolution(initialWord)
        let clearAnagram = clearInitialWord(initialWord[0]);

        const wordArray = clearAnagram.split('');
        let  permutations = wordArray.sort(() => Math.random() - 0.5);
        if(permutations.join('') == initialWord[0]){
            permutations = wordArray.sort(() => Math.random() - 0.5);
        }
        setAnagram(permutations.join('')); 
    };

    return (
        <>
            <h1>Anagram Generator</h1>
            <div>
                <StartButton onStartClick={ () => generateAnagrams()} />
            </div>
            <Timer maxDuration='20' />
            <Anagram anagram={anagram} />
            <AnagramSolution initialWord={solution} />
        </>
    );
}

function random_item(items)
{
    return items[Math.floor(Math.random()*items.length)];    
}

function clearInitialWord(s){
    if(s != null){
    let r=s.toLowerCase();
    r = r.replace(new RegExp(/\s/g),"");
    r = r.replace(new RegExp(/[àáâãäå]/g),"a");
    r = r.replace(new RegExp(/æ/g),"ae");
    r = r.replace(new RegExp(/ç/g),"c");
    r = r.replace(new RegExp(/[èéêë]/g),"e");
    r = r.replace(new RegExp(/[ìíîï]/g),"i");
    r = r.replace(new RegExp(/ñ/g),"n");                
    r = r.replace(new RegExp(/[òóôõö]/g),"o");
    r = r.replace(new RegExp(/œ/g),"oe");
    r = r.replace(new RegExp(/[ùúûü]/g),"u");
    r = r.replace(new RegExp(/[ýÿ]/g),"y");
    r = r.replace(new RegExp(/\W/g),"");
    return r;
    }
    return null;
}