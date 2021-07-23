import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchTopicsApi } from "../fetchers/fetchTopics";

// First, create the thunk
export const fetchTopics = createAsyncThunk(
  "topics/fetchTopicsApi",
  async (topic) => {
    const response = await fetchTopicsApi(topic);
    return { data: response };
  }
);

const initialState = {
  topic: "",
  relatedTopics: [],
  stargazerCount: "",
};

export const topicsSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopics.fulfilled]: (state, { payload }) => {
      const { name, relatedTopics, stargazerCount } = payload.data.data.topic;
      state.topic = name;
      state.relatedTopics = relatedTopics;
      state.stargazerCount = stargazerCount;
    },
  },
});

export default topicsSlice.reducer;
