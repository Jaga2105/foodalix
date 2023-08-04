// src/features/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    signInWithRedirect,
  // signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "./firebase.js";

import { doc, setDoc } from "firebase/firestore";

// Async Thunk to check authentication state and set the user
export const checkAuthState = createAsyncThunk(
  "auth/checkAuthState",
  async () => {
    return await new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        resolve(currentUser);
        unsubscribe();
      });
    });
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ email, password }) => {
    await createUserWithEmailAndPassword(auth, email, password);
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }) => {
    await signInWithEmailAndPassword(auth, email, password);
  }
);

export const googleSignIn = createAsyncThunk("auth/googleSignIn", async () => {
  const provider = new GoogleAuthProvider();
  // provider.setCustomParameters({
  //   prompt: "select_account",
  //   opener: null, // Set opener to null to avoid COOP error
  // });
  await signInWithRedirect(auth, provider);
});

export const logOut = createAsyncThunk("auth/logOut", async () => {
  await signOut(auth);
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthState.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuthState.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signIn.rejected, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state) => {
        state.loading = false;
        console.log(state.user)
      })
      .addCase(googleSignIn.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
