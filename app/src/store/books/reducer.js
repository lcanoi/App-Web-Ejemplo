import {
    SAVE_BOOKS,
    DELETE_BOOKS   
} from "./actionType"

const INIT_STATE = {
    books: JSON.parse(localStorage.getItem("books")) || [],
}

const booksState = (state = INIT_STATE, action) => {
    switch(action.type){
        case SAVE_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case DELETE_BOOKS:
            return {
                ...state,
                books: []
            }
        default:
            return state
    }

}

export default booksState