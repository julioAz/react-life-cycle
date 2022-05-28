import React from "react"
import { useState } from "react"
import './Counter.css'

function Counter (){

    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(count => count + 1)
    };

    const decrease = () => {
        if(counter > 0){
            setCounter(count => count - 1)
        }
    };

    const reset = () => {
        setCounter(0)
    }

    return (
        <div className="counter">
            <h1 className="counter__title">Counter</h1>
            <div className="counter__controls">
                <button className="counter__controls__button" onClick={increase}>+</button>
                <span className="counter__controls__value">{counter}</span>
                <button className="counter__controls__button" onClick={decrease}>-</button>
                <button className="counter__controls__button" onClick={reset}>reset</button>
            </div>
        </div>
    )
}

export default Counter