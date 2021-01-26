import React from "react";
import {setChangeValueAC} from "../state/reducers/count-reducer";


export type SetPropsType = {
    title: string
     SetCount: () => void
    disabledSet: boolean


}

export function Set(props: SetPropsType) {

    const onclickSetHandler = () => {
        props.SetCount()
        setChangeValueAC(true)

    }
    return (
        <button className="AppSet" disabled={props.disabledSet} onClick={onclickSetHandler}>
            {props.title}
        </button>
    )

}