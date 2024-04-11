import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const gCode = {
  gb: "United Kingdom",
  us: "United States",
  at: "Austria",
  au: "Australia",
  be: "Belgium",
  br: "Brazil",
  ca: "Canada",
  ch: "Switzerland",
  de: "Germany",
  es: "Spain",
  fr: "France",
  in: "India",
  it: "Italy",
  mx: "Mexico",
  nl: "Netherlands",
  nz: "New Zealand",
  pl: "Poland",
  sg: "Singapore",
  za: "South Africa",
};

// name
// location
// job category tags fetched by geo location code
const SearchBox = () => {
  return (
    <div className="flex gap-3">
      {/* Name */}
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">
            <FaSearch />
          </span>
        </div>
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search"
        />
      </div>

      {/* Location */}
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">
            <FaSearch />
          </span>
        </div>
        <label htmlFor="currency" className="sr-only">
          Currency
        </label>
        <select
          id="currency"
          name="currency"
          className="h-full rounded-md border-0 bg-transparent py-0 pl-10 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
        >
          <option>USD</option>
          <option>CAD</option>
          <option>EUR</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBox;
