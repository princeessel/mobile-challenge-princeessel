import {
    REQUEST_METEORITE_DATA,
    SUCCESS_METEORITE_DATA,
    FAILURE_METEORITE_DATA
} from "../Actions";

const initialState = {
    meteroitData : [],
    isLoading : false
}

const AgentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_METEORITE_DATA:{
            
            return {
                ...state,
                isLoading:true
            };
        }
        case SUCCESS_METEORITE_DATA:{
            return {
                ...state,
                meteroitData : action.payload,
                isLoading: false,
            };
        }
        case FAILURE_METEORITE_DATA:{
            return {
                ...state,
                isLoading: false
            };
        }
        default:
            return state;
    }
}

export default AgentsReducer;
