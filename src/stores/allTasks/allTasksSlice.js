import { toast } from "react-toastify";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  isLoading: false,
  tasks: [],
  totalTasks: 0,
};

export const getAllTasks = createAsyncThunk(
  "task/getTasks",
  async (_, thunkAPI) => {
    return getAllTasks("/task/", thunkAPI);
  }
);

const allTasksSlice = createSlice({
  name: "allTasks",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    clearAllTasksValue: () => {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTasks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.tasks = payload.tasks;
        state.totalTasks = payload.count;
      })
      .addCase(getAllTasks.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { showLoading, hideLoading, clearAllTasksValue } =
  allTasksSlice.actions;
export default allTasksSlice.reducer;
