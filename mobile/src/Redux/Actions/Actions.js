import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from ".";
import { ApiClient } from "../../Api";
import {
    REQUEST_METEORITE_DATA,
    SUCCESS_METEORITE_DATA,
    FAILURE_METEORITE_DATA
} from "./ActionTypes";

export const onSuccessMeteriteData = (payload) => {
    return {
        type: SUCCESS_METEORITE_DATA,
        payload: payload
    }
}


export const onFailureMeteriteData = () => {
    return {
        type: FAILURE_METEORITE_DATA,
    }
}

export const onRequestMeteriteData = () => {
    return {
        type: REQUEST_METEORITE_DATA,
    }
}


export const getMeteoriteLandingsDataAction = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(onRequestMeteriteData())
        ApiClient.getMeteoriteLandingsData()
            .then((data) => {
                dispatch(onSuccessMeteriteData(data))
                resolve(data);
            }).catch((err) => {
                dispatch(onFailureMeteriteData())
                reject(err)
            })
    })
}

export const addToFavourite = (payload) => {
    return {
        type: ADD_TO_FAVOURITE,
        payload: payload
    }
}

export const removeFromFavorite = (id) => {
    return {
        type: REMOVE_FROM_FAVOURITE,
        payload: { id }
    }
}
