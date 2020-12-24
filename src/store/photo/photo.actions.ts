import { Comment, Photo } from "types";

export const getPhotoAction = (photo: Photo[]) => {
     return {
          type: 'GET_PHOTO_ACTION',
          payload: photo,
     }
}

export const getSinglePhotoAction = (photo: Photo) => {
     return {
          type: 'GET_SINGLE_PHOTO_ACTION',
          payload: photo
     }
}

export const updatePhotoAction = (photo: Photo) => {
     return {
          type: 'UPDATE_PHOTO_ACTION',
          payload: photo
     }
}

export const getCommentsByPhotoAction = (comments: Comment[]) => {
     return {
          type: 'GET_COMMENTS_BY_PHOTO',
          payload: comments
     }
}

export const newCommentAction = (comment: Comment) => {
     return {
          type: 'NEW_COMMENT_BY_USER',
          payload: comment
     }
}

export const getCommentByIdAction = (comment: Comment) => {
     return {
          type: 'GET_COMMENT_BY_ID',
          payload: comment
     }
}

export const saveToAlbum = (photo: Photo) => {
     return {
          type: 'SELECT_ALBUM',
          payload: photo
     }
}