import { useState } from 'react';
import {clearInitialWord} from './helper';
import {updateWinner} from './consts/firstWinner';


function ReadTwitchMessages(param) {
    const tmi = require('tmi.js');
    const [connected, setConnected] = useState(false);
    const [winner, setWinner] = useState(null);

    const client = new tmi.Client({
        channels: param.channel
    });

    if(connected === false)
    {
        client.connect().catch(console.error);
        setConnected(true);
    }

    var solution = clearInitialWord(param.solution);

    client.on('message', (channel, tags, message, self) => {
        if (self) return;
        if(clearInitialWord(message).includes(solution) && winner === null) {
            setWinner(tags['display-name']);
            updateWinner(tags['display-name']);
            param.whenFound();
        }
    });     
}

export {ReadTwitchMessages};