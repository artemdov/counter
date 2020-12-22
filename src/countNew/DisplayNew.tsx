import React from "react";


export type DisplayNewPropsType = {
    titleMax: string
    titleMin: string
    /*inputMax: number
    inputMin: number*/
}

export function DisplayNew(props: DisplayNewPropsType) {
    return (
        <div className="DisplayCounterNew">
            <p className='MaxInputWithText'>{props.titleMax} <input className='MaxValueInput' type='number'/></p>
            <p className='StartInputWithText'> {props.titleMin} <input className='StartValueInput' type='number' min='-1'/></p>
        </div>

    )
}