import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDataJobs = createAsyncThunk(
  "data/fetchData",
  async (_, { getState }) => {
    const { isLoading } = getState().data;
    if (isLoading) {
      return;
    }
    const { name, country, pageSize, page, tag, sort } = getState().params;
    const appID = process.env.REACT_APP_APP_ID;
    const appKey = process.env.REACT_APP_APP_KEY;
    const baseUrl = `https://api.adzuna.com/v1/api/jobs/${country}/search/${page}?app_id=${appID}&app_key=${appKey}&results_per_page=${pageSize}`;
    let fullUrl = baseUrl;
    if (name) fullUrl += `&what=${encodeURIComponent(name)}`;
    if (tag) fullUrl += `&category=${tag}`;
    if (sort) fullUrl += `&sort_by=${sort}`;

    try {
      const response = await fetch(fullUrl);
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const dataSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [], // set jobs to empty array []
    status: "idle",
    error: null,
    count: 0, // set count to 0 by default
    mean: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataJobs.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchDataJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.jobs = action.payload.results;
        state.count = action.payload.count;
        state.mean = action.payload.mean;
        state.error = null;
      })
      .addCase(fetchDataJobs.rejected, (state, action) => {
        console.log(action.error);
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const dataReducer = dataSlice.reducer;
