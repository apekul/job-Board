import React from "react";
import JobBoard from "./Components/JobBoard";
import SearchBox from "./Components/SearchBox";
import Paggination from "./Components/Paggination";
import SortPageSize from "./Components/SortPageSize";
import StatusDisplay from "./Components/StatusDisplay";

function App() {
  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40 min-h-[100vh] flex flex-col justify-between">
      <div>
        <SearchBox />
        <div className="flex items-center justify-between mt-5">
          <StatusDisplay />
          <SortPageSize />
        </div>
        <JobBoard />
      </div>
      <Paggination />
    </div>
  );
}

export default App;
