import React from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setPageSize } from "../Redux/actions/pageSizeAction";

const pageSizes = [10, 20, 30, 40, 50];

const SortPageSize = () => {
  const dispatch = useDispatch();
  const { pageSize } = useSelector((state) => state.params);

  const updatePageSize = (e) => {
    dispatch(setPageSize(e.target.value));
  };
  return (
    <div className="flex items-center gap-10 justify-end  mt-5">
      <p>Sort</p>

      {/* PageSize */}
      <div className="flex flex-col ">
        <label for="pageSize" className="text-sm font-medium ">
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
