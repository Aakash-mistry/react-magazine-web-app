export interface Photo {
  _id: string;
  title: string;
  thumbnailUrl: string;
  albumId: string;
  createdAt: Date;
}

export interface SinglePhoto {
  data: Photo | null;
}

export interface PhotoResponse {
  success: boolean;
  data: Photo[];
  status_code: number;
}

export type AddPhotoBody = Pick<Photo, "title" | "thumbnailUrl">;
export type UpdatePhotoBody = Pick<Photo, "title" | "thumbnailUrl">;
