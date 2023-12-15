import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import themeSlice from "./actions/themeSlice";
import muReducer from "./reducer";
import imageReducer from "./dpactions";
import { thunk } from "redux-thunk";
import personReducer from "./actions/userAction";

const rootReducer = combineReducers({
    muReducer,
    user: personReducer,
    theme: themeSlice,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store

