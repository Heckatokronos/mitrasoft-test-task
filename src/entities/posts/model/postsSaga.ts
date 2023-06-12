import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { POSTS_API } from "../../../shared/api/api";
import {
  Post,
  postsReceived,
  postsRequestFailed,
  postsRequested,
} from "./postsSlice";

export function* fetchPostsSaga() {
  try {
    const respone: AxiosResponse<Post[]> = yield call(axios.get, POSTS_API);
    yield put(postsReceived(respone.data));
  } catch (error: unknown) {
    yield put(postsRequestFailed((error as Error).message));
  }
}

export function watchPostsSaga() {
  return takeLatest(postsRequested.type, fetchPostsSaga);
}
