export interface Albums {
  _id: string;
  title: string;
}

export interface SingleAlbumReponse {
  data: {
    album: Albums;
  }
}

export interface AlbumResponse {
  data: Albums[];
  status_code: number;
}

export type createNewAlbum = Pick<Albums, "title">
export type UpdateAlbum = Pick<Albums, "title">
