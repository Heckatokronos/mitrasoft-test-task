import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import commentsSlice from "../entities/comments/model/commentsSlice";
import { fetchCommentsSaga } from "../entities/comments/model/commentsSaga";

function* rootSaga() {
  yield all([fetchCommentsSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    comments: commentsSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
