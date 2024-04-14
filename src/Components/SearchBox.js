import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { categories } from "../fakeJson";
import { gCode } from "../fakeJson";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../Redux/actions/nameAction";
import { setCountry } from "../Redux/actions/countryAction";
import { setTag } from "../Redux/actions/tagAction";

// name
// location
// job category tags fetched by geo location code
const SearchBox = () => {
  const dispatch = useDispatch();
  const { name, country, tag } = useSelector((state) => state.params);

  const updateName = (e) => {
    dispatch(setName(e.target.value));
  };

  const updateCountry = (e) => {
    dispatch(setCountry(e.target.value));
  };

  const updateTag = (category) => {
    dispatch(setTag(category === tag ? "" : category));
  };

  return (
    <div className="flex gap-3 flex-col">
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
            value={name}
            className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search"
            onChange={updateName}
          />
        </div>

        {/* Location */}
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">
              <FaLocationDot />
            </span>
          </div>
          <select
            id="country"
            name="country"
            value={country}
            onChange={updateCountry}
            className="block h-full w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option disabled hidden value="">
              Country
            </option>
            {Object.keys(gCode).map((code, index) => (
              <option key={index} value={code}>
                {gCode[code]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Search Tags */}
      <ul className="flex items-center flex-wrap gap-2">
        {categories.results.map((category, index) => (
          <li
            key={index}
            className={`bg-gray-100 px-2 rounded-md cursor-pointer hover:bg-gray-300 border ${
              category.tag === tag && "bg-gray-300"
            }`}
            onClick={() => updateTag(category.tag)}
          >
            <p>{category.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;
