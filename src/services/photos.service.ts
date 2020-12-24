import Axios from "axios";
import { store } from "store";
import { getCommentsByPhotoAction, getPhotoAction, getSinglePhotoAction, updatePhotoAction, getCommentByIdAction } from "store/photo/photo.actions";
import Config from "../config";
import { AddCommentBody, UpdateCommentBody, AddPhotoBody, CommentResponse, PhotoResponse, SinglePhoto, UpdatePhotoBody, SingleComment, } from "../types";

class photosServices {
  public async getPhotos() {
    try {
      const photos = await Axios.get<PhotoResponse>(
        `${Config.SERVER_URL}/photos`
      );
      store.dispatch(getPhotoAction(photos.data.data))
      // console.log(photos.data.data)
      return photos.data.data;
    } catch (err) {
      console.log(err);
    }
  }

  public async getPhotoById(id: string) {
    try {
      const photo = await Axios.get<SinglePhoto>(`${Config.SERVER_URL}/photos/${id}`);
      // console.log(photo.data.data)
      store.dispatch(getSinglePhotoAction(photo.data.data))
      return photo.data.data;

    } catch (err) {
      console.log(err);
    }
  }

  public async getCommentsByPhotoId(id: string) {
    try {
      const comments = await Axios.get<CommentResponse>(`${Config.SERVER_URL}/comments/${id}`)
      // console.log('Post from services', comments.data.data)
      store.dispatch(getCommentsByPhotoAction(comments.data.data))
      return comments.data.data
    } catch (err) {
      console.log(err)
    }
  }

  public async uploadNewPhotos(data: AddPhotoBody) {
    try {
      const newPhotoData = await Axios.post(`${Config.SERVER_URL}/new-photos`, data)
      // console.log(newPhotoData)
      return newPhotoData.data
    } catch (err) {
      console.log(err)
    }
  }

  public async deleteSpacificPhoto(id: string) {
    try {
      await Axios.delete(`${Config.SERVER_URL}/photos/delete/${id}`)
    } catch (err) {
      console.log(err)
    }
  }

  public async updatePhoto(id: string, data: UpdatePhotoBody) {
    try {
      const photo = await Axios.put(`${Config.SERVER_URL}/photos/edit/${id}`, { id, ...data })
      store.dispatch(updatePhotoAction(photo.data))
    } catch (err) {
      console.log(err)
    }
  }

  // !Comments section

  public async uploadNewComment(body: AddCommentBody, id: string) {
    try {
      const comment = await Axios.post(`${Config.SERVER_URL}/new-comment`, { ...body, photoId: body.postId })
      return comment.data
    } catch (err) {
      console.log(err)
    }
  }

  public async getCommentById(id: string) {
    try {
      const comment = await Axios.get<SingleComment | null>(`${Config.SERVER_URL}/comment/${id}`)
      store.dispatch(getCommentByIdAction(comment.data.data))
      // console.log("update from services", comment.data.data)
      return comment.data.data
    } catch (err) {
      console.log(err)
    }
  }

  public async deleteComment(id: string) {
    try {
      await Axios.delete(`${Config.SERVER_URL}/comment/delete/${id}`)
    } catch (err) {
      console.log(err)
    }
  }

  public async editComment(id: string, data: UpdateCommentBody) {
    try {
      await Axios.put(`${Config.SERVER_URL}/edit/comment/${id}`, {
        ...data
      })
    }
    catch (err) {
      console.log(err)
    }
  }

}

export default new photosServices();
