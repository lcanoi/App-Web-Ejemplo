import {
    SELECT_CITY,
    DELETE_CITY   
} from "./actionType"

const INIT_STATE = {
    city: JSON.parse(localStorage.getItem("city")) || []
}

const cities = (state = INIT_STATE, action) => {
    switch(action.type){
        case SELECT_CITY:
            return {
                ...state,
                city: action.payload
            }
        case DELETE_CITY:
            return {
                ...state,
                city: []
            }
        default:
            return state
    }

}

export default cities