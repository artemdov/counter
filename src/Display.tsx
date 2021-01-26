import React from "react";


export type DisplayPropsType = {
    valStart: number
    valMax: number
    count: number
    displayChange: boolean
}

export function Display(props: DisplayPropsType) {
    const incorrect = props.valStart < 0 || props.valMax < 0 || props.valStart >= props.valMax
    return (
        <div className={incorrect || props.count === props.valMax ? "DisplayCountRed" : "DisplayCount"}>
                {props.displayChange ? <p className='RedError'> {props.count}</p> : <p className='pressValue'>{incorrect ? 'incorrect-value' : 'press "SET"'}</p>}
        </div>

    )
}