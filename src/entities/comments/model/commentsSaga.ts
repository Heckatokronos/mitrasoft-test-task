import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { COMMENTS_API } from "../../../shared";
import {
  commentsFailed,
  commentsRecevied,
  commentsRequested,
} from "./commentsSlice";
import { Comment } from "./types";
import { persistStore } from "redux-persist";
import store from "../../../app/store";

export function* fetchCommentsSaga(): any {
  const cachedData = yield call([persistStore(store), "getState"]);
  if (cachedData && cachedData.comments) {
    yield put(commentsRecevied(cachedData.comments));
  } else {
    try {
      const response: AxiosResponse<Comment[]> = yield call(
        axios.get,
        COMMENTS_API
      );
      yield put(commentsRecevied(response.data));
    } catch (error: unknown) {
      yield put(commentsFailed((error as Error).message));
    }
  }
}

export function* watchFetchComments() {
  yield takeLatest(commentsRequested.type, fetchCommentsSaga);
}
