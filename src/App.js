import React, { useState, useEffect, useContext } from 'react';
import dictionary from './consts/dictionary';
import {channels, durations} from './consts/variables';
import Anagram from './anagramDisplay';
import AnagramSolution from './anagramSolution';
import Timer from './timer';
import {ReadTwitchMessages , FirstWinner, resetWinner} from './twitchConnection';
import {clearInitialWord, getRandomItem} from './helper';

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
        let initialWord = getRandomItem(dictionary);
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

    if(!isStarted)
    {
        setIsStarted(true);
        generateAnagrams();
    }

    return (
        <>
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
                    <Timer maxDuration={durations.timeToSearch} onEnd={endTimer} />
                </> : null}
                {displaySolution ?
                    <>
                    <FirstWinner />
                    <AnagramSolution displaySolution={displaySolution} initialWord={solution} />
                    <Timer maxDuration={durations.displayAnswerDuration} onEnd={() => {
                        setAnagram('');
                        setDisplaySolution(false);
                    }} />
                    </> : null}
            </>
            :  null }
        </>
    );
}