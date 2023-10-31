import React, { useState, useEffect, useContext } from 'react';
import dictionary from './consts/dictionary';
import channels from './consts/twitchInfos';
import Anagram from './anagramDisplay';
import AnagramSolution from './anagramSolution';
import Timer from './timer';
import {Rtm, FirstWinner, resetWinner} from './twitchConnection';
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

    useEffect(() => {
        if (isStarted && anagram === '') {
            generateAnagrams();
        }
    }, [isStarted, anagram])

    function generateAnagrams() {
        let initialWord = random_item(dictionary);
        setSolution(initialWord);
        let clearAnagram = clearInitialWord(initialWord[0]);
        const wordArray = clearAnagram.split('');
        let  permutations = wordArray.sort(() => Math.random() - 0.5);
        if(permutations.join('') == initialWord[0]){
            permutations = wordArray.sort(() => Math.random() - 0.5);
        }
        setAnagram(permutations.join(''));
        resetWinner();
        
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
                // todo :reset Timer
            }} />
        </div>
        <div id="title">
            <h1>Je reviens vite</h1>
        </div>
            {anagram !== '' ?
            <>
                <ReadTwitchMessages solution={solution[0]} channel={channels}/>
                {!displaySolution ?
                <>
                    <p className={'subtitle'}>En attendant, voila un anagramme :</p>
                    <Anagram anagram={anagram} />
                    <Timer maxDuration='30' onEnd={endTimer} />
                </> : null}
                {displaySolution ?
                    <>
                    <FirstWinner />
                    <AnagramSolution displaySolution={displaySolution} initialWord={solution} />
                    <Timer maxDuration='20' onEnd={() => {
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