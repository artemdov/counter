import {Simulate} from "react-dom/test-utils";

export const CURRENT_COUNT ='CURRENT_COUNT'
export const RESET_IN_START_VALUE ='RESET_IN_START_VALUE'
export const INCREMENT_VALUE ='INCREMENT_VALUE'
export const SET_VALUE ='SET_VALUE'
export const CHANGE_DISPLAY = 'CHANGE_DISPLAY'


export type CurrentCountType = {
    type: typeof CURRENT_COUNT
    count: number


}
export type ResetInStartType = {
    type: typeof RESET_IN_START_VALUE
    count: number
    valStart: number

}
export type IncrementType = {
    type:typeof INCREMENT_VALUE
    count: number
}
export type SetValueType = {
    type: typeof SET_VALUE
    count: number
    valStart: number

}
export type ChangeDisplayType = {
    type: typeof CHANGE_DISPLAY
    change: boolean
}
export type ActionType = CurrentCountType | ResetInStartType | IncrementType | SetValueType | ChangeDisplayType
export type InitialStateType = {
    change: boolean,
    count: number,
    valMax: number,
    valStart: number
}
const InitialState:InitialStateType = {
    change: false,
    count: 0,
    valMax: 0,
    valStart: 0
}

export const reducer = (state=InitialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case CURRENT_COUNT: {
            return{
                ...state,count: action.count
            }
        }
        case RESET_IN_START_VALUE: {
            return{
                ...state,count: action.valStart
            }
        }
        case INCREMENT_VALUE: {
            return{
                ...state,count: action.count + 1
            }
        }
        case SET_VALUE: {
            return{
                ...state,count: action.valStart
            }
        }
        case CHANGE_DISPLAY: {
            return{
                ...state,change: action.change
            }
        }
        default:
            return state

    }
}

export const changeDisplayAC = (change: boolean): ChangeDisplayType => {
    return {type: CHANGE_DISPLAY, change}
}
export const setValueAC = (count: number, valStart: number): SetValueType => {
    return {type: SET_VALUE, count, valStart}
}
export const IncrementValueAC = (count: number): IncrementType => {
    return {type: INCREMENT_VALUE, count}
}
export const ResetStartValueAC = (count: number, valStart: number): ResetInStartType => {
    return {type: RESET_IN_START_VALUE, count, valStart}
}
export const CurrentCountAC = (count: number): CurrentCountType => {
    return {type: CURRENT_COUNT, count}
}


