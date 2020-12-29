import React, {ChangeEvent} from "react";


export type DisplayNewPropsType = {
    titleMax: string
    titleStart: string
    OnChangeHandlerMax: (e: ChangeEvent<HTMLInputElement>) => void
    OnChangeHandlerStart: (e: ChangeEvent<HTMLInputElement>) => void
}

export function DisplayNew(props: DisplayNewPropsType) {

    return (
        <div className="DisplayCounterNew">
            <p className='MaxInputWithText'>
                {props.titleMax}
                <input className='MaxValueInput'
                       onChange={props.OnChangeHandlerMax}
                       type='number'/>
            </p>
            <p className='StartInputWithText'>
                {props.titleStart}
                <input className='StartValueInput'
                       onChange={props.OnChangeHandlerStart}
                       type='number'/>
            </p>

        </div>

    )
}