import { createStore, combineReducers } from "redux";

import MainReducer from "./store/mainReducer";

const root = combineReducers({ mainReducer: MainReducer });

export default createStore(root);
