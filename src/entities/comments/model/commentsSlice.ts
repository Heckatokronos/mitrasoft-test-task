import { createSlice } from "@reduxjs/toolkit";
import { CommentsState } from "./types";

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
