import {createStore} from "redux";
import {reducer} from "./reducers/count-reducer";

export const store  = createStore(reducer)
export type AppStateType = ReturnType<typeof reducer>

// @ts-ignore
window.store = store