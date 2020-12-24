import Axios from "axios";
import Config from "../config";
import { Photo, Comment } from "../types";

class photosServices {
  public async getPhotos() {
    try {
      const photos = await Axios.get<Photo[]>(
        `${Config.SERVER_URL}/photos?_limit=20`
      );
      // console.log('render from service', photos.data)
      return photos.data;
    } catch (err) {
      console.log(err);
    }
  }

  public async getPhotoById(id: string) {
    try {
      const photo = await Axios.get<Photo>(`${Config.SERVER_URL}/photos/${id}`);
      // const photoId = photo.data.id
      return photo.data;

    } catch (err) {
      console.log(err);
    }
  }

  public async getCommentsByPhotoId(id: string) {
    try {
      const comments = await Axios.get<Comment[]>(`${Config.SERVER_URL}/comments?postId=${id}`)
      // console.log('Post from services', post.data)
      return comments.data
    } catch (err) {
      console.log(err)
    }
  }
}

export default new photosServices();
