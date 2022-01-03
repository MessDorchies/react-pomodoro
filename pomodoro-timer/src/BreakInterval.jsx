import React from 'react';

export default function BreakInterval(props) {


    function increase(){
            props.increaseBreakLength();      
    }
    function decrease(){
            props.decreaseBreakLength();
    }

    return (
        <div>
            <span>length of the break : </span>
            <button onClick={decrease}>-</button>
            <span> {props.breakInterval} </span>
            <button onClick={increase}>+</button>
        </div>
    )
}
