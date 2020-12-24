import { Store, combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import photoReducer, { PhotoReducerState } from './photo/photo.reducer';
import albumReducer, { AlbumReducerState } from './album/albums.reducer';
export interface AppState {
     photo: PhotoReducerState;
     album: AlbumReducerState;
}



const appReducer = combineReducers<AppState>({
     photo: photoReducer,
     album: albumReducer
});


export let store: Store<AppState>;

export const configureStore = () => {
     store = createStore(appReducer, composeWithDevTools(
          applyMiddleware(),
     ))
}