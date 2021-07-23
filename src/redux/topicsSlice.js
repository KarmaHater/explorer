import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchTopicsApi } from "../fetchers/fetchTopics";

// First, create the thunk
export const fetchTopics = createAsyncThunk(
  "topics/fetchTopicsApi",
  async (topic, { getState }) => {
    const { cachedTopics } = getState().topics;
    if (cachedTopics[topic]) {
      // return data saved in store instead of fetching th github api
      return {
        data: {
          data: {
            topic: {
              name: topic,
              relatedTopics: cachedTopics[topic].relatedTopics,
              stargazerCount: cachedTopics[topic].stargazerCount,
            },
          },
        },
      };
    } else {
      const response = await fetchTopicsApi(topic);
      return { data: response };
    }
  }
);

const initialState = {
  topic: "",
  relatedTopics: [],
  stargazerCount: "",
  cachedTopics: {},
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

      if (!state.cachedTopics[name]) {
        state.cachedTopics = {
          ...state.cachedTopics,
          [name]: {
            stargazerCount,
            relatedTopics,
          },
        };
      }
    },
  },
});

export default topicsSlice.reducer;
