import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Display, DisplayPropsType} from "./Display";
import {Increment} from "./Increment";
import {Reset} from "./Reset";
import {DisplayNew, DisplayNewPropsType} from "./countNew/DisplayNew";
import {Set} from "./countNew/SetNew";

export type AppPropsType = {
    DisplayNew: DisplayNewPropsType
    Display: DisplayPropsType
}

export function App(props: AppPropsType) {

    let [count, setCount] = useState(0)

    let max = 5
    let min = 0
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
            <div className="AppCounter">

                <Display
                    valStart={props.Display.valStart}/>

                <div className="ButtonsBorder">
                    <Increment title={"Inc"} IncrCount={IncrementCount} disabledInc={disabledIncCount}/>
                    <Reset title={"Res"} ResCount={ResetCount} disabledRes={disabledResCount}/>
                </div>
            </div>

            <div className="AppCounterNew">

                <DisplayNew
                    titleMax={"Max value:"}
                    titleStart={"Start value:"}

                />
                <div className="ButtonsBorderNew">
                    <Set
                        OnChangeHandlerStart={props.Display.valStart}
                        title={"Set"}/>
                </div>

            </div>
        </div>
    )
}


export default App;
