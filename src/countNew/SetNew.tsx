import React from "react";


export type SetPropsType = {
    title: string
    setCount: () => void
    setChange: (value: boolean) => void
    disabledSet: boolean


}

export function Set(props: SetPropsType) {

    const onclickSetHandler = () => {
        props.setCount()
        props.setChange(true)

    }
    return (
        <button className="AppSet" disabled={props.disabledSet} onClick={onclickSetHandler}>
            {props.title}
        </button>
    )

}