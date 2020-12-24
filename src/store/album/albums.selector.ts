import { AppState } from "store";

export const selectAlbums = (state: AppState) => {
     return state.album.albums;
}

export const selectSingleAlbum = (state: AppState) => {
     return state.album.album
}

export const selectPhotosByAlbum = (state: AppState) => {
     return state.album.photos
}

export const selectUpdateAlbum = (state: AppState) => {
     return state.album.updateAlbum
}

export const selectFourPhots = (state: AppState) => {
     return state.album.fourPhotos
}