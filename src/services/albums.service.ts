import Axios from "axios";
import { Albums } from "types";
import Config from "../config";

class AlbumService {
  public async getAlbums() {
    try {
      const albums = await Axios.get<Albums[]>(`${Config.SERVER_URL}/albums?`);
      // console.log('render from service', photos.data)
      return albums.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new AlbumService();
