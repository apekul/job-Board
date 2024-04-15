import React from "react";
import { useSelector } from "react-redux";
import { BsFillXCircleFill } from "react-icons/bs";
const StatusDisplay = () => {
  const { jobs, status, error } = useSelector((state) => state.data);
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const getErrorMessage = (error) => {
    if (error) {
      const regex = /status: (\d+)/;
      const match = error.match(regex);
      if (match && match[1]) {
        const statusCode = parseInt(match[1]);
        switch (statusCode) {
          case 400:
            return "Oops! Something went wrong with your request. Please check your input and try again.";
          case 401:
            return "Unauthorized: You are not authorized to access this resource. Please log in or contact support.";
          case 403:
            return "Access Forbidden: You don't have permission to view this page. Please contact support if you believe this is an error.";
          case 404:
            return "Page Not Found: The page you're looking for doesn't exist. Please check the URL or go back to the homepage.";
          case 500:
            return "Internal Server Error: Sorry, something went wrong on our end. Please try again later or contact support.";
          default:
            return `Oops! Something went wrong. Status code: ${statusCode}. Please try again later or contact support for assistance.`;
        }
      }
    }
    return "Oops! Something went wrong. Please try again later or contact support for assistance.";
  };

  // useEffect(() => {
  //   if (status === "succeeded") {
  //     setShowSuccessMessage(true);
  //     setTimeout(() => {
  //       setShowSuccessMessage(false);
  //     }, 3000); // Hide after 3 seconds
  //   }
  // }, [status]);

  return (
    <div className="flex items-center gap-5">
      {/* Loading */}
      {status === "loading" && (
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      )}
      {/* succeeded */}
      {/* {showSuccessMessage && (
        <div className="flex items-center bg-green-500 text-white text-sm font-bold px-4 py-3">
          <BsCheckCircleFill />
          <p className="ml-2">Data fetched successfully!</p>
        </div>
      )} */}

      {/* error */}
      {error && (
        <div className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3">
          <BsFillXCircleFill />
          <p className="ml-2">Error: {getErrorMessage(error)}</p>
        </div>
      )}

      {/* no results */}
      {jobs.length === 0 && status === "succeeded" && (
        <p>
          No jobs found. Try refining your search criteria or check back later.
        </p>
      )}
    </div>
  );
};

export default StatusDisplay;
