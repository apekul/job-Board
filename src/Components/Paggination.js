import React, { useState, useEffect } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../Redux/actions/pageAction";
import { fetchDataJobs } from "../Redux/store/fetchDataJobs";

const Paggination = () => {
  // get max count of fetch data, divide by pageSize to get pages
  const dispatch = useDispatch();
  const { page, pageSize } = useSelector((state) => state.params);
  const { count, jobs } = useSelector((state) => state.data);
  const [totalPages, setTotalPages] = useState(1);

  const updatePage = (value) => {
    dispatch(setPage(value));
  };

  const handleNextPrevPage = (type) => {
    if (page === 1 && type === "prev") return;
    if (page === totalPages && type === "next") return;
    dispatch(setPage(type === "next" ? page + 1 : page - 1));
  };

  useEffect(() => {
    const newTotalPages = Math.ceil(count / pageSize);
    setTotalPages(newTotalPages);
  }, [count, pageSize]);

  useEffect(() => {
    dispatch(fetchDataJobs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      {jobs.length !== 0 && (
        <div className="flex items-center justify-center border-t border-gray-200 px-4 py-3 sm:px-6">
          <div className="flex sm:flex-1 sm:items-center sm:justify-center">
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <p
                  onClick={() => handleNextPrevPage("prev")}
                  className={`cursor-pointer relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0
              ${
                page === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "hover:bg-gray-50"
              }`}
                >
                  <span className="sr-only">Previous</span>
                  <FaLongArrowAltLeft className="h-5 w-5" aria-hidden="true" />
                </p>
                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                {Array.from({ length: totalPages }, (v, i) => (v = i + 1))
                  .filter((value, index) => {
                    if (page <= 2) {
                      // If on the first or second page, display the current page and the next 4 pages if available
                      return index < 5;
                    } else if (page >= totalPages - 1) {
                      // If on the second to last or last page, display the last 5 pages if available
                      return index >= totalPages - 5;
                    } else {
                      // Otherwise, display the current page and the next two pages if available
                      return value >= page - 2 && value <= page + 2;
                    }
                  })
                  .map((value, index) => (
                    <p
                      key={index}
                      aria-current="page"
                      onClick={() => updatePage(value)}
                      className={`select-none cursor-pointer relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                  ${
                    value === page
                      ? "text-white bg-indigo-600"
                      : "text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  }`}
                    >
                      {value}
                    </p>
                  ))}
                {/* <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span> */}

                <p
                  onClick={() => handleNextPrevPage("next")}
                  className={`cursor-pointer relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0
              ${
                page === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "hover:bg-gray-50"
              }`}
                >
                  <span className="sr-only">Next</span>
                  <FaLongArrowAltRight className="h-5 w-5" aria-hidden="true" />
                </p>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Paggination;
