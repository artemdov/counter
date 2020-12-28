import React, {ChangeEvent} from "react";


export type SetPropsType = {
    title: string
    OnChangeHandlerStart: (valStart: number) => void
}

export function Set(props: SetPropsType) {
    return (
        <button className="AppSet" onClick={() => {props.OnChangeHandlerStart(10)}}>
            {props.title}
        </button>


    )
}