import React from "react";


export type DisplayPropsType = {
    valStart: number
    valMax: number
    count: number


}



export function Display(props: DisplayPropsType) {

    return (

        <div className={props.valStart < 0 || props.valMax < 0 || props.valStart >= props.valMax || props.count===props.valMax  ?  "DisplayCountRed" : "DisplayCount"}>
            <p className='RedError'> { props.valStart < 0 || props.valMax < 0 || props.valStart >= props.valMax ? 'incorrect-value' : props.count }</p>

        </div>

    )
}