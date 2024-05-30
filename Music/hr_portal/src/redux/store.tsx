import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userDataSlice from "./userData/userData";
import  authenticationDataSlice from "./authenticationData/authenticationData";

const rootReducer = combineReducers({
  userDataSlice: userDataSlice,
  authenticationDataSlice:authenticationDataSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: any = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true, serializableCheck: false }),

});

export type RootState = ReturnType<typeof store.getState>;

export default store;