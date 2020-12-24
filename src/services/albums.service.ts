import Axios from "axios";
import { store } from "store";
import { getAlbumAction, getSingleAlbumAction, getPhotosByAlbumIdAction, updateAlbumAction } from "store/album/album.action";
import { AlbumResponse, createNewAlbum, PhotoResponse, SingleAlbumReponse, UpdateAlbum } from "types";
import Config from "../config";

class AlbumService {
  public async getAlbums() {
    try {
      const albums = await Axios.get<AlbumResponse>(`${Config.SERVER_URL}/albums?`);
      store.dispatch(getAlbumAction(albums.data.data))
      // console.log(albums.data.data)
      return albums.data.data;
    } catch (err) {
      console.log(err);
    }
  }

  public async getAlbumById(id: string) {
    try {
      const singleAlbum = await Axios.get<SingleAlbumReponse>(`${Config.SERVER_URL}/albums/${id}`)
      store.dispatch(getSingleAlbumAction(singleAlbum.data.data.album))
      return singleAlbum.data.data.album;
    } catch (err) {
      console.log(err)
    }
  }

  public async getPhotosByAlbums(id: string) {
    try {
      const albumPhotos = await Axios.get<PhotoResponse>(`${Config.SERVER_URL}/album-photos/${id}`)
      // console.log("res from serv", albumPhotos.data.data)
      store.dispatch(getPhotosByAlbumIdAction(albumPhotos.data.data))
      return albumPhotos.data.data
    } catch (err) {
      console.log(err)
    }
  }

  public async createNewAlbum(data: createNewAlbum) {
    try {
      const album = await Axios.post(`${Config.SERVER_URL}/new-album`, data)
      console.log(album)
    } catch (err) {
      console.log(err)
    }
  }

  public async updateAlbum(id: string, data: UpdateAlbum) {
    try {
      const album = await Axios.put(`${Config.SERVER_URL}/edit/album/${id}`, { id, ...data })
      store.dispatch(updateAlbumAction(album.data.data.album))
    } catch (err) {
      console.log(err)
    }
  }

  public async deleteSpacificAlbum(id: string) {
    try {
      await Axios.delete(`${Config.SERVER_URL}/albums/delete/${id}`)
    } catch (err) {
      console.log(err)
    }
  }

}


export default new AlbumService();
