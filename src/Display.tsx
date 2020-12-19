import React from "react";

export type DisplayPropsType ={
    count: number
}

export function Display(props:DisplayPropsType) {
    return (
        <div className={props.count === 5 ? "DisplayCountRed" : "DisplayCount"}>

            {props.count}

        </div>

    )
}