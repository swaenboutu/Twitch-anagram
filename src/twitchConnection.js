import React, { useState} from 'react';
import clearInitialWord from './helper';

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
    const client = new tmi.Client({
        channels: channel
    });
    client.connect().catch(console.error);
    solution = clearInitialWord(solution);

    client.on('message', (channel, tags, message, self) => {
        if (self) return;

        if(clearInitialWord(message).includes(solution)) {
            // console.log(message, "tags['display-name']", tags['display-name']);
            if(winner === null)
            {
                winner = tags['display-name'];
            }
        }
        // else{
        //     console.log("message Else", message);
        // }
    });     
}

export {ReadTwitchMessages, FirstWinner, resetWinner};