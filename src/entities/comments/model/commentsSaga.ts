import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { COMMENTS_API } from "../../../shared/api/api";
import {
  commentsFailed,
  commentsRecevied,
  commentsRequested,
} from "./commentsSlice";

export function* fetchCommentsSaga() {
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

export function* watchFetchComments() {
  yield takeLatest(commentsRequested.type, fetchCommentsSaga);
}
