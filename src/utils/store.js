import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";
import thunkMiddleware from "redux-thunk"

const store = configureStore({
  reducer : {
    auth: authSlice,
    cart : cartSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
});


export default store;