import {
 SAVE_BOOKS,
 DELETE_BOOKS   
} from "./actionType"

export const saveBooks = (lstBooks) => {
    localStorage.setItem("books", JSON.stringify(lstBooks))
    return {
        type: SAVE_BOOKS,
        payload: lstBooks
    }
}

export const deleteBooks = () => {
    return {
        type: DELETE_BOOKS
    }
}