import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userReducer";

export const store = configureStore({
  reducer: {
    userInfo: userReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
