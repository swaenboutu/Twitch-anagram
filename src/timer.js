import React, { useState, useEffect, useRef } from 'react';


function Timer (param) {
    const Ref = useRef(null);
    // The state for our timer
    const [timer, setTimer] = useState();
    const [maxDuration] = useState(parseInt(param.maxDuration));
    // const [currentPercentage, setCurrentPercentage] = useState(100);
    const [strokeDasharray, setStrokeDasharray] = useState(0);
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const strokeOffset = (1 / 4) * circumference;

    const clearTimer = (e) => {
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next
        const initMinutes = Math.floor( maxDuration / 60);
        const initSeconds = (maxDuration-initMinutes*60);

        setTimer(initMinutes.toString().padStart(2, '0')+":"+initSeconds.toString().padStart(2, '0'));
        // setCurrentPercentage(100);
        setStrokeDasharray(0);

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
            // setCurrentPercentage((100 * Math.floor(total / 1000) / maxDuration ));
            setStrokeDasharray(((Math.floor(total / 1000) * 360 / maxDuration) / 360) * circumference);

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
        document.querySelectorAll("animateTransform").forEach((element) => {
            element.beginElement();
          });
    }

    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible

    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime(maxDuration));
    }, []);

    // strokeDasharray : two values, the first sets the dash and the second sets the gap
    return (
        <footer class="timer">
            <button onClick={onClickReset}>Reset</button>
            <svg>
                {<circle cx={55} cy={65} r={radius} fill="transparent" stroke='#003865' strokeWidth={10} />}
                {<circle id="timer-border" cx={55} cy={65} r={radius} fill="transparent" stroke='#A0A0A0' strokeWidth={10} strokeDasharray={[circumference - strokeDasharray, strokeDasharray]} strokeDashoffset={strokeOffset} />}
                {<circle cx={55} cy={65} r={radius} fill="black" />}
                <circle id="dot" r={10} cx={55} cy={13} fill="#003865" />
                <animateTransform href='#dot' attributeName="transform" type='rotate' from={"0 55 65"} to={"360  55 65"} dur={maxDuration.toString()+"s"} repeatCount="1" restart="always"/>
                <text id="timer-text" x="35" y="74" fill="white">{timer}</text>
            </svg>
        </footer>
    )
}

export default Timer;