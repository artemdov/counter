import React, {ChangeEvent, useState} from "react";



export type DisplayNewPropsType = {
    titleMax: string
    titleStart: string

}

export function DisplayNew(props: DisplayNewPropsType) {

    let [valMax, setValMax] = useState('')
    let [valStart, setValStart] = useState('')
    const OnChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        setValMax(e.currentTarget.value)
    }
    const OnChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        setValStart(e.currentTarget.value)
    }

    return (
        <div className="DisplayCounterNew">
            <p className='MaxInputWithText'>
                {props.titleMax}
                <input className='MaxValueInput'
                       value={valMax}
                       onChange={OnChangeHandlerMax}
                       type='number'/>
            </p>
            <p className='StartInputWithText'>
                {props.titleStart}
                <input className='StartValueInput'
                       value={valStart}
                       onChange={OnChangeHandlerStart}
                       type='number'/>
            </p>

        </div>

    )
}