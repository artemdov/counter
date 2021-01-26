import React, {ChangeEvent} from "react";
import {setChangeValueAC, setValMaxAC, setValStartAC} from "../state/reducers/count-reducer";
import {useDispatch} from "react-redux";

export type DisplayNewPropsType = {
    titleMax: string
    titleStart: string

}

export function DisplayNew(props: DisplayNewPropsType) {

    const dispatch = useDispatch()

    const OnChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        const action = setValMaxAC(+e.currentTarget.value)
        setChangeValueAC(true)
        dispatch(action)


    }
    const OnChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        const action = setValStartAC(+e.currentTarget.value)
        setChangeValueAC(true)
        dispatch(action)
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