import React, { useState, useEffect, useRef } from 'react';



function Timer (param) {
    const Ref = useRef(null);
    // The state for our timer
    const [timer, setTimer] = useState();
    const [maxDuration] = useState(parseInt(param.maxDuration));
    const [currentPercentage, setCurrentPercentage] = useState(100);

    const clearTimer = (e) => {
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next
        const initMinutes = Math.floor( maxDuration / 60);
        const initSeconds = (maxDuration-initMinutes*60);

        setTimer(initMinutes.toString().padStart(2, '0')+":"+initSeconds.toString().padStart(2, '0'));
        setCurrentPercentage(100);

        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    function getTimeRemaining (e) {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutes, seconds
        };
    }

    function startTimer(e) {
        let { total, minutes, seconds }
                    = getTimeRemaining(e);
        if (total >= 0) {
            setCurrentPercentage((100 * Math.floor(total / 1000) / maxDuration ));

            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        } else {
            // If we are done
            // Clear the timer
            clearInterval(Ref.current);
            // And execute the callback function
            param.onEnd();
        }
    }

    function getDeadTime(t) {
        let deadline = new Date();
        // This is where you need to adjust if
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + parseInt(t));
        return deadline;
    }

    const onClickReset = () => {
        clearTimer(getDeadTime(maxDuration));
    }

    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible

    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime(maxDuration));
    }, []);

    return (
        <div>
            <div className="jauge"><span className="jauge-remplissage" style={{height: 100-currentPercentage + '%'}}></span></div>
            <div>{timer}</div>
            <button onClick={onClickReset}>Reset</button>
        </div>
    )
}

export default Timer;
