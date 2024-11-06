import customFetcch, { checkForUnauthorizedResponse } from "../../utils/axios";

export const getAllTasksThunk = async (url, thunkAPI) => {
  try {
    const response = await customFetcch.get(url);
    return response.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};