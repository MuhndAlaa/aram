import { combineReducers } from "redux";
import { authReducer, userReducer } from "./userReducer";

export const allReducers = combineReducers({
    user:userReducer,
    auth:authReducer
})