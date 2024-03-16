import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import authNonPersistSlice from "./features/auth/authNonPersistSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  authNonPersist: authNonPersistSlice,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  version: 1,
  whitelist: ["auth"],
  // blacklist:['auth'], koan se reducer persist nahi karvane hi
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
