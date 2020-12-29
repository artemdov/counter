import React, {ChangeEvent} from "react";


export type SetPropsType = {
    title: string
    OnChangeHandlerStart: (e: ChangeEvent<HTMLInputElement>) => void

}

export function Set(props: SetPropsType) {
    return (
        <button className="AppSet" onClick={() => {props.OnChangeHandlerStart}}>
            {props.title}
        </button>


    )
}