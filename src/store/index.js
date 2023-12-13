import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import themeSlice from "./themeSlice";
import muReducer from "./reducer";
import imageReducer from "./dpactions";
import { thunk } from "redux-thunk";
import personReducer from "./actions/userAction";

const rootReducer = combineReducers({
    muReducer,
    user: personReducer,
    theme: themeSlice,
    image: imageReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store

