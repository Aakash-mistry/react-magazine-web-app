import { AppState } from "store";

export const selectPhotos = (state: AppState) => {
     return state.photo.photos;
}
export const selectSinglePhoto = (state: AppState) => {
     return state.photo.singlePhoto
}

export const selectComments = (state: AppState) => {
     return state.photo.comments
}

export const selectSingleComment = (state: AppState) => {
     return state.photo.singleComment
}

export const updatePhotoAction = (state: AppState) => {
     return state.photo.updatePhoto
}

export const selectSavePhotoToAlbum = (state: AppState) => {
     return state.photo.selectAlbum
}