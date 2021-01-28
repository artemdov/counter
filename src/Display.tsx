import React from "react";
import {setChangeValueAC, setCountAC} from "./state/reducers/count-reducer";
import {useDispatch} from "react-redux";


export type DisplayPropsType = {
    incorrectVal: boolean
    valStart: number
    valMax: number
    count: number
    toNumber: boolean

}

export function Display(props: DisplayPropsType) {

    return (
        <div className={props.incorrectVal || props.count === props.valMax ? "DisplayCountRed" : "DisplayCount"}>
                {props.toNumber ? <p className='RedError'> {props.count}</p> : <p className='pressValue'>{props.incorrectVal ? 'incorrect-value' : 'press "SET"'}</p>}
        </div>

    )
}