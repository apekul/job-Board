import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "../../fakeJson";
// http://api.adzuna.com/v1/api/jobs/

export const fetchDataJobs = createAsyncThunk(async (_, { getState }) => {
  const { isLoading } = getState().data;
  if (isLoading) {
    return;
  }
  const { name, location, pageSize, tag, sort } = getState().params;
  const appID = process.env.REACT_APP_APP_ID;
  const appKey = process.env.REACT_APP_APP_KEY;
  const baseUrl = `https://api.adzuna.com/v1/api/jobs/${location}/search/1?app_id=${appID}&app_key=${appKey}&results_per_page=${pageSize}&`;
  // &what=${encodeURIComponent(name)}&category=${tag}
  try {
    // fetch method
  } catch (error) {
    throw error;
  }
});

export const dataSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: data.results, // set jobs to empty array []
    status: "idle",
    error: null,
    count: 5399, // set count to 0 by default
    mean: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDataJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.jobs = action.payload.results;
        state.count = action.payload.count;
        state.mean = action.payload.mean;
      })
      .addCase(fetchDataJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const dataReducer = dataSlice.reducer;
