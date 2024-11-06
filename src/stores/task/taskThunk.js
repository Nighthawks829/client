import { thunk } from "redux-thunk";
import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { clearTaskValues } from "./taskSlice";

export const addTaskThunk = async (url, task, thunkAPI) => {
  try {
    const response = await customFetch.post(url, task);
    thunkAPI.dispatch(clearTaskValues());
    return response.data.task;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const getTaskThunk = async (url, thunkAPI) => {
  try {
    const response = await customFetch.get(url);
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const editTaskThunk = async (url, task, thunkAPI) => {
  try {
    const response = await customFetch.patch(url, task);
    thunkAPI.dispatch(clearTaskValues());
    return response.data.task;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const deleteTask = async (url, thunkAPI) => {
  try {
    const response = await customFetch.delete(url);
    thunkAPI.dispatch(clearTaskValues());
    return response.data.msg;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
