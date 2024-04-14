import React from "react";
import JobBoard from "./Components/JobBoard";
import SearchBox from "./Components/SearchBox";
// import { data } from "./fakeJson";
import Paggination from "./Components/Paggination";
import SortPageSize from "./Components/SortPageSize";
import { useSelector } from "react-redux";
// http://api.adzuna.com:80/v1/api/jobs/{country}/search/1?app_id={YOUR_APP_ID}&app_key={YOUR_APP_KEY}&results_per_page={20}&what={javascript%20developer}&what_exclude=java&where=london&sort_by=salary&content-type=application/json

function App() {
  // const country = useSelector((state) => state.params.country);
  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40">
      <SearchBox />
      <SortPageSize />
      <JobBoard />
      <Paggination />
    </div>
  );
}

export default App;
