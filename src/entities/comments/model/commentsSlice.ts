import { createSlice } from "@reduxjs/toolkit";

export interface Comment {
  postId: number;
  id: number;
  email: string;
  body: string;
}

interface CommentsState {
  comments: Comment[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: CommentsState = {
  comments: [],
  status: "idle",
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    commentsRequested(state) {
      state.status = "loading";
    },
    commentsRecevied(state, action) {
      state.comments = action.payload;
      state.status = "idle";
    },
    commentsFailed(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { commentsRequested, commentsRecevied, commentsFailed } =
  commentsSlice.actions;

export default commentsSlice.reducer;
