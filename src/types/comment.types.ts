export interface Comment {
     postId: string;
     _id: string;
     name: string;
     email: string;
     body: string;
}

export interface SingleComment {
     data: Comment | null;
}

export interface CommentResponse {
     data: Comment[];
}

export type AddCommentBody = Pick<
     Comment,
     "name" | "postId" | "email" | "body"
>;

export type UpdateCommentBody = Pick<Comment, "name" | "email" | "body">;
