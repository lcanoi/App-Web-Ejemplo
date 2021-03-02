import {
 SELECT_CITY,
 DELETE_CITY   
} from "./actionType"

export const selectCity = (city) => {
    localStorage.setItem("city", JSON.stringify(city))
    return {
        type: SELECT_CITY,
        payload: city
    }
}

export const deleteCity = () => {
    return {
        type: DELETE_CITY
    }
}