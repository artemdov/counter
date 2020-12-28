import React, {ChangeEvent} from "react";

export type DisplayPropsType ={
    valStart: number
}

export function Display(props:DisplayPropsType) {
    return (
        <div className={props.valStart < 0 ? "DisplayCountRed" : "DisplayCount"}>

            {props.valStart}

        </div>

    )
}