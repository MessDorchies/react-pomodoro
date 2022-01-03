import React from 'react';

export default function SessionInterval(props) {

    function increase(){
        props.increaseSessionLength();
    }
    function decrease(){
        props.decreaseSessionLength();
    }

    return (
        <div>
            <span>length of the session : </span>
            <button onClick={decrease}>-</button>
            <span> {props.sessionInterval} </span>
            <button onClick={increase}>+</button>
        </div>
    )
}