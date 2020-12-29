import React, {ChangeEvent} from "react";


export type DisplayNewPropsType = {
    titleMax: string
    titleStart: string
    maxValChange: (value: number) => void
    startValChange: (value: number) => void
}

export function DisplayNew(props: DisplayNewPropsType) {


    const OnChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        props.maxValChange(+e.currentTarget.value)
    }
    const OnChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        props.startValChange(+e.currentTarget.value)
    }

    return (
        <div className="DisplayCounterNew">
            <p className='MaxInputWithText'>
                {props.titleMax}
                <input className='MaxValueInput'
                       onChange={OnChangeHandlerMax}
                       type='number'/>
            </p>
            <p className='StartInputWithText'>
                {props.titleStart}
                <input className='StartValueInput'
                       onChange={OnChangeHandlerStart}
                       type='number'/>
            </p>

        </div>

    )
}