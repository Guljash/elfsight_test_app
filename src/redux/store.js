import {combineReducers, createStore} from 'redux'
import autorsReducer from "./reducers/autorsReducer"
import albumsReducer from "./reducers/albumsReducer"
import photosReducer from "./reducers/photosReducer"

let reducers = combineReducers({
    autorsPage: autorsReducer,
    albumsPage: albumsReducer,
    photosPage: photosReducer
});

let store = createStore(reducers);

export default store