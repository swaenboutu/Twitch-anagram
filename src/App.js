import React, { useState, useEffect, useContext } from 'react';
import dictionary from './dictionary';
import Anagram from './anagramDisplay';
import AnagramSolution from './anagramSolution';
import Timer from './timer';
import {Tmi, ConnectToTwich} from './twitchConnection';
import clearInitialWord from './helper';

function StartButton({ onStartClick }) {
    return (
      <button onClick={onStartClick}>
        Start
      </button>
    );
  }

export default function main(){
    const [isStarted, setIsStarted] = useState(false);
    const [solution, setSolution] = useState([]);
    const [anagram, setAnagram] = useState('');
    const [displaySolution, setDisplaySolution] = useState(false);
    // const [twitchClient, setTwitchClient] = useState();

    useEffect(() => {
        if (isStarted && anagram === '') {
            generateAnagrams();
        }
    }, [isStarted, anagram])

    function generateAnagrams() {
        let initialWord = random_item(dictionary);
        setSolution(initialWord);
        let clearAnagram = clearInitialWord(initialWord[0]);
        // setTwitchClient(setTwitchClient());
        const wordArray = clearAnagram.split('');
        let  permutations = wordArray.sort(() => Math.random() - 0.5);
        if(permutations.join('') == initialWord[0]){
            permutations = wordArray.sort(() => Math.random() - 0.5);
        }
        setAnagram(permutations.join(''));
        
    };

    function endTimer() {
        setDisplaySolution(true);
    }

    return (
        <>
        <div>
            <StartButton onStartClick={ () => {
                setIsStarted(true);
                generateAnagrams();
            }} />
        </div>
        <div id="title">
            <h1>Je reviens vite</h1>
            <p>En attendant, voila un anagramme :</p>
        </div>
            <Tmi solution={solution[0]} />
            {anagram !== '' ?
            <>
                {!displaySolution ?
                <>
                    <Anagram anagram={anagram} />
                    <Timer maxDuration='10' onEnd={endTimer} />
                </> : null}
                {displaySolution ?
                    <>
                    <AnagramSolution displaySolution={displaySolution} initialWord={solution} />
                    <Timer maxDuration='1200' onEnd={() => {
                        setAnagram('');
                        setDisplaySolution(false);
                    }} />
                    </> : null}
            </>
            : null}
        </>
    );
}

function random_item(items)
{
    return items[Math.floor(Math.random()*items.length)];
}