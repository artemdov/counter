import React from "react";


export type SetPropsType = {
    title: string
    SetCount: () => void
    disabledSet: boolean
    setToNumber: () => void

}

export function Set(props: SetPropsType) {
    const onclickSetHandler = () => {
        props.SetCount()
        props.setToNumber()
    }
    return (
        <button className="AppSet" disabled={props.disabledSet} onClick={onclickSetHandler}>
            {props.title}
        </button>
    )

}