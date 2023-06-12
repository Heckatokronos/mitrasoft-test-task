import { createSlice } from "@reduxjs/toolkit";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  posts: Post[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  status: "idle",
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsRequested(state) {
      state.status = "idle";
    },
    postsReceived(state, action) {
      state.status = "loading";
      state.posts = action.payload;
    },
    postsRequestFailed(state, action) {
      state.status = "failed";
      state.posts = action.payload;
    },
  },
});

export const { postsRequested, postsReceived, postsRequestFailed } =
  postsSlice.actions;

export default postsSlice.reducer;
