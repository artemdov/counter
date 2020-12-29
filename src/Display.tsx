import React from "react";

export type DisplayPropsType ={
    valStart: number
    valMax: number
}

export function Display(props:DisplayPropsType) {
    return (
        <div className={props.valStart < 0 || props.valStart >= props.valMax ? "DisplayCountRed" : "DisplayCount"}>

            {/*{props.valStart}*/}

        </div>

    )
}