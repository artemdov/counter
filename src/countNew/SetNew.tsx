import React from "react";


export type SetPropsType = {
    title: string
    valStart: number

}

export function Set(props: SetPropsType) {
    return (
        <button className="AppSet" onClick={() => {props.valStart}}>
            {props.title}
        </button>


    )
}