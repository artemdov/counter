import React, {} from "react";

export type IncrPropsType = {
    IncrCount: () => void
    title: string
    disabledInc:boolean

}

export function Increment(props: IncrPropsType) {
    debugger
    return (
        <button disabled={props.disabledInc} className="AppIncrement" onClick={() => {
            props.IncrCount()
        }}>

            {props.title}

        </button>


    )


}