import { Albums, Photo } from "types";

export const getAlbumAction = (album: Albums[]) => {
     return {
          type: 'GET_ALBUMS_ACTION',
          payload: album,
     }
}

export const getSingleAlbumAction = (album: Albums) => {
     return {
          type: 'GET_SINGLE_ALBUM_ACTION',
          payload: album
     }
}

export const getPhotosByAlbumIdAction = (photos: Photo[]) => {
     return {
          type: 'GET_PHOTOS_BY_ALBUM_ID',
          payload: photos
     }
}

export const updateAlbumAction = (album: Albums) => {
     return {
          type: 'UPDATE_ALBUMS_BY_ID',
          payload: album
     }
}

export const getFourPhotosAction = (photos: Photo[]) => {
     return {
          type: 'GET_FOUR_PHOTOS',
          payload: photos
     }
}