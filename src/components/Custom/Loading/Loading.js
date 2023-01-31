import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = ({ loading, backgroundColor = "#ffffffcc" }) => {
  return (
    <>
      {loading && (
        <div
          className={`absolute top-0 left-0 bg-[${backgroundColor}] z-10 w-full h-full flex justify-center items-center`}
        >
          <ClipLoader
            color="#2E89FF"
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </>
  );
};

export default Loading;
