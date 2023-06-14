import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { POSTS_API } from "../../../shared";
import {
  postsReceived,
  postsRequestFailed,
  postsRequested,
} from "./postsSlice";
import { Post } from "./types";
import { persistStore } from "redux-persist";
import store from "../../../app/store";

export function* fetchPostsSaga(): any {
  const cachedData = yield call([persistStore(store), "getState"]);
  if (cachedData && cachedData.posts) {
    yield put(postsReceived(cachedData.posts));
  } else {
    try {
      const respone: AxiosResponse<Post[]> = yield call(axios.get, POSTS_API);
      yield put(postsReceived(respone.data));
    } catch (error: unknown) {
      yield put(postsRequestFailed((error as Error).message));
    }
  }
}

export function watchPostsSaga() {
  return takeLatest(postsRequested.type, fetchPostsSaga);
}
