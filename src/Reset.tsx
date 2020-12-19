import React from "react";


export type IncrPropsType = {
    ResCount: () => void
    title: string
    disabledRes: boolean
}

export function Reset(props: IncrPropsType) {
    return (
        <button disabled={props.disabledRes} className="AppReset" onClick={() => {
            props.ResCount()
        }}>
            {props.title}
        </button>


    )
}