import { toast } from "react-toastify";
import { deleteUserThunk, editUserThunk, getUserThunk } from "./userThunk";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  name: "",
  email: "",
  password: "",
  createdAt: "",
  editedAt: "",
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async (userId, thunkAPI) => {
    return getUserThunk(`/user/${userId}`, thunkAPI);
  }
);

export const editUser = createAsyncThunk(
  "user/editUser",
  async ({ userId, user }, thunkAPI) => {
    return editUserThunk(`/user/${userId}`, user, thunkAPI);
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId, thunkAPI) => {
    return deleteUserThunk(`/user/${userId}`, thunkAPI);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleUserChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearUserValues: () => {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.name = payload.name;
        state.email = payload.email;
        state.createdAt = payload.createdAt;
        state.editedAt = payload.editedAt;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(editUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(editUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success("User deleted successfully");
      })
      .addCase(deleteUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { handleUserChange, clearUserValues } = userSlice.actions;
export default userSlice.reducer;
