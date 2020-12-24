import { Comment, Photo } from "types";

export interface PhotoReducerState {
     photos: Photo[],
     singlePhoto: Photo | null,
     updatePhoto: Photo | null,
     // comment

     comments: Comment[],
     newComment: Comment | null,
     updateComment: Comment | null,
     singleComment: Comment | null,

     // albums
     selectAlbum: Photo | null
}

const initialState: PhotoReducerState = {
     photos: [],
     comments: [],
     singlePhoto: null,
     updatePhoto: null,

     // comment
     newComment: null,
     updateComment: null,
     singleComment: null,

     // albums
     selectAlbum: null
}

interface Action {
     type: string;
     payload?: any;
}

export default function PhotoReducer(state: PhotoReducerState = initialState, action: Action) {
     switch (action.type) {
          case 'GET_PHOTO_ACTION':
               return {
                    ...state,
                    photos: action.payload,
               }
          case 'GET_SINGLE_PHOTO_ACTION':
               return {
                    ...state,
                    singlePhoto: action.payload
               }
          case 'GET_COMMENTS_BY_PHOTO':
               return {
                    ...state,
                    comments: action.payload
               }
          case 'GET_COMMENT_BY_ID':
               return {
                    ...state,
                    singleComment: action.payload
               }
          case 'UPDATE_PHOTO_ACTION':
               return {
                    ...state,
                    updatePhoto: action.payload
               }
          case 'SELECT_ALBUM':
               return {
                    ...state,
                    saveAlbum: action.payload
               }
          default:
               return {
                    ...state,
               }
     }
}