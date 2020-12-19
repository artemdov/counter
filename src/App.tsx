import React, {useState} from 'react';
import './App.css';
import {Display} from "./Display";
import {Increment} from "./Increment";
import {Reset} from "./Reset";


export function App() {

    let [count, setCount] = useState(0)
    let min = 0
    let max = 5
    let disabledIncCount = count === max
    let disabledResCount = count === min

    let IncrementCount = () => {
        if (count < max) {
            setCount(count + 1)
        }
    }

    let ResetCount = () => {
        setCount(min)
    }

    return (

        <div className="App">
            <Display count={count}/>
            <div className="Buttons">
                <Increment title={"Inc"} IncrCount={IncrementCount} disabledInc={disabledIncCount} />
                <Reset title={"Res"} ResCount={ResetCount} disabledRes={disabledResCount} />
            </div>
        </div>
    )
}


export default App;
