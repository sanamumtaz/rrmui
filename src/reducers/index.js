import {combineReducers} from "redux";
import ReducerDS from "./reducer-doublescreen";

const allReducers = combineReducers({
    doublescreen: ReducerDS
});

export default allReducers;