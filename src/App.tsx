import React, {useState} from 'react';
import './App.css';
import {Display} from "./Display";
import {Increment} from "./Increment";
import {Reset} from "./Reset";
import {DisplayNew} from "./countNew/DisplayNew";
import {Set} from "./countNew/SetNew";


export function App() {

    let [count, setCount] = useState(0)
    let [valMax, setValMax] = useState(0)
    let [valStart, setValStart] = useState(0)

    let disabledIncCount = count === valMax
    let disabledResCount = count === valStart
    let IncrementCount = () => {
        if (count < valMax) {
            setCount(count + 1)
        }
    }
    let ResetCount = () => {
        setCount(valStart)
    }

    return (
        <div className="App">
            <div className="AppCounter">

                <Display
                    valMax={valMax}
                    valStart={valStart}/>
                <div className="ButtonsBorder">
                    <Increment title={"Inc"} IncrCount={IncrementCount} disabledInc={disabledIncCount}/>
                    <Reset title={"Res"} ResCount={ResetCount} disabledRes={disabledResCount}/>
                </div>
            </div>

            <div className="AppCounterNew">

                <DisplayNew
                    titleMax={"Max value:"}
                    titleStart={"Start value:"}
                    maxValChange = {setValMax}
                    startValChange={setValStart}

                />
                <div className="ButtonsBorderNew">
                    <Set
                        valStart={valStart}
                        title={"Set"}/>
                </div>

            </div>
        </div>
    )
}


export default App;
