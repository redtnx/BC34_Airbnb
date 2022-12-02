import { configureStore } from "@reduxjs/toolkit";
import sagas from "../sagas";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "./createRootReducer";

const sagaMiddleware = createSagaMiddleware();

export default function configureAppStore(preloadedState = {}) {
  const store = configureStore({
    reducer: createRootReducer(),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
    preloadedState,
    enhancers: [],
  });

  sagaMiddleware.run(sagas);

  return store;
}
