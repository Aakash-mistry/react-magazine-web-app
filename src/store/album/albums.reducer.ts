import { Albums, Photo } from "types";

export interface AlbumReducerState {
     albums: Albums[],
     album: Albums | null,
     photos: Photo[]
     updateAlbum: Albums | null,
     fourPhotos: Photo[]
}

const initialState: AlbumReducerState = {
     albums: [],
     album: null,
     updateAlbum: null,
     photos: [],
     fourPhotos: []
}

interface Action {
     type: string;
     payload?: any;
}

export default function AlbumReducer(state: AlbumReducerState = initialState, action: Action) {
     switch (action.type) {
          case 'GET_ALBUMS_ACTION':
               return {
                    ...state,
                    albums: action.payload,
               }
          case 'GET_SINGLE_ALBUM_ACTION':
               return {
                    ...state,
                    album: action.payload
               }
          case 'GET_PHOTOS_BY_ALBUM_ID':
               return {
                    ...state,
                    photos: action.payload
               }
          case 'UPDATE_ALBUMS_BY_ID':
               return {
                    ...state,
                    album: action.payload
               }
          case 'GET_FOUR_PHOTOS':
               return {
                    ...state,
                    fourPhotos: action.payload
               }
          default:
               return {
                    ...state,
               }
     }
}