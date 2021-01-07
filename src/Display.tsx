import React from "react";


export type DisplayPropsType = {
    valStart: number
    valMax: number
    count: number
}

export function Display(props: DisplayPropsType) {
    return (
        <div className={props.count < 0 || props.valStart >= props.valMax ? "DisplayCountRed" : "DisplayCount"}>

            {props.count}


        </div>

    )
}