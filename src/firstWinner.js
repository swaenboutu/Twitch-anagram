import { useState } from 'react';
import { generateRandom } from './helper';

var winner = null;

function getWinner(){
    return winner
}

function updateWinner(value){
    winner = value;
}
function FirstWinner(){
    //winner = "swaenlive";
    var confetticount = generateRandom(30, 40);
    var styles = [];
    for(var i = 0; i < confetticount; i++)
    {
        styles.push({
            class: generateRandom(0, 5),
            top: generateRandom(20, 50)+"%",
            left: generateRandom()+"%",
            height:generateRandom(10,15)+"px",
            width:generateRandom(15,25)+"px",
            animationDelay:Math.random(0,4)+"s",
        })
    }
    const arrayDataItems = styles.map(element => 
        <span className={"particle c"+element.class} style={{top: element.top, left:element.left, height:element.height, width:element.width, animationDelay:element.animationDelay}}></span>
      )
    if(winner != null)
    {
        return (
            <>
            <p className={'subtitle'}>
            <span className='textcontainer'>
                <span id='winner-name' className="particletext confetti">
                    {arrayDataItems}
                    {winner}
                </span>
            </span> a été le premier à trouver!
            </p>
            </>
        );
    }
    
    return (
        <div>
            &nbsp;
        </div>
    );
}

export {FirstWinner, updateWinner, getWinner};