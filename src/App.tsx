import React, {useState} from 'react';
import './App.css';
import {Display} from "./Display";
import {Increment} from "./Increment";
import {Reset} from "./Reset";
import {DisplayNew} from "./countNew/DisplayNew";
import {Set} from "./countNew/SetNew";
import {setChangeValueAC} from "./state/reducers/count-reducer";


export function App() {

    let [count, setCount] = useState(0)
    let [valMax, setValMax] = useState(0)
    let [valStart, setValStart] = useState(0)
    let [change, setChange] = useState(false)

    let disabledIncCount = count === valMax
    let disabledResCount = count === valStart
    let disabledSetCount = count  < 0 || valMax < 0 || valStart >= valMax

    let IncrementCount = () => {
        if (count < valMax) {
            setCount(count + 1)
        }
    }
    let ResetCount = () => {
        setCount(valStart)
    }
    let SetCount = () => {
        setCount(valStart)
    }

    return (
        <div className="App">
            <div className="AppCounter">

                <Display
                    toNumber={true}
                    incorrectVal={true}
                    count={count}
                    valMax={valMax}
                    valStart={valStart}/>

                <div className="ButtonsBorder">
                    <Increment title={"Inc"} IncrCount={IncrementCount} disabledInc={disabledIncCount}/>
                    <Reset title={"Res"} ResCount={ResetCount} disabledRes={disabledResCount}/>
                </div>
            </div>

            <div className="AppCounterNew">

                <DisplayNew
                    setToNumber={()=>{}}
                    titleMax={"Max value:"}
                    titleStart={"Start value:"}
                    /*setValMax={setValMax}
                    setValStart={setValStart}
                    setChange={setChange}*/
                />

                <div className="ButtonsBorderNew">

                    <Set
                        setToNumber={()=>{}}
                        disabledSet={disabledSetCount}
                        SetCount={SetCount}
                        title={"Set"}
                        /*setChange={setChange}*/
                    />
                </div>

            </div>
        </div>
    )
}


export default App;
