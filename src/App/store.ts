import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import commentsSlice from "../entities/comments/model/commentsSlice";
import postsSlice from "../entities/posts/model/postsSlice";
import { fetchCommentsSaga } from "../entities/comments/model/commentsSaga";
import { fetchPostsSaga } from "../entities/posts";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

function* rootSaga() {
  yield all([fetchCommentsSaga()]);
  yield all([fetchPostsSaga()]);
}

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  comments: commentsSlice,
  posts: postsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
