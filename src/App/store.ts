import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
