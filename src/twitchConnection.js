import React, { } from 'react';
import clearInitialWord from './helper';

function ConnectToTwich() {
    const tmi = require('tmi.js');
    const client = new tmi.Client({
        channels: [ channel ]
    });
    client.connect().catch(console.error);

    return client;
}

function Tmi({solution}) {

    const channel = 'redswaen';
    const tmi = require('tmi.js');
    const client = new tmi.Client({
        channels: [ channel ]
    });
    client.connect().catch(console.error);
    solution = clearInitialWord(solution);
    
    client.on('message', (channel, tags, message, self) => {    
        if (self) return;

        if(clearInitialWord(message).includes(solution)) {   
            console.log(`${tags['msg-id']}`);
            console.log(`${tags['display-name']}`);
            return (
                <div>
                    ${tags['display-name']} à gagné!
                </div>
            );
        }
    });     
}

export {Tmi, ConnectToTwich};