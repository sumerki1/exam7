import { combineReducers } from "redux";
import { likeReducer } from "./likeReducer";
import { korzinaSlice } from "./korzinaSlice";

const rootReducer = combineReducers({
    likeReducer: likeReducer,
    korzinaSlice: korzinaSlice
})
export { rootReducer }