import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdCorporateFare } from "react-icons/md";
import { useSelector } from "react-redux";
import randomColor from "randomcolor";

const JobBoard = () => {
  const { jobs } = useSelector((state) => state.data);
  const [colors, setColors] = useState([]);

  const truncateCompanyName = (name, maxLength = 10) =>
    name.length > maxLength ? name.substring(0, maxLength - 3) + "..." : name;

  useEffect(() => {
    setColors(jobs.map(() => randomColor({ luminosity: "light" })));
  }, [jobs]);
  return (
    <ul className="my-5 grid grid-cols-1 xl:grid-cols-2 gap-5">
      {jobs.map((job, index) => (
        <li
          key={job.id}
          className={`flex justify-between gap-x-6 py-2 px-5 rounded-lg shadow-md border bg-gray-100 hover:bg-gray-300 duration-300 transition cursor-pointer`}
        >
          <div className="flex min-w-0 gap-x-4 items-center">
            {/* logo */}
            <div className="relative inline-block">
              <div
                className={`h-[4rem] w-24 flex-none rounded-lg`}
                style={{
                  backgroundColor: colors[index],
                }}
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-700 text-center">
                {truncateCompanyName(job.company.display_name)}
              </span>
            </div>

            <div className="min-w-0 max-w-[30rem] flex-auto">
              <p className="text-md xl:truncate font-semibold leading-6 text-gray-900">
                {job.title}
              </p>
              <div className="flex items-center gap-5">
                <p className="flex items-center gap-1 mt-1 truncate text-sm leading-5 text-gray-500">
                  <MdCorporateFare />
                  {job.company.display_name}
                </p>
                <p className="flex items-center gap-1 mt-1 truncate text-xs leading-5 text-gray-500">
                  <FaLocationDot />
                  {job.location.display_name}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end justify-center">
            <p className="text-sm leading-6 text-gray-900">
              <span>
                {job.salary_min && job.salary_max
                  ? `${job.salary_min} - ${job.salary_max} $`
                  : "Undisclosed Salary"}
              </span>
              <span>{job.contract_type && ` (${job.contract_type})`}</span>
            </p>
            <p className="mt-1 text-xs leading-5 text-gray-500 bg-gray-200 py-0.5 px-1 rounded-md">
              {job.category.label}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default JobBoard;
