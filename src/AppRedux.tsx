import React, {useState} from 'react';
import './App.css';
import {Display} from "./Display";
import {Increment} from "./Increment";
import {Reset} from "./Reset";
import {DisplayNew} from "./countNew/DisplayNew";
import {Set} from "./countNew/SetNew";
import {useDispatch, useSelector} from "react-redux";
import {incrementValueAC, resetStartValueAC, setChangeValueAC, setCountAC} from "./state/reducers/count-reducer";
import {AppStateType} from "./state/store";


export function AppWithRedux() {


    type CountType = number
    type ValMaxType = number
    type ValStartType = number
    type ChangeType = boolean


    const dispatch = useDispatch()
    const count = useSelector<AppStateType, CountType>(state => state.count)
    const valMax = useSelector<AppStateType, ValMaxType>(state => state.valMax)
    const valStart = useSelector<AppStateType, ValStartType>(state => state.valStart)
    const change = useSelector<AppStateType, ChangeType>(state => state.change)
    let [toNumber, setToNumber] = useState(false)

    let disabledIncCount = count === valMax
    let disabledResCount = count === valStart
    let disabledSetCount = count < 0 || valMax < 0 || valStart >= valMax
    let incorrect = valStart < 0 || valMax < 0 || valStart >= valMax


    let IncrementCount = () => {
        dispatch(incrementValueAC())
    }
    let ResetCount = () => {
        dispatch(resetStartValueAC())
    }
    let SetCount = () => {
        dispatch(setCountAC())
    }
    let func = () => {
        setToNumber(true)
    }


    return (
        <div className="App">
            <div className="AppCounter">

                <Display
                    toNumber={toNumber}
                    incorrectVal={incorrect}
                    count={count}
                    valMax={valMax}
                    valStart={valStart}
                />

                <div className="ButtonsBorder">
                    <Increment title={"Inc"} IncrCount={IncrementCount} disabledInc={disabledIncCount}/>
                    <Reset title={"Res"} ResCount={ResetCount} disabledRes={disabledResCount}/>
                </div>
            </div>
            <div className="AppCounterNew">

                <DisplayNew
                    setToNumber={func}
                    titleMax={"Max value:"}
                    titleStart={"Start value:"}
                />

                <div className="ButtonsBorderNew">

                    <Set
                        setToNumber={func}
                        disabledSet={disabledSetCount}
                        SetCount={SetCount}
                        title={"Set"}

                    />
                </div>

            </div>
        </div>
    )
}


export default AppWithRedux;
