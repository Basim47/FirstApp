import { combineReducers } from "redux";
import { createStore } from "redux";
import themeSlice from "./themeSlice";
import muReducer from "./reducer";
import imageReducer from "./dpactions";

const rootReducer = combineReducers({
    muReducer,
    theme: themeSlice,
    image: imageReducer,
})

const store = createStore(rootReducer)

export default store

