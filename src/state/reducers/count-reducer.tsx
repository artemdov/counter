
export const CURRENT_COUNT ='CURRENT_COUNT'
export const RESET_IN_START_VALUE ='RESET_IN_START_VALUE'
export const INCREMENT_VALUE ='INCREMENT_VALUE'
export const SET_COUNT ='SET_COUNT'
export const CHANGE_DISPLAY = 'CHANGE_DISPLAY'
export const SET_VALUE_START = 'SET_VALUE_START'
export const SET_VALUE_MAX = 'SET_VALUE_MAX'
export const SET_CHANGE_VALUE = 'SET_CHANGE_VALUE'



export type CurrentCountType = {
    type: typeof CURRENT_COUNT
    count: number
}
export type ResetInStartType = {
    type: typeof RESET_IN_START_VALUE
    valStart: number
}
export type IncrementType = {
    type:typeof INCREMENT_VALUE
}
export type SetCountType = {
    type: typeof SET_COUNT
    valStart: number
}
export type ChangeDisplayType = {
    type: typeof CHANGE_DISPLAY
    value: boolean
}
export type SetValueStartType = {
    type: typeof SET_VALUE_START
    valStart: number
}
export type SetValueMaxType = {
    type: typeof SET_VALUE_MAX
    valMax: number
}
export type SetChangeValueType = {
    type: typeof SET_CHANGE_VALUE
    change: boolean
}
export type ActionType =
    CurrentCountType | ResetInStartType
    | IncrementType | SetCountType
    | ChangeDisplayType | SetValueStartType
    | SetValueMaxType | SetChangeValueType
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
        // case CURRENT_COUNT: {
        //     return{
        //         ...state,count: action.count
        //     }
        // }
        /*case CHANGE_DISPLAY: {
       return{
           ...state,
           change: action.value
       }
   }*/
        case INCREMENT_VALUE: {
            return{
                ...state,count: state.count + 1
            }
        }
        case RESET_IN_START_VALUE: {
            return{
                ...state,count: action.valStart
            }
        }
        case SET_COUNT: {
            return{
                ...state,count: action.valStart
            }
        }
        case SET_VALUE_START: {
            return{
                ...state,
                count: action.valStart
            }
        }

        case SET_VALUE_MAX: {
            return{
                ...state,
                count: action.valMax
            }
        }
        case SET_CHANGE_VALUE: {
            return{
                ...state,
                change: action.change
            }
        }

        default:
            return state

    }
}


/*export const changeDisplayAC = (value: boolean): ChangeDisplayType => {
    return {type: CHANGE_DISPLAY, value}
}*/
export const setCountAC = (valStart: number): SetCountType => {
    return {type: SET_COUNT, valStart}
}
export const incrementValueAC = (): IncrementType => {
    return {type: INCREMENT_VALUE}
}
export const resetStartValueAC = (valStart: number): ResetInStartType => {
    return {type: RESET_IN_START_VALUE, valStart}
}
export const setValStartAC = (valStart: number): SetValueStartType => {
    return {type: SET_VALUE_START, valStart}
}
export const setValMaxAC = (valMax: number): SetValueMaxType => {
    return {type: SET_VALUE_MAX, valMax}
}
export const setChangeValueAC = (change: boolean): SetChangeValueType => {
    return {type: SET_CHANGE_VALUE, change}
}
/*export const CurrentCountAC = (count: number): CurrentCountType => {
    return {type: CURRENT_COUNT, count}
}*/




