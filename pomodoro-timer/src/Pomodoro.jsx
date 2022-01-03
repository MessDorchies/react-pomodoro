import React, {useEffect, useState} from 'react';

export default function Pomodoro(props) {

    const [minutes, setMinutes] = useState(15);
    const [seconds, setSeconds] = useState(0);
    const [isSession, setIsSession] = useState(true);
    const [isStarted, setIsStarted] = useState(false);
    const [value, setValue] = useState("");


    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;

    function changeState(){
        setIsStarted(!isStarted);
    }
    function refresh(){
        if(!isStarted){
            if(isSession){
                setMinutes(props.sessionInterval);
                setSeconds(0);
            }
            else{
                setMinutes(props.breakInterval);
                setSeconds(0);
            }
        }      
    }

    useEffect(() => {
        if(isStarted) {
            setValue("stop")
        }
        else{
            setValue("start");
        } 
    },[changeState])

    useEffect(() => {
            let interval = setInterval(() => {
                clearInterval(interval);
                    if(isStarted){
                        if(seconds === 0){
                            if(minutes !== 0) {
                                setSeconds(59);
                                setMinutes(minutes-1);
                            } 
                            else{
                                let minutes = isSession ? props.breakInterval -1 : props.sessionInterval -1;
                                let seconds = 59;
                                setMinutes(minutes);
                                setSeconds(seconds);
                                setIsSession(!isSession);
                            }
                        }
                        else{
                            setSeconds(seconds-1);
                        }
                }
            },1000)
    }, [changeState])

    return (
        <div>
            <div className='message'>
                {isSession ? <div> Session </div> : <div> Break </div>}
            </div>
            <div className='timer'>
                {displayMinutes}:{displaySeconds}
            </div>
            <div>
                <button onClick={changeState}>{value}</button>
                <button onClick={refresh}>refresh</button>
            </div>
        </div>
    )
}
