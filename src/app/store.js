import { createStore, combineReducers } from "redux";
import auth from "../auth/reducer";

const allReducers = combineReducers({ auth });

const store = createStore(allReducers);

export default store;
