import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./stores/auth/authSlice";
import userSlice from "./stores/user/userSlice";
import taskSlice from "./stores/task/taskSlice";
import allTasksSlice from "./stores/allTasks/allTasksSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    task: taskSlice,
    allTasks: allTasksSlice,
  },
});
