import { toast } from "react-toastify";
import { addTaskThunk, editTaskThunk, getTaskThunk } from "./taskThunk";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  userId: "",
  title: "",
  message: "",
  done: false,
  createdAt: "",
  editedAt: "",
};

export const addTask = createAsyncThunk(
  "task/addTask",
  async (task, thunkAPI) => {
    return addTaskThunk("/task/", task, thunkAPI);
  }
);

export const getTask = createAsyncThunk(
  "task/getTask",
  async (taskId, thunkAPI) => {
    return getTaskThunk(`/task/${taskId}`, thunkAPI);
  }
);

export const editTask = createAsyncThunk(
  "task/editTask",
  async ({ taskId, task }, thunkAPI) => {
    return editTaskThunk(`/task/${taskId}`, task, thunkAPI);
  }
);

export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (taskId, thunkAPI) => {
    return deleteTask(`/task/${taskId}`);
  }
);

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    handleTaskChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearTaskValues: () => {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Add task successful!");
      })
      .addCase(addTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(getTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userId = payload.userId;
        state.title = payload.title;
        state.message = payload.message;
        state.done = payload.done;
        state.createdAt = payload.createdAt;
        state.editedAt = payload.editedAt;
      })
      .addCase(getTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(editTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success("Edit task successful!");
      })
      .addCase(editTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success("Task deleted successfully");
      })
      .addCase(deleteTask.rejected, (state, { payload }) => {
        state.isLoading = true;
        toast.error(payload);
      });
  },
});

export const { handleTaskChange, clearTaskValues } = taskSlice.actions;
export default taskSlice.reducer;
