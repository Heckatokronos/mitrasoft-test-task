export interface Comment {
  postId: number;
  id: number;
  email: string;
  body: string;
}

export interface CommentsState {
  comments: Comment[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}
