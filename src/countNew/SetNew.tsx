import React, {ChangeEvent} from "react";


export type SetPropsType = {
    title: string
    setCount: () => void

}

export function Set(props: SetPropsType) {
    return (
        <button className="AppSet" onClick={() => {props.setCount()}}>
            {props.title}
        </button>


    )
}