import React, {ChangeEvent} from "react";

export type DisplayNewPropsType = {
    titleMax: string
    titleStart: string
    setValMax: (value: number) => void
    setValStart: (value: number) => void
    setChange: (value: boolean) => void
}

export function DisplayNew(props: DisplayNewPropsType) {
    const OnChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValMax(+e.currentTarget.value)
        props.setChange(false)
    }
    const OnChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValStart(+e.currentTarget.value)
        props.setChange(false)
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