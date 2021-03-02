import { combineReducers } from "redux"

import cities from "./cities/reducer"
import booksState from "./books/reducer"

const rootReducer = combineReducers({
    cities,
    booksState
})

export default rootReducer