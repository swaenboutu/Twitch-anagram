import React from 'react';
import {clearInitialWord} from './helper';

var winner = null;

function FirstWinner(){
    console.log("winner", winner);
    if(winner != null)
    {
        return (
            <p className={'subtitle'}>
                <span id="winner-name">{winner}</span> a été le premier à trouver!
            </p>
        );
    }
    
    return (
        <div>
            &nbsp;
        </div>
    );
}

function resetWinner(){
    winner = null;
}

function ReadTwitchMessages({channel, solution}) {
    const tmi = require('tmi.js');
    const [connected, setConnected] = useState(false);

    const client = new tmi.Client({
        channels: channel
    });

    if(connected === false)
    {
        client.connect().catch(console.error);
        setConnected(true);
    }

    solution = clearInitialWord(solution);

    client.on('message', (channel, tags, message, self) => {
        if (self) return;

        console.log("context['custom-reward-id']", tags["custom-reward-id"]);
        if(clearInitialWord(message).includes(solution) && winner === null) {
            winner = tags['display-name'];
        }
    });     
}

export {ReadTwitchMessages, FirstWinner, resetWinner};