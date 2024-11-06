import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserFromCookies } from "../../utils/cookies";
import {
  clearAuthStoreThunk,
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk,
} from "./authThunk";
import { toast } from "react-toastify";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user, thunkAPI) => {
    return loginUserThunk("auth/login", user, thunkAPI);
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    return logoutUserThunk("auth/logout", thunkAPI);
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk("auth/register", user, thunkAPI);
  }
);

export const clearAuthStore = createAsyncThunk(
  "auth/clearStore",
  clearAuthStoreThunk
);

const initialState = {
  user: getUserFromCookies(),
  loggedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedInUser: (state, { payload }) => {
      state.loggedIn = payload.loggedIn;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        state.loggedIn = true;
        toast.success(`Login successful! Welcome Back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, payload) => {
        state.isLoading = false;
        state.loggedIn = false;
        state.user = null;
        toast.success("Logout successful!");
      })
      .addCase(logoutUser.rejected, (state,payload) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, payload) => {
        state.isLoading = false;
        toast.success("Register User Successfully");
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(clearAuthStore.rejected, () => {
        toast.error("There was an error");
      });
  },
});

export const { loggedInUser } = authSlice.actions;
export default authSlice.reducer;
