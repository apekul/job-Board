import React from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setPageSize } from "../Redux/actions/pageSizeAction";
import { setSort } from "../Redux/actions/sortAction";
import { fetchDataJobs } from "../Redux/store/fetchDataJobs";

const pageSizes = [10, 20, 30, 40, 50];
// const sortBy = ["hybrid", "date", "salary", "relevance"];
const sortBy = ["date", "salary", "relevance"];

const SortPageSize = () => {
  const dispatch = useDispatch();
  const { pageSize, sort } = useSelector((state) => state.params);

  const updatePageSize = (e) => {
    dispatch(setPageSize(e.target.value));
    dispatch(fetchDataJobs());
  };

  const updateSort = (e) => {
    dispatch(setSort(e.target.value));
    dispatch(fetchDataJobs());
  };

  return (
    <div className="flex items-center gap-10 justify-end">
      {/* Sort */}
      <div className="flex flex-col ">
        <label htmlFor="pageSize" className="text-sm font-medium ">
          Sort by
        </label>
        <select
          value={sort}
          onChange={updateSort}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
        >
          <option value="">Default</option>
          {sortBy.map((sort, index) => (
            <option key={index} value={sort}>
              {sort}
            </option>
          ))}
        </select>
      </div>

      {/* PageSize */}
      <div className="flex flex-col ">
        <label htmlFor="pageSize" className="text-sm font-medium ">
          Page Size
        </label>
        <select
          value={pageSize}
          onChange={updatePageSize}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
        >
          {pageSizes.map((size, index) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SortPageSize;
