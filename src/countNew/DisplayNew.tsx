import React from "react";
import {kMaxLength} from "buffer";

export type DisplayNewPropsType = {
    /*inputMax: number
    inputMin: number*/
}

export function DisplayNew(props: DisplayNewPropsType) {
    return (
        <div className="DisplayCounterNew">
            <p className='MaxInputWithText'>Max value: <input className='MaxValueInput' type='number'/></p>
            <p className='StartInputWithText'> Start value: <input className='StartValueInput' type='number' min='-1'/></p>
        </div>

    )
}