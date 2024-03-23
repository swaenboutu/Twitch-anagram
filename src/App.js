import React, { useState, useEffect, useContext } from 'react';
// import dictionary from './consts/dictionary';
import {channels, githubGistsinfos, durations} from './consts/variables';
import Anagram from './anagramDisplay';
import AnagramSolution from './anagramSolution';
import Timer from './timer';
import {ReadTwitchMessages} from './twitchConnection';
import {clearInitialWord, getRandomItem} from './helper';
import { FirstWinner, updateWinner } from './firstWinner';

export default function main(){
    const [isStarted, setIsStarted] = useState(false);
    const [solution, setSolution] = useState([]);
    const [anagram, setAnagram] = useState('');
    const [displaySolution, setDisplaySolution] = useState(false);
    const [dictionary, setDictionnay] = useState(null);

    useEffect(() => {
        if(dictionary === null){
            // fetch(`https://api.github.com/gists/${githubGistsinfos.UUID}`)
            // .then((response) => {
            //     return response.json();
            // })
            // .then((data) => {
            //     setDictionnay(JSON.parse(data.files[githubGistsinfos.filename].content));
            //     setIsStarted(true);
            // })
            // .catch(function(error) {
            //     console.error(error);
            // });
            const json = '{"result":true, "count":42}';
            const obj = JSON.parse(json);
            setDictionnay(JSON.parse('[["Abaisser","Éta"]]'));
            setIsStarted(true);
        }

        if (isStarted && anagram === '') {
            generateAnagrams();
        }
    }, [isStarted, anagram]);

    function generateAnagrams() {
        let initialWord = getRandomItem(dictionary);
        setSolution(initialWord);
        let clearAnagram = clearInitialWord(initialWord[0]);
        const wordArray = clearAnagram.split('');
        let  permutations = wordArray.sort(() => Math.random() - 0.5);
        while(permutations.join('') == initialWord[0]){
            permutations = wordArray.sort(() => Math.random() - 0.5);
        }
        setAnagram(permutations.join(''));
        updateWinner(null);
    };

    function endTimer() {
        setDisplaySolution(true);
    }

    return (
        <>
        <div id="title">
            <h1>Je reviens vite</h1>
        </div>
            {anagram !== '' ?
            <>
                <ReadTwitchMessages solution={solution[0]} channel={channels} whenFound={endTimer} />
                {!displaySolution ?
                <>
                    <p className={'subtitle'}>En attendant, voila un anagramme :</p>
                    <Anagram anagram={anagram} />
                    <Timer maxDuration={durations.timeToSearch} onEnd={() => {
                        setAnagram('');
                        setDisplaySolution(false);
                    }} />
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