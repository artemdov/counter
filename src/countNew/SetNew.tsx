import React from "react";


export type SetPropsType = {
    title: string
    setCount: () => void



}

export function Set(props: SetPropsType) {

    const onclickSetHandler = () => {
        props.setCount()
    }
    return (
        <button className="AppSet" onClick={onclickSetHandler}>
            {props.title}
        </button>
    )

}