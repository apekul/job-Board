import { createAsyncThunk } from "@reduxjs/toolkit";

// gb/search/1?app_id={YOUR API ID}&app_key={YOUR API KEY}&results_per_page=20&what=javascript%20developer&content-type=application/json
// http://api.adzuna.com/v1/api/jobs/

// d95c9440
// f898741df7d39e2b507a5dfb472d4353
export const fetchDataJobs = createAsyncThunk(async (_, { getState }) => {
  const { name, location, pageSize, tag } = getState().params;
  const appID = process.env.REACT_APP_APP_ID;
  const appKey = process.env.REACT_APP_APP_KEY;
  const baseUrl = `https://api.adzuna.com/v1/api/jobs/${location}/search/1?app_id=${appID}&app_key=${appKey}`;
});
