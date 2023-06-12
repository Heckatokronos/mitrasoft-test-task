import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import commentsSlice from "../entities/comments/model/commentsSlice";
import postsSlice from "../entities/posts/model/postsSlice";
import { fetchCommentsSaga } from "../entities/comments/model/commentsSaga";
import { fetchPostsSaga } from "../entities/posts";

function* rootSaga() {
  yield all([fetchCommentsSaga()]);
  yield all([fetchPostsSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    comments: commentsSlice,
    posts: postsSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
