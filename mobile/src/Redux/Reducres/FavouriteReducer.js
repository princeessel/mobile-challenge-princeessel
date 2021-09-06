import {
    ADD_TO_FAVOURITE,
    REMOVE_FROM_FAVOURITE,
} from "../Actions";


const FavouriteReducer = (state = {
    favouriteData: [],
}, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITE: {
            let tempData = [...state.favouriteData]
            let isAlredyExist = tempData.filter((item) => item.id == action.payload.id).length > 0;
            if (isAlredyExist) {
                return { ...state }
            }
            return {
                ...state,
                favouriteData: [...state.favouriteData, action.payload]
            };
        }
        case REMOVE_FROM_FAVOURITE: {
            let tempData = [...state.favouriteData]
            let newData = tempData.filter((item) => item.id != action.payload.id);
            return {
                ...state,
                favouriteData: newData,
            };
        }
        default:
            return state;
    }
}

export default FavouriteReducer;
