import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NasaDataReducer from './NasaDataReducer'
import FavouriteReducer from './FavouriteReducer';

/**
 * Optional
 * Combine Reducers if we have more than one reducer
 * Else Direct bind with  actions
 */
const AppReducers = combineReducers({
    nasaDataReducer:NasaDataReducer,
    favouriteReducer:FavouriteReducer,
});

/**
 * Bind action with reducers
 */ 
const rootReducer = (state, action) => {
    return AppReducers(state, action);
}

/**
 *   Persisit storage config data base name , storage type
 */
const persistConfig = {
    key: 'list',
    storage: AsyncStorage,
    blacklist: ['nasaDataReducer'] 
};


/**
 *  Persist Reducer to store data offline
 */
const pReducer = persistReducer(persistConfig, rootReducer);

/**
 *  For Asnchronus Actions Middleware used and store created
 */
let store = createStore(pReducer, applyMiddleware(thunk));

/**
 *  Check When data is loaded from storage to redux store
 */
const persistor = persistStore(store);

export { persistor, store };